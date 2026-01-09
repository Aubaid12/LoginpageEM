# Evil Martians Login Assignment

A high-quality, accessible, and zero-dependency Login SPA built for the Evil Martians Frontend Engineer application.

## 🚀 Features
- **Zero UI Libraries**: Custom design system using Vanilla CSS variables and CSS Modules.
- **Mock Fetch**: A realistic API simulation (`src/api/mockFetch.ts`) with network latency and random error simulation.
- **Accessibility**: Full a11y support including `aria-invalid`, `aria-busy`, focus management, and semantic HTML.
- **Architecture**: Scalable feature-based folder structure with React + TypeScript.
- **Tests**: Comprehensive unit tests using Vitest and React Testing Library.

## 🛠 Quick Start

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
3.  **Run Tests**:
    ```bash
    npm run test
    ```

## 📦 How to Deploy to GitHub Pages

I have configured the project for easy deployment.

### 1. Create Repository
Create a new empty repository on GitHub named `evil-martians-login`.

### 2. Push Code
Run these commands in your terminal (inside this folder):

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[YOUR_USERNAME]/evil-martians-login.git
git push -u origin main
```

*(Replace `[YOUR_USERNAME]` with your actual GitHub username)*

### 3. Deploy
Once the code is on GitHub, run:

```bash
npm run deploy
```

This command will:
1. Build the project.
2. Push the build to a `gh-pages` branch on your repo.
3. Your live site will be available at: `https://[YOUR_USERNAME].github.io/evil-martians-login/`

## 📧 Email Application Text
The draft for the email application is located in `email_draft.md` in the root of this project (if I copied it there, otherwise check the artifacts).
