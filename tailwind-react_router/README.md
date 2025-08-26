# React + React Router + Tailwind CSS

- [React Router](https://reactrouter.com/7.8.2/start/modes#data)
- [Tailwind CSS](https://tailwindcss.com/)

##### React Router installieren

```bash
npm install react-router-dom
```

##### Router einrichten
Öffne deine main.jsx (oder main.tsx, falls du TypeScript benutzt) und importiere den BrowserRouter

```bash
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```