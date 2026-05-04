"use client";

import type { SVGProps } from "react";

export function IconUser(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 12.5c2.485 0 4.5-2.015 4.5-4.5S14.485 3.5 12 3.5 7.5 5.515 7.5 8s2.015 4.5 4.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 20.5c1.862-3.167 4.553-4.75 8-4.75s6.138 1.583 8 4.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconGithub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2.5c-5.523 0-10 4.477-10 10a10 10 0 0 0 6.838 9.487c.5.092.687-.217.687-.483 0-.237-.009-.868-.013-1.703-2.781.604-3.368-1.34-3.368-1.34-.455-1.157-1.111-1.465-1.111-1.465-.908-.62.07-.608.07-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.087 2.91.832.091-.646.35-1.087.637-1.337-2.221-.253-4.555-1.111-4.555-4.945 0-1.093.39-1.987 1.029-2.687-.104-.253-.446-1.272.097-2.65 0 0 .839-.269 2.75 1.026A9.57 9.57 0 0 1 12 7.07a9.57 9.57 0 0 1 2.507.338c1.909-1.295 2.747-1.026 2.747-1.026.545 1.378.202 2.397.099 2.65.64.7 1.027 1.594 1.027 2.687 0 3.843-2.338 4.688-4.566 4.936.359.309.679.92.679 1.854 0 1.338-.012 2.418-.012 2.747 0 .269.184.58.694.482A10.001 10.001 0 0 0 22 12.5c0-5.523-4.477-10-10-10Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconLinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.94 8.5V20H3.5V8.5h3.44ZM5.22 4.5a2 2 0 1 1 0 4.001 2 2 0 0 1 0-4.001ZM20.5 13.1V20h-3.44v-6.12c0-1.54-.55-2.59-1.92-2.59-1.05 0-1.68.71-1.95 1.39-.1.25-.13.6-.13.95V20H9.62s.05-10.5 0-11.5h3.44v1.63c.46-.71 1.28-1.72 3.12-1.72 2.28 0 3.99 1.49 3.99 4.69Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconArrowLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15.5 5.5 9 12l6.5 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconOrbit(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4.5 9.5c2.5-1.9 4.8-2.9 7.5-3 3.1-.1 5.7.9 7.5 3M19.5 14.5c-2.5 1.9-4.8 2.9-7.5 3-3.1.1-5.7-.9-7.5-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
