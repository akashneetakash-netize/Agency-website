# 🚀 Eleviq — Premium Enterprise AI Agency Web Application

A production-grade, highly interactive single-page React 18 application for **Eleviq**, an enterprise AI & automation agency.

Built with **React 18**, **Vite**, **Framer Motion**, **CSS Modules**, **Tailwind CSS**, **React Hook Form**, **Zod**, and **Lucide Icons**.

---

## ✨ Features & Architecture

- ⚡ **Vite 5 Build Setup**: Instant HMR, optimized manual vendor chunk splitting.
- 🎨 **Glassmorphism Aesthetic**: Scoped CSS Modules with custom theme custom properties and Tailwind utilities.
- 🎭 **Framer Motion Animations**: Scroll-triggered entry animations (`AnimatedSection`), interactive card lifts, spring physics.
- ⭐ **Signature Team Carousel**: Horizontal snap-scroll carousel (`TeamCarousel.jsx`) featuring active center card scaling, blur/unblur visual cues, arrow + dot controls, and keyboard navigation (`ArrowLeft` / `ArrowRight`).
- 📝 **Validated Contact Form**: Powered by **React Hook Form** + **Zod** schema validation, live character counter, custom Toast notifications, and real-time state feedback.
- ❓ **Multi-Expand FAQ Accordion**: Interactive accordion component with smooth height expansion and 45° rotating toggle icon.
- 📊 **Animated Counters**: Count-up statistics for metrics (`StatsBar.jsx`, `MetricCard.jsx`).
- 🛡️ **Error Boundaries & Fallbacks**: Top-level `ErrorBoundary` catching component errors gracefully.
- 📊 **Analytics Integration**: Centralized `analytics.js` for tracking pageviews and form submissions.
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile breakpoints.

---

## 🛠️ Project Structure

```
eleviq-agency/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   ├── common/
│   │   │   ├── AnimatedSection/
│   │   │   ├── Badge/
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── ErrorBoundary/
│   │   │   ├── Input/
│   │   │   ├── SectionHeader/
│   │   │   ├── Select/
│   │   │   └── Textarea/
│   │   ├── layout/
│   │   │   ├── Footer/
│   │   │   ├── Navigation/
│   │   │   └── PageLayout/
│   │   ├── sections/
│   │   │   ├── Blog/
│   │   │   ├── Contact/
│   │   │   ├── FAQ/
│   │   │   ├── Hero/
│   │   │   ├── NotFound/
│   │   │   ├── Portfolio/
│   │   │   ├── Process/
│   │   │   ├── Services/
│   │   │   ├── Team/             ← Signature Snap-Scroll Carousel
│   │   │   └── Testimonials/
│   │   └── ui/
│   │       ├── AnimatedCounter/
│   │       ├── LoadingSpinner/
│   │       ├── ScrollProgress/
│   │       ├── Skeleton/
│   │       └── Toast/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── styles/
│   └── utils/
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🚀 Quick Start Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Local Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```
