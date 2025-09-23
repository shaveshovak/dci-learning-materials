"use server";
// ⬆️ Diese Direktive sagt Next.js:
// Alles in dieser Datei läuft auf dem Server.
// Wir dürfen hier also z. B. das Dateisystem benutzen.

// Node.js-Module für Dateizugriff und Pfadbearbeitung
import fs from "fs"; // "fs" = file system -> Dateien lesen und schreiben
import path from "path"; // "path" = Hilfsfunktionen für Dateipfade

// Next.js-Funktion, um eine Seite nach einer Änderung neu zu validieren / laden
import { revalidatePath } from "next/cache";
// ⬆️ Damit können wir dem Framework sagen:
// „Bitte rendere die Route X neu, weil sich Daten geändert haben.“

import NewTodo from "@/components/NewTodo";
import TodoView from "@/components/TodoView";

// -----------------------------
// Typ-Definition für ein Todo
// -----------------------------
// Jedes Todo hat eine eindeutige id, den Text und einen Status (fertig oder nicht).
export type Todo = {
  id: string;
  text: string;
  done: boolean;
};

// -----------------------------
// Pfad zur JSON-Datei
// -----------------------------
// Wir speichern alle Todos in einer Datei "data.json" im Projektordner.
const DATA_PATH = path.join(process.cwd(), "data.json");

/* ---------- Hilfsfunktionen für Datei-Handling ---------- */

// Prüfen, ob die Datei existiert – falls nicht, neu mit leeren Array anlegen.
function ensureDataFile() {
  if (!fs.existsSync(DATA_PATH)) {
    fs.writeFileSync(DATA_PATH, "[]", "utf-8");
  }
}

// Todos aus der Datei einlesen
function readTodos(): Todo[] {
  ensureDataFile(); // Sicherstellen, dass Datei existiert
  const str = fs.readFileSync(DATA_PATH, "utf-8").trim();
  if (!str) return [];
  try {
    const parsed = JSON.parse(str);
    return Array.isArray(parsed) ? (parsed as Todo[]) : [];
  } catch {
    // Falls Datei beschädigt ist, zurücksetzen
    fs.writeFileSync(DATA_PATH, "[]", "utf-8");
    return [];
  }
}

// Todos in die Datei schreiben
function writeTodos(todos: Todo[]) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(todos, null, 2), "utf-8");
}

/* ---------- Server Actions ---------- */

// Neuen Todo-Eintrag hinzufügen
// Diese Funktion läuft nur auf dem Server ("use server").
// Danach wird der Pfad "/" invalidiert, sodass Next.js die Seite neu rendert.
export async function addTodo(text: string): Promise<number> {
  "use server";
  const todos = readTodos();
  const id = Date.now().toString(); // eindeutige ID anhand der Zeit
  todos.push({ id, text, done: false }); // neues Todo hinten anhängen
  writeTodos(todos);
  revalidatePath("/"); // Seite neu laden (Server-Komponenten aktualisieren)
  return todos.length;
}

// Todo als "erledigt" markieren
export async function markAsDone(id: string): Promise<void> {
  "use server";
  const todos = readTodos();
  const idx = todos.findIndex((t) => t.id === id);
  if (idx !== -1) {
    todos[idx] = { ...todos[idx], done: true };
    writeTodos(todos);
    revalidatePath("/"); // Seite neu laden, damit UI aktualisiert wird
  }
}

/* ---------- Server-Komponente für die Startseite ---------- */

// Home-Komponente ist eine Server-Komponente (kein "use client").
// Hier werden alle Todos gelesen und an die Child-Komponenten übergeben.
export default async function Home() {
  const todos = readTodos();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-3">
      <h1 className="text-2xl">Cool TODO app</h1>

      {/* Liste der Todos */}
      <div className="w-full max-w-md">
        {todos.map((todo) => (
          // TodoView ist eine Client-Komponente, die auch Buttons usw. nutzt
          <TodoView key={todo.id} todo={todo} markAsDone={markAsDone} />
        ))}
      </div>

      <hr className="my-4 w-full max-w-md" />

      {/* Eingabefeld für neues Todo */}
      <NewTodo addTodo={addTodo} />
    </main>
  );
}
