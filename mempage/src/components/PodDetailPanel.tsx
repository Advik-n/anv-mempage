"use client";

import type { Pod } from "@/data/members";
import { IconArrowLeft } from "@/components/icons";
import { motion } from "framer-motion";
import { MemberCard } from "@/components/MemberCard";

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

type PodDetailPanelProps = {
  pod: Pod;
  onClose: () => void;
};

export function PodDetailPanel({ pod, onClose }: PodDetailPanelProps) {
  return (
    <motion.section
      className="relative z-0 mt-12 rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.98 }}
      transition={{ duration: 0.3, ease: easing }}
    >
      <button
        type="button"
        onClick={onClose}
        className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 px-4 py-2 text-sm font-mono text-muted transition duration-150 ease-out hover:scale-[1.02] hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        <IconArrowLeft className="h-4 w-4" />
        Back
      </button>

      <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center">
        <motion.div
          layoutId={`pod-card-${pod.id}`}
          className="flex h-32 w-32 flex-col items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-base text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
        >
          <span className="text-xs font-mono text-muted">Pod</span>
          <span className="text-sm font-semibold text-heading">{pod.name}</span>
        </motion.div>
        <div>
          <h3 className="text-3xl font-semibold text-heading">{pod.name}</h3>
          <p className="mt-2 text-sm font-mono text-muted">Lead: {pod.lead}</p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
        {pod.members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </motion.section>
  );
}
