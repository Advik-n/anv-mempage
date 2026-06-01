"use client";

import type { Pod } from "@/data/members";
import { IconOrbit } from "@/components/icons";
import type { MotionValue } from "framer-motion";
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
  useMotionValue,
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
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const rawRotation = useMotionValue(0);
  const scrollRotation = useSpring(rawRotation, {
    stiffness: 60,
    damping: 20,
    mass: 0.5,
  });

  // Handle Dragging
  const handleDrag = (_: any, info: { delta: { x: number } }) => {
    rawRotation.set(rawRotation.get() + info.delta.x * 0.5);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Allow slight vertical scrolling naturally if needed, but primarily hijack to rotate
      e.preventDefault();
      // Increase or decrease rotation smoothly
      rawRotation.set(rawRotation.get() - (e.deltaY * 0.15));
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (el) {
        el.removeEventListener("wheel", handleWheel);
      }
    };
  }, [rawRotation]);

  const ringRadius = "clamp(120px, 25vw, 240px)";

  return (
    <div className="relative w-full py-8">
      <div 
        className="relative z-10 w-full mx-auto max-w-2xl"
        ref={containerRef}
      >
        <div className="flex h-[320px] w-full flex-col items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing">
          <div
            className="relative w-full h-full"
            style={{ perspective: "1200px" }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ opacity: activePodId ? 0.35 : 1 }}
              transition={{ duration: 0.3, ease: easing }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0}
              onDrag={handleDrag}
            >
              <motion.div
                className="absolute inset-0 pointer-events-none"
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
        </div>
      </div>

      <div className="relative z-20 w-full bg-base">
        <AnimatePresence mode="wait">
          {activePodId && (
            <motion.div
              key={activePodId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: easing }}
              className="overflow-hidden"
            >
              <div className="mx-auto max-w-4xl px-4 pt-12 pb-4">
                <PodDetailPanel
                  pod={pods.find((p) => p.id === activePodId)!}
                  onClose={() => onSelect(null)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
    "group relative flex h-28 w-28 overflow-hidden flex-col items-center justify-center gap-1 rounded-full border px-2 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-transform duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base bg-white pointer-events-auto";
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
        className={`${buttonClassName} ${stateBorderClass}`}
        style={{ scale: combinedScale, opacity, filter: blur }}
        aria-pressed={isActive}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={onSelect}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-light text-accent transition-colors duration-150 ease-out group-hover:bg-white">
          <IconOrbit className="h-4 w-4" />
        </span>
        <span className="text-sm font-semibold text-heading truncate w-full">{pod.name}</span>
        {isActive ? (
          <span className="absolute -bottom-6 text-xs font-mono text-accent">
            Active
          </span>
        ) : null}
      </motion.button>
    </div>
  );
}
