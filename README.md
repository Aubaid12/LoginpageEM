# Evil Martians Login Assignment

> **Live Demo:** [https://Aubaid12.github.io/LoginpageEM/](https://Aubaid12.github.io/LoginpageEM/)

A high-quality, accessible, and zero-dependency Login SPA built for the Evil Martians Frontend Engineer application.

## 🎯 Project Goals
This project was built with a focus on **fundamentals over frameworks**, mimicking a constraint-heavy environment often found in high-stakes dev tools.

*   **Zero UI Libraries**: No Bootstrap, Material UI, or Tailwind. Just pure, semantic HTML and custom CSS variables.
*   **Accessibility First**: Built with `aria-invalid`, `aria-busy` states, correct labeling, and keyboard navigation support.
*   **Mocked Backend**: A robust `mockFetch` layer that simulates network latency (500ms-1.5s) and random 5% network failures to demonstrate error handling.
*   **Architecture**: Feature-based folder structure designed for scalability, not just a single-file demo.

## 🛠 Tech Stack
*   **Core**: React 19, TypeScript
*   **Styling**: Vanilla CSS (Variables, CSS Modules approach)
*   **Testing**: Vitest, React Testing Library
*   **Tooling**: Vite

## 🚀 Local Development

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start Dev Server**
    ```bash
    npm run dev
    ```

3.  **Run Tests**
    ```bash
    npm run test
    ```

## 📦 Deployment (GitHub Pages)

This project is configured for one-command deployment.

1.  **Push to GitHub**:
    ```bash
    git push origin main
    ```

2.  **Deploy**:
    ```bash
    npm run deploy
    ```

---

## 📝 Application Email Draft
*Copy and paste the section below for your email to `obey-frontend@evilmartians.com`.*

**Approach:**
I built this SPA from scratch using React and TypeScript, without any UI libraries. I focused on:
- **Accessibility:** Using semantic HTML, `aria-invalid` states, and keyboard navigation support.
- **UX:** Smooth animations, clear error feedback, and loading states.
- **Architecture:** Clean component separation (`LoginForm`, `Input`, `Button`) and a mock API layer (`mockFetch`) that simulates latency and network errors.
- **Design:** A custom "Clean" theme inspired by modern payment platforms, using CSS variables and glassmorphism.

