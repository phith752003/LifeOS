# LifeOS — Design System Specification

> **Version:** 1.0  
> **Last Updated:** 2026-07-17  
> **Author:** Design System Lead  
> **Status:** Draft — Pending Review  
> **Depends on:** UX_SPEC.md

---

## 1. Design Tokens

> All values in this document are **technology-agnostic**. They can be implemented as CSS Custom Properties, Tailwind config, SCSS variables, or any design token format.

---

## 2. Color Tokens

### 2.1 Theme Palettes

Each palette contains 5 colors ordered from darkest (primary) to lightest (surface).

#### Deep Sea Mint

| Token | HEX | HSL | Usage |
|-------|-----|-----|-------|
| `palette-1` | `#22577a` | `hsl(200, 56%, 30%)` | Primary, CTAs, nav active |
| `palette-2` | `#38a3a5` | `hsl(181, 48%, 43%)` | Secondary elements |
| `palette-3` | `#57cc99` | `hsl(153, 51%, 57%)` | Charts, highlights, accent |
| `palette-4` | `#80ed99` | `hsl(138, 78%, 71%)` | Hover backgrounds, light accent |
| `palette-5` | `#c7f9cc` | `hsl(132, 83%, 88%)` | Surface tint, subtle backgrounds |

#### Icy Navy

| Token | HEX | HSL | Usage |
|-------|-----|-----|-------|
| `palette-1` | `#1b4965` | `hsl(203, 58%, 25%)` | Primary |
| `palette-2` | `#62b6cb` | `hsl(192, 48%, 59%)` | Secondary |
| `palette-3` | `#5fa8d3` | `hsl(205, 54%, 60%)` | Accent |
| `palette-4` | `#cae9ff` | `hsl(207, 100%, 90%)` | Light accent |
| `palette-5` | `#bee9e8` | `hsl(179, 54%, 83%)` | Surface |

#### Vibrant Pop

| Token | HEX | HSL | Usage |
|-------|-----|-----|-------|
| `palette-1` | `#1b9aaa` | `hsl(187, 72%, 39%)` | Primary |
| `palette-2` | `#ef476f` | `hsl(348, 84%, 61%)` | Secondary (danger accent) |
| `palette-3` | `#ffc43d` | `hsl(42, 100%, 62%)` | Accent (warning/highlight) |
| `palette-4` | `#06d6a0` | `hsl(159, 96%, 43%)` | Success accent |
| `palette-5` | `#f8ffe5` | `hsl(77, 100%, 95%)` | Surface |

#### Citrus Sunrise

| Token | HEX | HSL | Usage |
|-------|-----|-----|-------|
| `palette-1` | `#ff9f1c` | `hsl(33, 100%, 55%)` | Primary |
| `palette-2` | `#ffbf69` | `hsl(33, 100%, 71%)` | Secondary |
| `palette-3` | `#2ec4b6` | `hsl(173, 63%, 47%)` | Accent |
| `palette-4` | `#cbf3f0` | `hsl(175, 68%, 87%)` | Light accent |
| `palette-5` | `#ffffff` | `hsl(0, 0%, 100%)` | Surface |

### 2.2 Semantic Color Tokens

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `--color-bg` | `#ffffff` | `#0a0a0a` |
| `--color-surface` | `#ffffff` | `#141414` |
| `--color-surface-hover` | `#f9fafb` | `#1a1a1a` |
| `--color-border` | `#e5e7eb` | `#1f2937` |
| `--color-border-hover` | `#d1d5db` | `#374151` |
| `--color-text-primary` | `#111827` | `#f9fafb` |
| `--color-text-secondary` | `#6b7280` | `#9ca3af` |
| `--color-text-tertiary` | `#9ca3af` | `#6b7280` |

### 2.3 Status Colors (Mode-independent)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-success` | `#10b981` | Completed, positive delta |
| `--color-warning` | `#f59e0b` | Medium risk, approaching limit |
| `--color-danger` | `#ef4444` | High risk, overdue, critical |
| `--color-info` | `#3b82f6` | Informational, neutral |

---

## 3. Typography Tokens

### 3.1 Font Stack

```
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
```

### 3.2 Type Scale

| Token | Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Usage |
|-------|-----------|-----------|--------|------------|----------------|-------|
| `--text-display` | 48 | 3.000 | 700 | 1.0 | -0.025em | Hero numbers |
| `--text-h1` | 32 | 2.000 | 700 | 1.2 | -0.020em | Page titles |
| `--text-h2` | 24 | 1.500 | 600 | 1.2 | -0.015em | Card titles |
| `--text-h3` | 20 | 1.250 | 600 | 1.3 | -0.010em | Sub-sections |
| `--text-body-lg` | 16 | 1.000 | 400 | 1.5 | 0 | Primary body |
| `--text-body` | 14 | 0.875 | 400 | 1.5 | 0 | Secondary body |
| `--text-caption` | 12 | 0.750 | 500 | 1.4 | 0.020em | Labels, timestamps |

### 3.3 Font Weight Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--font-regular` | 400 | Body text |
| `--font-medium` | 500 | Labels, captions, emphasis |
| `--font-semibold` | 600 | Headings h2/h3, button text |
| `--font-bold` | 700 | Headings h1, display numbers |

---

## 4. Spacing Scale

Base unit: **4px**

| Token | Value (px) | Value (rem) | Usage |
|-------|-----------|-------------|-------|
| `--space-1` | 4 | 0.25 | Tight gaps (icon-to-text) |
| `--space-2` | 8 | 0.50 | Inline spacing, small gaps |
| `--space-3` | 12 | 0.75 | Between related items |
| `--space-4` | 16 | 1.00 | Standard gap, card inner sections |
| `--space-6` | 24 | 1.50 | Card padding (desktop), grid gap (desktop) |
| `--space-8` | 32 | 2.00 | Section spacing, large card padding |
| `--space-12` | 48 | 3.00 | Between major sections |
| `--space-16` | 64 | 4.00 | Page-level spacing |
| `--space-24` | 96 | 6.00 | Large vertical rhythm |

---

## 5. Border Radius

| Token | Value (px) | Usage |
|-------|-----------|-------|
| `--radius-sm` | 8 | Buttons, badges, inputs |
| `--radius-md` | 12 | Small cards, dropdowns |
| `--radius-lg` | 16 | Standard cards |
| `--radius-xl` | 20 | Hero cards, modals |
| `--radius-full` | 9999 | Avatars, pills, circular elements |

---

## 6. Shadow Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-none` | `none` | Default card state |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle elevation |
| `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05)` | Card hover |
| `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.04)` | Elevated elements, dropdowns |
| `--shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.04)` | Modals, overlays |

Dark mode shadows use slightly higher opacity values (multiply by 2).

---

## 7. Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--z-base` | 0 | Default content |
| `--z-card` | 1 | Cards on hover (elevated) |
| `--z-dropdown` | 10 | Dropdowns, tooltips |
| `--z-sticky` | 20 | Sticky topbar |
| `--z-overlay` | 30 | Mobile nav overlay |
| `--z-modal` | 40 | Modals |
| `--z-toast` | 50 | Toast notifications |

---

## 8. Breakpoints

| Token | Value (px) | Usage |
|-------|-----------|-------|
| `--bp-sm` | 640 | Small mobile adjustments |
| `--bp-md` | 768 | Tablet breakpoint (→ 2 col) |
| `--bp-lg` | 1024 | Large tablet / small desktop |
| `--bp-xl` | 1280 | Desktop breakpoint (→ full grid) |
| `--bp-2xl` | 1536 | Wide desktop |

---

## 9. Icon System

| Property | Value |
|----------|-------|
| Library | Lucide Icons |
| Default size | 20px |
| Small size | 16px |
| Large size | 24px |
| Stroke width | 1.75 (default), 2 (bold/emphasis) |
| Color | Inherits `currentColor` |

### Icon Size Scale

| Token | Size (px) | Usage |
|-------|-----------|-------|
| `--icon-xs` | 14 | Inline text icons |
| `--icon-sm` | 16 | Buttons, badges |
| `--icon-md` | 20 | Default, nav items |
| `--icon-lg` | 24 | Card titles, actions |
| `--icon-xl` | 32 | Empty states, hero sections |

---

## 10. Animation Duration Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-instant` | 100ms | Opacity toggles, focus rings |
| `--duration-fast` | 200ms | Hover states, button press |
| `--duration-normal` | 300ms | Card transitions, tab switches |
| `--duration-medium` | 400ms | Entrance animations |
| `--duration-slow` | 600ms | Complex entrances, chart draws |
| `--duration-slower` | 1000ms | Number count-ups, loading cycles |

---

## 11. Transition Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | General purpose |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Elements leaving |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering |
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Snappy entrances |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bouncy (minimal) |

---

## 12. Component Sizing Tokens

### Button Sizes

| Size | Height | Padding X | Font Size | Radius |
|------|--------|-----------|-----------|--------|
| `sm` | 32px | 12px | 12px | `--radius-sm` |
| `md` | 40px | 16px | 14px | `--radius-sm` |
| `lg` | 48px | 24px | 16px | `--radius-sm` |

### Input Sizes

| Size | Height | Padding X | Font Size | Radius |
|------|--------|-----------|-----------|--------|
| `sm` | 32px | 10px | 13px | `--radius-sm` |
| `md` | 40px | 14px | 14px | `--radius-sm` |
| `lg` | 48px | 16px | 16px | `--radius-sm` |

---

## 13. Grid Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--grid-columns` | 12 | Desktop grid |
| `--grid-gap-desktop` | 24px | Desktop gap |
| `--grid-gap-tablet` | 16px | Tablet gap |
| `--grid-gap-mobile` | 12px | Mobile gap |
| `--container-max` | 1440px | Max content width |
| `--container-pad-desktop` | 32px | Desktop side padding |
| `--container-pad-tablet` | 24px | Tablet side padding |
| `--container-pad-mobile` | 16px | Mobile side padding |
