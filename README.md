# Evil Martians Login Assignment

> **Live Demo:** [https://Aubaid12.github.io/LoginpageEM/](https://Aubaid12.github.io/LoginpageEM/)

A high-quality, accessible, and zero-dependency Login SPA built for the Evil Martians Frontend Engineer application.

## 🎯 Project Goals & "Staff Engineer" Approach
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

***

**Subject:** Aubaid - Frontend Engineer Application

Hi Evil Martians Team,

Here is my submission for the Frontend Engineer position.

**Login Form SPA**
- **Live Demo:** [https://Aubaid12.github.io/LoginpageEM/](https://Aubaid12.github.io/LoginpageEM/)
- **Source Code:** [https://github.com/Aubaid12/LoginpageEM](https://github.com/Aubaid12/LoginpageEM)

**Approach:**
I built this SPA from scratch using React and TypeScript, without any UI libraries. I focused on:
- **Accessibility:** Using semantic HTML, `aria-invalid` states, and keyboard navigation support.
- **UX:** Smooth animations, clear error feedback, and loading states.
- **Architecture:** Clean component separation (`LoginForm`, `Input`, `Button`) and a mock API layer (`mockFetch`) that simulates latency and network errors.
- **Design:** A custom "Clean" theme inspired by modern payment platforms, using CSS variables and glassmorphism.

**About Me**
I am a [Your Role, e.g., Senior Frontend Engineer] with a passion for building robust developer tools. At [Previous Company], I led the migration of our core dashboard to a micro-frontend architecture, reducing build times by 40% and improving team velocity.

**Consultancy Story**
In a previous role/freelance project for a fintech client, I was tasked with "revamping the user settings". The requirements were vague. Instead of coding immediately, I:
1.  Interviewed the stakeholders to understand the core pain points (compliance data was hard to find).
2.  Proposed a phased approach: first fixing the information architecture, then the visual refresh.
3.  Managed the scope by pushing back on "nice-to-have" animations that would delay the MVP.
Result: We shipped the compliance module 2 weeks early, directly impacting their ability to launch in a new market.

**Logistics**
- **Current Location:** [Your City, Country]
- **Relocation:** Open to relocating to Portugal (or Remote).

**Bonus**
- [Link to Open Source PR/Project]
- [Link to Technical Article/Talk]

Best regards,
[Your Name]
