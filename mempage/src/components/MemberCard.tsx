"use client";

import type { Member } from "@/data/members";
import { IconGithub, IconLinkedIn, IconUser } from "@/components/icons";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];
const hoverDelayMs = 1000;

const iconButtonClass =
  "group relative inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 text-muted transition duration-150 ease-out hover:scale-[1.06] hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white";

export function MemberCard({ member }: { member: Member }) {
  const [isHovering, setIsHovering] = useState(false);
  const [isDelayedHover, setIsDelayedHover] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const hoverTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        window.clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleHoverStart = () => {
    setIsHovering(true);
    hoverTimeoutRef.current = window.setTimeout(() => {
      // setIsDelayedHover(true); // Disable inline scale in favor of popup
      setIsPopupOpen(true);
    }, hoverDelayMs);
  };

  const handleHoverEnd = () => {
    setIsHovering(false);
    setIsDelayedHover(false);
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsHovering(false);
    setIsDelayedHover(false);
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const scale = isHovering && !isPopupOpen ? 1.02 : 1;

  return (
    <>
      <motion.div
        layoutId={`member-${member.id}`}
        className="group flex flex-col gap-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-[0_4px_24px_rgba(0,0,0,0.06)] cursor-pointer"
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        onClick={handleClick}
        animate={{ scale }}
        transition={{ duration: 0.3, ease: easing }}
      >
      <div className="relative">
        <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-accent-light text-muted ring-1 ring-transparent transition duration-150 ease-out group-hover:ring-2 group-hover:ring-accent">
          <IconUser className="h-10 w-10" />
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-lg font-semibold text-heading">{member.name}</p>
        <p className="text-sm font-mono text-muted">{member.role}</p>
      </div>
      <div className="mt-auto flex items-center gap-3">
        <a className={iconButtonClass} href={member.github} aria-label="GitHub" onClick={(e) => e.stopPropagation()}>
          <IconGithub className="h-4 w-4" />
          <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-xl border border-zinc-200 bg-white px-2 py-0.5 text-xs text-muted opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
            GitHub
          </span>
        </a>
        <a className={iconButtonClass} href={member.linkedin} aria-label="LinkedIn" onClick={(e) => e.stopPropagation()}>
          <IconLinkedIn className="h-4 w-4" />
          <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-xl border border-zinc-200 bg-white px-2 py-0.5 text-xs text-muted opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
            LinkedIn
          </span>
        </a>
      </div>
    </motion.div>

    <AnimatePresence>
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closePopup}
          />
          <motion.div
            layoutId={`member-${member.id}`}
            className="relative z-10 flex w-full max-w-2xl flex-col items-center justify-center gap-8 rounded-2xl border border-zinc-200 bg-white p-12 shadow-2xl"
          >
            <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-accent-light text-accent shadow-inner">
              <IconUser className="h-20 w-20" />
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-heading">{member.name}</h2>
              <p className="mt-2 text-xl font-mono text-muted">{member.role}</p>
              <p className="mt-4 inline-flex rounded-md bg-accent-light px-3 py-1 text-sm font-semibold tracking-wider text-accent border border-accent/20">
                {member.group}
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl border border-zinc-200 px-6 py-3 font-medium transition hover:border-accent hover:text-accent">
                <IconGithub className="h-5 w-5" />
                GitHub
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl bg-accent text-white border border-transparent px-6 py-3 font-medium transition hover:bg-accent/90 shadow-md shadow-accent/20">
                <IconLinkedIn className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
            <button
              onClick={closePopup}
              className="absolute right-4 top-4 rounded-full p-2 text-muted hover:bg-zinc-100 hover:text-heading"
            >
               ✕
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    </>
  );
}
