# ✅ Cool TODO App (Next.js 13+)

Eine kleine **Todo-App** mit **Next.js 13 (App Router)**.  
Dieses Projekt zeigt, wie man **Server Actions**, **Client-Komponenten**, **optimistisches UI** und **Dateisystem-Speicherung** mit Node.js `fs` einsetzt.

---

## ✨ Features

- ➕ Neue Todos hinzufügen
- ✅ Todos als erledigt markieren
- 💾 Speicherung in einer JSON-Datei (`data.json`)
- ⚡ Sofortige UI-Aktualisierung mit `useOptimistic`
- 🔄 Automatische Revalidierung mit `revalidatePath("/")`

---

## 📂 Projektstruktur

```bash
app/
├─ layout.tsx       # Root-Layout mit Header/Footer
├─ page.tsx         # Startseite (Server-Komponente)
components/
├─ NewTodo.tsx      # Eingabeformular (Client-Komponente)
├─ TodoView.tsx     # Einzelnes Todo-Element (Client-Komponente)
data.json           # Speichert alle Todos (wird automatisch angelegt)
```
