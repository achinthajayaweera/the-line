# The Line Studio — Awwwards SOTM Clone

A high-performance, pixel-perfect recreation of the award-winning **The Line Animation Studio** website. Built with a focus on buttery-smooth motion, complex scroll-triggered transformations, and a premium "Obsidian & Flare Red" aesthetic.

## Project Overview

This project serves as a technical demonstration of modern frontend capabilities, mimicking the intricate interactions and design system of an Awwwards "Site of the Month" winner.

### Key Highlights
- **Smooth Scroll Architecture**: Integrated Lenis for consistent, high-end scrolling across all browsers.
- **Dynamic Theming**: Real-time header and UI theme switching based on section intersection.
- **Advanced Motion**: Leverages Framer Motion for scroll-bound rotations, parallax images, and staggered text reveals.
- **Custom Interaction**: A specialized cursor system that morphs and provides contextual feedback (e.g., "Read More" prompts).

---

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (Using the latest `@theme` engine)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (`motion/react`)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Utilities**: `clsx`, `tailwind-merge`

---

## 🏗️ Project Structure

```text
├── app/                  # Next.js App Router, Global Styles, Providers
├── components/           # UI Component Library
│   ├── Client/           # Interactive Framer Motion components
│   ├── Server/           # Static Layout & Text components
│   └── SVGs/             # Optimized brand and icon components
├── sections/             # Page-level compositions (Hero, News, Studio, etc.)
├── hooks/                # Custom animation and viewport hooks
├── utils/                # Helper functions (cn, lenis setup)
└── public/               # Optimized assets (MP4 Hero, WEBP/PNG images)
```

---

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/the-line-clone.git
   cd the-line-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📜 Credits

- **Original Design**: [The Line Studio](https://thelinestudio.com/)
- **Inspiration**: Awwwards Site of the Month
