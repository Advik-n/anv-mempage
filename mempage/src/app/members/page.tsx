"use client";

import { MemberCard } from "@/components/MemberCard";
import { PodDetailPanel } from "@/components/PodDetailPanel";
import { PodRing } from "@/components/PodRing";
import type { Pod } from "@/data/members";
import { coreTeamMembers, pods } from "@/data/members";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Home() {
  const [activePod, setActivePod] = useState<Pod | null>(null);

  return (
    <main className="flex flex-col bg-base">
      <HeroSection />

      <section className="py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.h2
            className="text-3xl font-semibold text-heading mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.3, ease: easing }}
          >
            Core Team
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.3, ease: easing, delay: 0.05 }}
          >
            {coreTeamMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.h2
            className="text-3xl font-semibold text-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.3, ease: easing }}
          >
            Explore Pods
          </motion.h2>

          <div className="relative">
            <PodRing
              pods={pods}
              activePodId={activePod?.id ?? null}
              onSelect={setActivePod}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.7,
  });
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.85]);
  const blur = useTransform(smoothProgress, [0, 0.5], ["blur(0px)", "blur(8px)"]);
  const letterSpacing = useTransform(
    smoothProgress,
    [0, 1],
    ["0.08em", "0.02em"]
  );

  return (
    <section ref={heroRef} className="relative h-[150vh] w-full">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.div
          className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 text-center"
          style={{
            opacity: reduceMotion ? 1 : opacity,
            scale: reduceMotion ? 1 : scale,
            filter: reduceMotion ? "none" : blur,
          }}
        >
          <motion.h1
            className="text-8xl font-bold tracking-tight text-heading sm:text-9xl"
            style={{ letterSpacing }}
          >
            ANVESHAN
          </motion.h1>
          <p className="max-w-xl text-lg text-muted sm:text-xl font-mono">
            The people behind the ideas
          </p>
          <motion.div
            className="mt-16 flex flex-col items-center gap-4 text-xs font-mono text-muted uppercase tracking-widest"
            animate={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: [0.4, 1, 0.4], y: [0, 10, 0] }
            }
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>Scroll</span>
            <span className="h-10 w-px bg-accent/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
