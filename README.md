# Vue 3 + Ionic + Storybook

This repository provides a working setup for **Storybook with Vue 3 and Ionic**.  
Since there are no comprehensive guides available online, this project serves as a reference for integrating Storybook seamlessly with Vue 3 and Ionic components.

---

## 🚀 Getting Started

### Installation

```sh
yarn install
```

### Run the Playground

This command starts a **Vite-based playground** to test components in isolation:

```sh
yarn dev
```

### Run Storybook

To start **Storybook** and preview Ionic components in an interactive environment:

```sh
yarn storybook
```

---

## 🛠 Configuration Highlights

### Vite Configuration (`vite.config.js`)

- Configures **Vue 3** with custom elements support for Ionic (`ion-*` components).
- Handles **SCSS imports dynamically** based on the host project.
- Optimizes dependencies to **include necessary Ionic packages**.
- Defines **global aliases and MIME types**.

### Storybook Configuration (`.storybook/main.ts`)

- Includes **essential Storybook addons** (`essentials`, `actions`, `a11y`, etc.).
- Configures **Vite optimizations** for Ionic compatibility.
- Defines **storybook stories paths** to load both `.stories.ts` and `.mdx` files.

### Storybook Preview Setup (`.storybook/preview.ts`)

- Initializes **Ionic Vue inside Storybook**.
- Registers **Ionic Web Components dynamically**.
- Wraps all stories in an `<ion-app><ion-content></ion-content></ion-app>` layout for accurate rendering.
- Includes essential **Ionic stylesheets** (`core.css`, `normalize.css`, etc.).

---

## 🎨 Styling & Theming

To fix/add the scrollbar on the documentation page, the following CSS is applied in `storybook.scss`:

```css
#storybook-docs {
    overflow: auto;
    height: 100vh;
}
```
---
