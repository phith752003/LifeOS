# LifeOS — Implementation Plan

> **Version:** 1.0  
> **Last Updated:** 2026-07-17  
> **Author:** Lead Engineer  
> **Status:** Draft — Pending Review  
> **Depends on:** All previous spec documents

---

## 1. Execution Phases

The development of LifeOS MVP will be executed in 8 strict phases. Each phase must be completed, reviewed, and approved before moving to the next.

> **CRITICAL RULE:** Do NOT skip phases. Do NOT build features from future phases.

### Phase 1: Foundation (Data & Config)
**Goal:** Setup the environment, configuration, and mock data.
**Outputs:**
1. Initialize Vite + React + Tailwind project.
2. `src/index.css`: Implement all CSS custom properties from DESIGN_SYSTEM.md (palettes, spacing, typography).
3. `tailwind.config.js`: Map Tailwind config to CSS custom properties.
4. `src/utils/mockData.js`: Create realistic mock data satisfying DATA_SCHEMA.md.
5. `src/utils/animeHelpers.js`: Implement animation presets from TECH_SPEC.md.

**DoD (Definition of Done):**
- Project builds successfully.
- Mock data contains all required fields for 5 modules.
- CSS variables are correctly mapped and usable via Tailwind classes.

---

### Phase 2: Architecture & State
**Goal:** Implement core context providers and custom hooks.
**Outputs:**
1. `src/contexts/ThemeContext.jsx`: Implement theme switching logic (palette + mode) and localStorage persistence.
2. `src/hooks/useAnimeTimeline.js`
3. `src/hooks/useCountAnimation.js`
4. `src/hooks/useStagger.js`
5. `src/hooks/useReducedMotion.js`
6. `src/App.jsx`: Wrap with ThemeProvider, load mockData into state.

**DoD:**
- Theme can be switched and persists across reloads.
- Hooks are implemented according to TECH_SPEC.md.
- `App.jsx` successfully provides data to child components (temporarily just JSON dumps to verify).

---

### Phase 3: UI Kit (Common Components)
**Goal:** Build all reusable, presentation-only components.
**Outputs:**
1. Base components: `Card`, `SectionTitle`, `IconButton`, `Badge`.
2. Metric components: `MetricCard`, `ProgressBar`, `AnimatedCounter`.
3. State components: `Skeleton`, `EmptyState`, `ErrorState`.

**DoD:**
- All components implemented exactly as specified in COMPONENT_SPEC.md.
- All 4 states handled (Default, Hover, Loading, Empty/Error).
- Animations (hover, entrance, count-up) work correctly.
- Responsive behavior (padding, font size) works.

---

### Phase 4: Layout & Navigation
**Goal:** Implement the main shell of the application.
**Outputs:**
1. `src/components/layout/Header.jsx`: Topbar with logo, nav links, theme switcher.
2. `src/components/layout/MainLayout.jsx`: 12-column Bento Grid container.
3. Update `App.jsx` to render the layout structure.

**DoD:**
- Header is sticky on scroll.
- Mobile hamburger menu works.
- Bento Grid responds correctly (12-col → 2-col → 1-col stack).

---

### Phase 5: Core Modules (Command & Financial)
**Goal:** Implement the first two dashboard modules.
**Outputs:**
1. `src/components/dashboard/CommandCenter.jsx`: Greeting, realtime clock, weather, goal countdown.
2. `src/components/dashboard/FinancialHub.jsx`: Income/expense metrics, expense heatmap, emergency fund bar.

**DoD:**
- Clock ticks every second.
- Heatmap renders 365 cells correctly with stagger animation.
- MetricCards animate count-up on mount.
- Hover states and tooltips work.

---

### Phase 6: Interactive Modules (Habits & Planner)
**Goal:** Implement modules requiring user interaction.
**Outputs:**
1. `src/components/dashboard/HabitTracker.jsx`: 7-day table, streak counters, sin button.
2. `src/components/dashboard/TimePlanner.jsx`: Tabs, task list, add task form, complete/delete actions.

**DoD:**
- Habit toggle updates state and streak.
- Sin button triggers shake animation.
- Tab switching in Planner uses crossfade transition.
- Task completion triggers strikethrough animation.

---

### Phase 7: Analytics Module
**Goal:** Implement the final module aggregating data from Phase 6.
**Outputs:**
1. `src/components/dashboard/AnalyticsDashboard.jsx`: Circular progress, focus score, burnout risk, 7-day bar chart.

**DoD:**
- Circular progress SVG animates correctly.
- Bar chart grows from bottom with stagger.
- Burnout risk color-coding applies correctly based on score.

---

### Phase 8: Polish & Review
**Goal:** Ensure everything works together perfectly.
**Outputs:**
1. Cross-module state updates (e.g., completing task updates Analytics).
2. Accessibility audit (focus rings, ARIA labels, reduced motion).
3. Performance audit (remove unnecessary re-renders, verify 60fps).

**DoD:**
- Entire dashboard is functional with mock data.
- Transitions and animations are smooth.
- No console errors or warnings.
- Passes all DoD criteria from PRD and specs.

---

## 2. Universal Definition of Done (DoD)

Every component and module must pass this checklist before being considered complete:

- [ ] **Data Ready:** Can render mock data correctly without crashing.
- [ ] **Responsive:** Looks correct on Desktop (1440px), Tablet (768px), and Mobile (375px).
- [ ] **Theming:** Works perfectly in both Light and Dark mode, across all 4 palettes.
- [ ] **States Handled:** Implements Skeleton (loading), Empty, and Error states.
- [ ] **Animations Cleaned:** All Anime.js animations are removed in `useEffect` cleanup.
- [ ] **A11y Compliant:** Keyboard navigable, proper contrast, honors `prefers-reduced-motion`.
- [ ] **No Placeholders:** All code is complete, no `// TODO` or `// omitted for brevity`.
- [ ] **Performant:** No unnecessary re-renders (uses `React.memo`, `useMemo`, `useCallback` appropriately).

---

## 3. Verification Plan

### Phase Verification
At the end of each phase, the developer (AI) must:
1. Provide a summary of implemented files.
2. Explicitly state that the phase DoD is met.
3. **STOP** and wait for explicit user approval before proceeding to the next phase.

### Final Verification (User)
1. Build the project: `npm run build`
2. Serve locally: `npm run preview`
3. Test all workflows defined in PRD.md (Morning Check-in, Financial Review, Habit Tracking, Task Planning, Weekly Analytics).
4. Test responsive layouts.
5. Test theme switching.
