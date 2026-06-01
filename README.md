# Anveshan - Members Page

A premium, minimal, editorial-style members directory showcasing the Core Team and specialized Pods. Designed with fluid 3D interactions and tailored scroll typography.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: DM Sans (Primary/Heading) & JetBrains Mono (Accents/Meta)

## ✨ Features & Animations

### 1. Scroll-Linked Hero Animations
As the user scrolls down from the top of the page, the Hero section gracefully transitions using Framer Motion's `useScroll` tracking:
- **Opacity Fade**: Text smoothly fades out (`1 → 0`).
- **Scale Down**: The header scales down into the background (`1 → 0.85`).
- **Blur Effect**: A progressive lens blur is applied as it parallax-scrolls out of view.
- **Letter Spacing**: The tracking of the main "ANVESHAN" title dynamically shifts upon scrolling.

### 2. Interactive 3D Pod Ring
The core feature of the page is the "Explore Pods" carousel:
- **3D Perspective**: Built using CSS `preserve-3d` and `rotateY` transforms mapped to an interactive physics spring.
- **Drag & Swipe**: Instead of scrolljacking, the circle smoothly rotates via intuitive `drag="x"` interactions.
- **Z-Index & Depth Scaling**: Pod cards passing through the "back" of the 3D ring naturally scale down, lose opacity, and blur slightly for realistic depth-of-field.
- **Responsive**: Carefully calculated diameters prevent overlap on smaller screens.

### 3. Dynamic Detail Panels (AnimatePresence)
- Clicking a circular Pod card smoothly slides open an expanded Detail Panel below it. 
- Built with Framer Motion's `<AnimatePresence mode="wait">`, allowing live seamless height-shifts and cross-fades when transitioning directly from one active Pod to another.

### 4. Member Cards & Micro-Interactions
- **Hover States**: Polished 150ms `ease-out` scale bumps, drop-shadow elevations, and Indigo (`#4F46E5`) border highlights.
- **Popup Modals**: Clicking any Core Member triggers an overlay modal featuring their Avatar, Role, and Social Links (GitHub, LinkedIn) in an expanded view.

## 🛠️ How to Run Locally

1. **Navigate to the core directory**:
   ```bash
   cd mempage
   ```

2. **Install dependencies**:
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **View the application**:
   Open your browser and navigate to:
   [http://localhost:3000](http://localhost:3000)

## 🎨 Design System Constraints
- **Background**: Pure White `#ffffff`
- **Typographic Hierarchy**: High contrast `#000000` Headings, `#3f3f46` Body text.
- **Accent Color**: Strict Indigo `#4F46E5` for active states, highlights, and primary buttons.
