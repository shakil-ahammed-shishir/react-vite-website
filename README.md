# TechNova – React + Vite Website (Module 16 Assignment)

A simple 4-page website built with **React.js**, **Vite** and **CSS**.

## Pages
1. Home
2. About
3. Services
4. Contact

Each page has **4 sections**, and every page shares a common **Header** and **Footer** component.

## React Concepts Used
- Functional components & JSX
- Props (`Card` component)
- `useState` (mobile menu, contact form, FAQ accordion)
- `useEffect` (scroll to top on page change)
- List rendering with `.map()` and keys
- React Router (`NavLink`, `Routes`, `Route`) for navigation

## Folder Structure
```
src/
├── components/   Header.jsx, Footer.jsx, Card.jsx
├── pages/        Home.jsx, About.jsx, Services.jsx, Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Run Locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
