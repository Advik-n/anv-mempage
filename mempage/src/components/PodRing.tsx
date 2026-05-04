"use client";

import type { Pod } from "@/data/members";
import { IconOrbit } from "@/components/icons";
import type { MotionValue } from "framer-motion";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PodDetailPanel } from "@/components/PodDetailPanel";

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

type PodRingProps = {
  pods: Pod[];
  activePodId: string | null;
  onSelect: (pod: Pod | null) => void;
};

export function PodRing({ pods, activePodId, onSelect }: PodRingProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [isHovering, setIsHovering] = useState(false);

  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, {
    stiffness: 40,
    damping: 15,
    mass: 0.5,
  });

  const scrollRotation = useTransform(smoothScroll, (y) => y * 0.2); // Multiply pixel scroll distance by 0.2 to get degrees

  const ringRadius = "clamp(120px, 25vw, 240px)";

  return (
    <div ref={scrollRef} className="relative z-10 mt-8 w-full">
      <div
        className="relative px-4 py-8"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className="relative h-[420px] w-full md:h-[520px]"
          style={{ perspective: "1200px" }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ opacity: activePodId ? 0.35 : 1 }}
            transition={{ duration: 0.3, ease: easing }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                rotateY: reduceMotion ? 0 : scrollRotation,
                transformStyle: "preserve-3d",
                ["--ring-radius" as string]: ringRadius,
              }}
            >
              {pods.map((pod, index) => (
                <PodItem
                  key={pod.id}
                  pod={pod}
                  index={index}
                  total={pods.length}
                  rotation={scrollRotation}
                  isActive={activePodId === pod.id}
                  onSelect={() => onSelect(pod)}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute left-0 right-0 top-full mt-4 flex justify-center pb-8">
          <AnimatePresence>
            {activePodId ? (
              <div className="w-full max-w-4xl px-4 relative z-50">
                <PodDetailPanel
                  key={activePodId}
                  pod={pods.find((p) => p.id === activePodId)!}
                  onClose={() => onSelect(null)}
                />
              </div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

type PodItemProps = {
  pod: Pod;
  index: number;
  total: number;
  rotation: MotionValue<number>;
  isActive: boolean;
  onSelect: () => void;
};

function PodItem({ pod, index, total, rotation, isActive, onSelect }: PodItemProps) {
  const angle = useMemo(() => (index / total) * 360, [index, total]);

  const depth = useTransform(rotation, (value) => {
    const radians = ((value + angle) * Math.PI) / 180;
    return (Math.cos(radians) + 1) / 2;
  });

  const scale = useTransform(depth, (value) => 0.8 + value * 0.4);
  const opacity = useTransform(depth, (value) => 0.4 + value * 0.6);
  const blur = useTransform(depth, (value) => `blur(${(1 - value) * 2}px)`);
  const zIndex = useTransform(depth, (value) => Math.round(value * 10));
  const [isHovered, setIsHovered] = useState(false);
  const hoverScale = useSpring(1, { stiffness: 180, damping: 18, mass: 0.6 });

  useEffect(() => {
    hoverScale.set(isHovered ? 1.04 : 1);
  }, [hoverScale, isHovered]);

  const combinedScale = useTransform(
    [scale, hoverScale],
    ([baseScale, hover]) => (baseScale as number) * (hover as number)
  );

  const buttonClassName =
    "group relative flex h-36 w-36 flex-col items-center justify-center gap-3 rounded-xl border px-4 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-transform duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base";
  const stateBorderClass = isActive ? "border-accent" : "border-zinc-200";

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(var(--ring-radius))`,
        zIndex: zIndex as any,
      }}
    >
      <motion.button
        type="button"
        layoutId={`pod-card-${pod.id}`}
        className={`${buttonClassName} ${stateBorderClass} bg-white`}
        style={{ scale: combinedScale, opacity, filter: blur }}
        aria-pressed={isActive}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={onSelect}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-light text-accent transition-colors duration-150 ease-out group-hover:bg-white">
          <IconOrbit className="h-5 w-5" />
        </span>
        <span className="text-sm font-semibold text-heading">{pod.name}</span>
        {isActive ? (
          <span className="absolute -bottom-6 text-xs font-mono text-accent">
            Active
          </span>
        ) : null}
      </motion.button>
    </div>
  );
}
