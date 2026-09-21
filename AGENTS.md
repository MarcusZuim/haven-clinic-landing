# Repository map

- `website/` is the deployable Haven Clinic single-page app. Run all Node commands there.
- `AI-Design-Studio-Starter-Kit/` is a tracked brand/process reference kit, not the deployed app. Its `production/website/` is an independent component preview; do not treat it as the application source.
- Root `.github/workflows/deploy-preview.yml` builds `website/` and deploys its `dist/` to GitHub Pages.

# Stack

- React 19 + TypeScript (strict, no unused locals/parameters) + Vite 7; Framer Motion supplies UI motion.
- The package manager is npm (`website/package-lock.json`). There are no lint or test scripts.

# Development commands

Run from `website/`:

```powershell
npm ci
npm run dev
npm run build
npm run preview
```

`npm run build` runs TypeScript checking (`tsc --noEmit`) before `vite build`; run it after meaningful frontend changes.

# Architecture

- `src/main.tsx` renders `App` inside `StrictMode` and `LanguageProvider`.
- `src/App.tsx` is the top-level composition point for the single-page experience. Keep section components modular, and keep section IDs and matching `site.nav` anchors aligned when page architecture changes.
- Put reusable UI in `src/components/` by concern: `brand/`, `cta/`, `layout/`, `motion/`, `sections/`; retain `originkit/` for the imported radial-reveal button implementation.
- `src/content/site.ts` holds stable site structure, IDs, image metadata, and navigation.
- `src/config/flags.ts` contains visible prototype toggles. Keep conditional UI and its supporting layout behavior together.

# Content and i18n

- `src/i18n/messages.ts` is the source of localized UI copy for `pt`, `en`, and `es`; `pt` is the default.
- Components consume translations through `useLanguage()` from `src/i18n/LanguageProvider.tsx`. Add or change user-facing copy in every locale and preserve the corresponding locale metadata/accessibility strings.
- The provider persists the selected locale in `localStorage` (`haven-locale`) and updates document language, title, and description.
- Brand and factual source documents live in `AI-Design-Studio-Starter-Kit/brand/`, `PRODUCT_FACTS.md`, and `PROJECT_BRIEF.md`. Treat entries marked pending/hypothesis as unverified; do not turn them into claims without approval.

# Styling and design system

- Global styling is plain CSS: import `src/styles/tokens.css` then `src/styles/global.css` from `App.tsx`.
- Treat `src/styles/tokens.css` as the canonical design-token layer. Reuse existing custom properties where appropriate and extend the token system there when a design change genuinely requires new reusable values; avoid scattered magic values when a shared token is appropriate. `src/lib/theme.ts` mirrors the palette where TypeScript values are needed.
- Responsive breakpoints currently used are 430px, 768px, 1024px, and 1200px. Preserve the mobile-first approach and existing mobile/desktop asset strategy unless a task explicitly requires redesigning that behavior.

# Assets

- Runtime assets are in `website/public/` (`images/brand`, `images/hero`, `images/placeholders`, `images/team`) and are referenced through `assetUrl()` in `src/lib/assets.ts`.
- Always use `assetUrl()` for public paths used by app code so Vite's base path works on GitHub Pages. In `index.html`, use `%BASE_URL%` for public assets.
- Use `BrandLogo` for the approved web logo variants rather than hard-coding brand image paths.
- Preserve source/reference assets under `AI-Design-Studio-Starter-Kit/assets/`; avoid editing generated, raw, processed, final, exports, archive, examples, templates, or QA directories unless the task explicitly targets them.

# Interaction, motion, and accessibility

- Create WhatsApp links with `buildWhatsAppUrl()` in `src/config/whatsapp.ts`; use `WhatsAppButton` for standard CTAs so locale-specific messages and safe new-tab attributes are retained.
- Reuse `src/lib/motion.ts` and `SectionReveal` for the established motion language. Honor `useReducedMotion()` and the global `prefers-reduced-motion` CSS override.
- Preserve semantic landmarks/headings, image alt text, the skip link, visible focus treatment, ARIA labels/states, keyboard-close behavior for the language menu, and `rel="noopener noreferrer"` on external new-tab links.

# Deployment and validation

- `website/vite.config.ts` uses `/haven-clinic-landing/` only when `GITHUB_PAGES=true`; otherwise it uses `/`. Do not replace base-aware asset handling with root-relative paths.
- GitHub Pages CI uses Node 22, `npm ci`, and `GITHUB_PAGES=true npm run build`. `website/vercel.json` also builds to `dist`.
- After frontend changes, run `npm run build` from `website/`; also check PT/EN/ES copy, keyboard/focus behavior, reduced motion, and the existing responsive breakpoints when affected.

# Git / delivery expectations

- Keep changes scoped to the requested area; do not alter the reference kit while changing the runnable app, or vice versa.
- Preserve unrelated user changes. Do not revert, overwrite, or clean uncommitted work that is outside the requested task.
- Do not commit generated dependencies or build output (`node_modules/`, `dist/`, `.vite/` are ignored).
- Do not push commits unless the user explicitly asks for a push.

# Frontend MCPs and browser tooling

Use available MCPs, browser tools, Playwright, DevTools, or equivalent frontend inspection tools when available.

Do not rely only on static code inspection.

During validation:

- run the app locally;
- inspect the rendered page in a real browser;
- check desktop, tablet, and mobile breakpoints;
- use browser DevTools or equivalent to inspect layout, spacing, overflow, contrast, and responsive behavior;
- use Playwright or equivalent browser automation to verify navigation anchors, CTA behavior, menu interactions, language switching, and major responsive states;
- capture screenshots when useful for visual comparison;
- iterate on the implementation if the rendered result does not match the Warm Clinical Luxury.

Treat visual QA as part of implementation, not as an optional final step.

Use any available MCP/tooling that materially improves frontend validation, but do not introduce unnecessary dependencies into the repository just for testing.

- If browser tooling is available, do not finalize frontend work without visually inspecting the rendered page.