# Project Conventions for Stayz Frontend

## Component Rules
- Every component goes in its own folder under `components/`, e.g. 
  `components/PropertyCard/PropertyCard.jsx` + `PropertyCard.module.css` 
  (or plain CSS file) in the same folder.
- One component = one responsibility. If a component handles more than 
  one clear job (e.g., "search bar" AND "date picker"), split it.
- No component file should exceed ~150 lines. If it does, extract 
  sub-components or move logic into a custom hook.
- Presentational components (pure UI, no API calls) go in `components/`.
- Page-level components (route-level, compose multiple components, 
  may call APIs) go in `pages/`.
- All API calls live in `apis/` — never call fetch/axios directly 
  inside a component. Components call functions from `apis/`.
- Shared reusable logic (e.g., form validation, date formatting) goes 
  in `utils/` as pure functions — no React-specific code here.
- React-specific reusable logic (e.g., `useAuth`, `useAvailability`) 
  goes in `hooks/` as custom hooks.
- Global state goes in `context/`, using React 19 conventions — use 
  `<MyContext>` directly instead of `<MyContext.Provider>`, and prefer 
  the `use()` hook for reading context inside components instead of 
  `useContext()` where applicable.
- Use functional components only, with modern hooks. No class components.
- Props should be destructured in the function signature, not accessed 
  via `props.x`.
- Use PropTypes or JSDoc comments for prop documentation since we're 
  not using TypeScript.

## Naming
- Components: PascalCase (`PropertyCard.jsx`)
- Hooks: camelCase starting with `use` (`useAvailability.js`)
- Utils/API functions: camelCase, verb-first (`fetchProperties`, 
  `formatDateRange`)

## Before generating any new component, ask: does something similar 
already exist in `components/`? Reuse and extend instead of duplicating.