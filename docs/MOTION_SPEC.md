# LifeOS — Motion Specification

> **Version:** 1.0  
> **Last Updated:** 2026-07-17  
> **Author:** Motion Director  
> **Status:** Draft — Pending Review  
> **Depends on:** DESIGN_SYSTEM.md (duration & easing tokens)

---

## 1. Motion Philosophy

| Principle | Description |
|-----------|-------------|
| **Purposeful** | Every animation must serve UX — guide attention, confirm action, or show relationship |
| **Subtle** | Avoid excessive bounce, overshoot, or playful motion. Premium = restrained |
| **Fast** | Snappy feel. Most animations 200–600ms. Never > 1000ms except continuous loops |
| **Physics-based** | Favor spring/expo curves over linear. Natural deceleration |
| **Respectful** | Honor `prefers-reduced-motion`. Provide instant fallbacks |

---

## 2. Entrance Animations

### 2.1 Single Element Entrance

| Property | From | To | Duration | Easing | Delay |
|----------|------|----|----------|--------|-------|
| `opacity` | 0 | 1 | 300ms | `easeOutExpo` | 0 |
| `translateY` | 10px | 0 | 300ms | `easeOutExpo` | 0 |

Used for: Cards appearing, content loading in, section becoming visible.

### 2.2 Staggered List/Grid Entrance

| Property | From | To | Duration | Easing | Stagger Delay |
|----------|------|----|----------|--------|---------------|
| `opacity` | 0 | 1 | 300ms | `easeOutExpo` | 50ms per item |
| `translateY` | 10px | 0 | 300ms | `easeOutExpo` | 50ms per item |

Used for: Dashboard cards loading, task list items, habit rows.

**Max stagger total:** 500ms (cap at 10 items × 50ms). Beyond 10 items, show remaining instantly.

### 2.3 Hero Entrance (Command Center)

| Property | From | To | Duration | Easing | Delay |
|----------|------|----|----------|--------|-------|
| `opacity` | 0 | 1 | 400ms | `easeOutExpo` | 0 |
| `translateY` | 20px | 0 | 400ms | `easeOutExpo` | 0 |
| `scale` | 0.98 | 1.0 | 400ms | `easeOutExpo` | 0 |

Used for: Command Center card on initial page load. Only plays once per session.

---

## 3. Exit Animations

### 3.1 Element Exit

| Property | From | To | Duration | Easing |
|----------|------|----|----------|--------|
| `opacity` | 1 | 0 | 200ms | `easeIn` |
| `scale` | 1 | 0.95 | 200ms | `easeIn` |

Used for: Card dismissal, item removal, modal close.

### 3.2 Task Completion Exit

| Property | From | To | Duration | Easing |
|----------|------|----|----------|--------|
| `textDecoration` | none | line-through | 300ms | `linear` |
| `opacity` | 1 | 0.5 | 300ms | `easeOut` |
| `translateX` | 0 | -10px | 300ms | `easeOut` |

Used for: Task marked as completed → visual strike-through then fade.

---

## 4. Hover Animations

### 4.1 Card Hover

| Property | From | To | Duration | Easing |
|----------|------|----|----------|--------|
| `translateY` | 0 | -2px | 200ms | `easeOut` |
| `box-shadow` | `--shadow-none` | `--shadow-md` | 200ms | `easeOut` |

**Implementation note:** Use CSS transitions for hover, not JavaScript animation library.

### 4.2 Button Hover

| Property | From | To | Duration | Easing |
|----------|------|----|----------|--------|
| `background` | base | darken 10% | 150ms | `ease` |
| `scale` | 1 | 1.02 | 150ms | `easeOut` |

### 4.3 Interactive Element Hover

| Property | From | To | Duration | Easing |
|----------|------|----|----------|--------|
| `background` | transparent | `--color-surface-hover` | 150ms | `ease` |

Used for: Nav links, list items, heatmap cells.

---

## 5. Loading Animations

### 5.1 Skeleton Pulse

| Property | Values | Duration | Easing | Iteration |
|----------|--------|----------|--------|-----------|
| `opacity` | 0.4 ↔ 1.0 | 1500ms | `easeInOut` | Infinite |

Used for: Skeleton placeholder while data loads.

### 5.2 Spinner (if needed)

| Property | Values | Duration | Easing | Iteration |
|----------|--------|----------|--------|-----------|
| `rotate` | 0deg → 360deg | 800ms | `linear` | Infinite |
| `opacity` | element visible | 1 | instant | — |

Used for: Small loading indicators within components.

---

## 6. Chart & Data Visualization Animations

### 6.1 Bar Chart Growth

| Property | From | To | Duration | Easing | Stagger |
|----------|------|----|----------|--------|---------|
| `scaleY` | 0 | 1 | 600ms | `spring(1, 80, 10, 0)` | 50ms per bar |
| `transformOrigin` | — | `bottom center` | — | — | — |

Used for: 7-day productivity bar chart, financial bar charts.

### 6.2 Circular Progress (SVG)

| Property | From | To | Duration | Easing |
|----------|------|----|----------|--------|
| `strokeDashoffset` | full circumference | target offset | 800ms | `easeOutExpo` |

Used for: Completion rate circle, focus score ring.

**Calculation:** `offset = circumference - (circumference × percentage / 100)`

### 6.3 Heatmap Cell Appearance

| Property | From | To | Duration | Easing | Stagger |
|----------|------|----|----------|--------|---------|
| `opacity` | 0 | 1 | 200ms | `easeOut` | 5ms per cell |
| `scale` | 0.5 | 1 | 200ms | `easeOutExpo` | 5ms per cell |

Used for: GitHub-style expense heatmap rendering.

**Max stagger:** Cap at 2000ms total regardless of cell count.

### 6.4 Progress Bar Fill

| Property | From | To | Duration | Easing |
|----------|------|----|----------|--------|
| `width` (or `scaleX`) | 0% | target% | 600ms | `easeOutExpo` |

Used for: Emergency fund bar, any horizontal progress indicator.

---

## 7. Number Animations

### 7.1 Counter (Count Up)

| Property | From | To | Duration | Easing | Round |
|----------|------|----|----------|--------|-------|
| `innerHTML` / value | 0 | target value | 800ms | `easeOutExpo` | 1 (integers) |

Used for: Financial totals, streak counters, completion percentages, metric cards.

### 7.2 Delta Change

| Property | From | To | Duration | Easing |
|----------|------|----|----------|--------|
| `innerHTML` / value | old value | new value | 400ms | `easeOutExpo` |
| `color` | — | green (↑) or red (↓) | 400ms | `easeOut` |

Used for: When a metric updates in real-time (e.g., task completion changes analytics).

---

## 8. Feedback Animations

### 8.1 Success (Check)

| Property | Values | Duration | Easing |
|----------|--------|----------|--------|
| `scale` | [1, 1.2, 1] | 300ms | `easeOutExpo` |
| `opacity` | [0, 1] | 150ms | `easeOut` |

Used for: Habit checkbox marked, task completed.

### 8.2 Error / Sin (Shake)

| Property | Values | Duration | Easing |
|----------|--------|----------|--------|
| `translateX` | [0, -10, 10, -5, 5, 0] | 400ms | `easeOutExpo` |

Used for: Sin/Fail button pressed, validation error.

### 8.3 Warning Pulse

| Property | Values | Duration | Easing | Iteration |
|----------|--------|----------|--------|-----------|
| `opacity` | [1, 0.6, 1] | 1500ms | `easeInOut` | 3 (then stop) |

Used for: Burnout risk high indicator, overdue task.

---

## 9. Theme Transition

### 9.1 Palette Switch

| Property | Duration | Easing |
|----------|----------|--------|
| All CSS custom properties (colors) | 300ms | `ease` |
| background-color | 300ms | `ease` |
| color | 300ms | `ease` |
| border-color | 300ms | `ease` |

**Implementation:** Apply `transition: color 300ms ease, background-color 300ms ease, border-color 300ms ease` to `*` during theme switch, remove after transition completes to avoid performance impact.

### 9.2 Dark/Light Mode Toggle

Same as palette switch. Transition all color-related properties.

---

## 10. Tab/Content Transition

### 10.1 Tab Switch (Planner Day/Week/Month)

| Property | Outgoing | Incoming | Duration | Easing |
|----------|----------|----------|----------|--------|
| `opacity` | 1 → 0 | 0 → 1 | 200ms | `easeOut` |
| `translateY` | 0 → -5px | 5px → 0 | 200ms | `easeOut` |

**Sequence:** Out (100ms) → In (100ms). Total 200ms.

### 10.2 Content Replace

| Property | From | To | Duration | Easing |
|----------|------|----|----------|--------|
| `opacity` | 0 | 1 | 200ms | `easeOut` |

Used for: Any content swap that doesn't use tabs.

---

## 11. Scroll-Triggered Animations

### 11.1 Scroll Into View

| Trigger | Animation |
|---------|-----------|
| Card enters viewport (50% visible) | Play entrance animation (Section 2.1) |
| Already visible on load | Play immediately with stagger (Section 2.2) |

**Implementation:** IntersectionObserver with `threshold: 0.5`. Each card animates once only.

### 11.2 Parallax

**NOT USED.** No parallax effects in LifeOS. Conflicts with data-first, calm philosophy.

---

## 12. Reduced Motion Fallbacks

> [!IMPORTANT]
> When `prefers-reduced-motion: reduce` is active, the following rules apply:

| Normal Behavior | Reduced Motion Fallback |
|----------------|------------------------|
| translateY entrance | Instant opacity only (0 → 1, 100ms) |
| Scale animations | No scale, opacity only |
| Stagger delays | All items appear simultaneously |
| Number count-up | Show final value immediately |
| Chart growth | Show final state immediately |
| Skeleton pulse | Static skeleton (no animation) |
| Shake animation | Red border flash only |
| Hover translateY | No movement, shadow change only |
| Theme transition | Instant color swap (no transition) |

---

## 13. Performance Rules

| Rule | Description |
|------|-------------|
| **GPU-only properties** | Animate only `transform` and `opacity` for 60fps. Never animate `width`, `height`, `top`, `left`, `margin`, `padding` |
| **will-change** | Set `will-change: transform, opacity` on elements BEFORE animation starts. Remove after animation completes |
| **Cleanup** | Always remove/stop animations when component unmounts. No orphaned animations |
| **Max concurrent** | No more than 20 simultaneous animations on screen |
| **Stagger cap** | Maximum total stagger duration: 500ms (lists), 2000ms (heatmap) |
| **No layout thrashing** | Batch DOM reads before writes. Never interleave `getBoundingClientRect()` with style changes |
