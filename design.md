# ANVESHAN
Version 1.0

---

## 🎯 PURPOSE
Design a premium, minimal, editorial-style Members Page with:
- Scroll-based hero intro
- Core team grid
- 3D ring pod interaction (main feature)
- Expandable pod view (same page)
- Clean, reusable member cards

FINAL GOAL:
Only dynamic input required = images, names, roles.

---

# 🧠 DESIGN SYSTEM (STRICT)

## 🎨 COLORS
Use ONLY:

- Accent: #4F46E5
- Accent Light: #EEF2FF
- Background: #FAFAFA
- Heading: #18181B
- Body: #52525B
- Muted: #A1A1AA

RULES:
- No gradients
- No additional accent colors
- White-based UI only

---

## 🔤 TYPOGRAPHY

Fonts:
- Primary: DM Sans
- Mono: JetBrains Mono

Scale:
- H1: text-7xl / text-8xl
- Section Title: text-3xl
- Card Name: text-lg font-semibold
- Meta: text-sm font-mono text-muted

---

## 📐 LAYOUT RULES

- Max width: max-w-6xl mx-auto
- Section spacing: py-24
- Grid gap: gap-6
- Border radius: rounded-xl (ONLY)

---

## ⚡ ANIMATION RULES

- Hover: scale(1.02) OR border change (consistent)
- Micro: 150ms ease
- Layout: 300ms ease-out
- Entry animation: ONCE (no repeat on scroll)

---

# 🧱 PAGE STRUCTURE

---

# 1️⃣ HERO SECTION

## Layout

Centered vertically:

ANVESHAN  
The people behind the ideas  
↓ (scroll indicator)

---

## Styling

- Large bold heading
- Subtext muted
- Clean whitespace

---

## Animation

On scroll:
- opacity: 1 → 0
- scale: 1 → 0.95
- blur: 0 → 4px

Scroll indicator:
- bounce animation
- opacity pulse

---

# 2️⃣ CORE TEAM SECTION

## Layout

Title:
Core Team

Grid:
- 2 cols mobile
- 4 cols desktop

---

## Member Card

Structure:
[Image]
[Name]
[Role]
[Icons: GitHub, LinkedIn]

---

## Styling

- Image: aspect-square, rounded-xl
- Card: border border-zinc-200
- Clean white background

---

## Hover

- Avatar: ring-2 ring-accent
- Card: scale(1.02)

---

## Rules

- No bios
- No heavy animations

---

# 3️⃣ PODS SECTION (3D RING — MAIN FEATURE)

## Layout

Centered section:

Explore Pods

[3D Ring Component]

---

## Structure

- Circular ring
- Tilted in 3D
- Pods evenly spaced
- Center empty

---

## Pod Design

Each pod:

[Icon Placeholder]
Pod Name

---

## Styling

- White card
- Border: border-zinc-200
- Rounded-xl
- Subtle shadow

---

## Motion

### Idle:
- Slow rotateY animation

### Scroll / Drag:
- Rotates ring smoothly

---

## Depth Effect

Front pod:
- scale: 1.2
- opacity: 1
- blur: 0

Back pods:
- scale: 0.8
- opacity: 0.4
- blur: 2px

---

## Hover

- Scale up
- Pause rotation
- Border → accent

---

## Click

- Pod moves to center
- Ring fades slightly

---

# 4️⃣ POD EXPANSION PANEL

## Behavior

- Opens in same page
- No navigation / no new tab

---

## Layout

[← Back Button]

Pod Name  
Lead: Name  

[Members Grid]

---

## Animation

- Shared layout animation
- Scale + position transform
- Background fade

Duration:
300ms ease-out

---

# 5️⃣ MEMBERS GRID (INSIDE POD)

## Layout

- grid-cols-2 (mobile)
- grid-cols-4 (desktop)
- gap-6

---

## Card

Same as Core Team (reuse component)

---

## Hover

- Same behavior (consistency)

---

# 🔁 BACK INTERACTION

- Top-left back button
- Smooth collapse animation
- Return to ring with same rotation state

---

# 🧠 MICRO DETAILS

## Motion Easing

ease: [0.22, 1, 0.36, 1]

---

## Shadows

0 4px 24px rgba(0,0,0,0.06)

---

## Borders

border border-zinc-200

---

## Glassmorphism

Use ONCE (optional):
- Highlight card in pods section

---

# 🧾 DATA STRUCTURE

## Members

{
  id: 1,
  name: "Name",
  role: "Role",
  group: "Core Team | Technical | Design | Operations",
  avatar: "/default.jpg",
  github: "#",
  linkedin: "#"
}

---

## Pods

{
  name: "Technical",
  lead: "Name",
  members: [...]
}

---

# ❌ DO NOT DO

- No gradients
- No multiple accent colors
- No inconsistent spacing
- No multiple card styles
- No repeated scroll-trigger animations
- No hardcoded data

---

# ✅ FINAL EXPERIENCE FLOW

Landing →  
Hero scroll intro →  
Core team →  
3D ring pods →  
Click pod →  
Expand →  
View members →  
Back →  
Return to ring  

---

# 🚀 IMPLEMENTATION CHECKLIST

- [ ] Tailwind config matches design system
- [ ] Fonts added (DM Sans + JetBrains Mono)
- [ ] Data stored in /src/data
- [ ] MemberCard reusable
- [ ] Pod component reusable
- [ ] Animations consistent
- [ ] Accent color used correctly
- [ ] Responsive layout verified

---

# 🎯 FINAL NOTE

If built correctly:
- Feels premium
- Feels minimal
- Feels interactive
- Looks portfolio-worthy

Only remaining task:
→ Add real images, names, and roles