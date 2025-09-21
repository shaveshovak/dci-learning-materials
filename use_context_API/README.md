# 🌗 React Theme Switcher mit useContext (TypeScript)

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![React UseContext](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/reference/react/useContext)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

Ein kleines Beispielprojekt, das zeigt, wie man mit der **React Context API** und dem Hook `useContext` ein globales Theme (Hell/Dunkel) verwaltet.

---

## 🚀 Features

- Globale Zustandsverwaltung mit **React Context API**
- Einfaches Umschalten zwischen **Light** und **Dark Mode**
- Geschrieben in **TypeScript**
- Aufgeteilt in **Provider, Context, Hook und Komponenten**
- Perfekt für **Einsteiger in useContext**

---

## 📂 Projektstruktur

```bash
src/
├── assets/
│   ├── hooks.ts          # Custom Hook (useTheme)
│   ├── types.ts          # Typdefinitionen (Theme, ThemeContextType)
├── components/
│   ├── ThemeButton.tsx   # Button zum Umschalten des Themes
├── context/
│   ├── theme-context.ts  # Context & Custom Hook
│   ├── ThemeProvider.tsx # Provider-Komponente
├── App.tsx               # Hauptkomponente
```
