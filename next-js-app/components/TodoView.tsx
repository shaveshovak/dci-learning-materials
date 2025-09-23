"use client";

import { useOptimistic, useTransition } from "react";

// -----------------------------
// Typen
// -----------------------------
// Todo-Objekt: eindeutige id, Anzeigetext, Status (erledigt ja/nein)
type Todo = {
  id: string;
  text: string;
  done: boolean;
};

// Props der Komponente:
// - das Todo selbst
// - eine Funktion (Server Action/API-Call), die ein Todo per id als erledigt markiert
type Props = {
  todo: Todo;
  markAsDone: (id: string) => Promise<void>;
};

export default function TodoView({ todo, markAsDone }: Props) {
  // useTransition: kennzeichnet eine langsame/async Aktion (UI bleibt responsiv)
  const [isPending, startTransition] = useTransition();

  // useOptimistic: "optimistisches" UI – wir tun so, als wäre die Änderung schon durch,
  // bevor die Antwort vom Server kommt. Fühlt sich schneller an.
  const [optimisticTodo, setOptimisticTodo] = useOptimistic(
    todo,
    // Updater: bekommt den aktuellen Zustand + den neuen "done"-Wert
    (current, newDone: boolean) => ({ ...current, done: newDone })
  );

  // Klick-Handler für "Mark as done"
  function handleMarkAsDone() {
    // 1) Sofort im UI auf "done" setzen (optimistisch)
    setOptimisticTodo(true);

    // 2) Server Action im Hintergrund starten
    startTransition(async () => {
      try {
        await markAsDone(todo.id);
        // Erfolgsfall: nichts weiter nötig – revalidatePath() auf dem Server
        // sorgt beim nächsten Rendern für die aktuellen Daten
      } catch (e) {
        // Fehler: Optimismus zurücknehmen (UI wieder auf "nicht done")
        setOptimisticTodo(false);
        console.error("Failed to mark as done:", e);
      }
    });
  }

  // Wenn (optimistisch) erledigt:
  if (optimisticTodo.done) {
    return (
      <div className="mt-2 flex w-full justify-between p-2">
        {/* Durchgestrichener Text mit welliger Dekoration */}
        <span className="line-through decoration-1 decoration-wavy decoration-green-600/60">
          {optimisticTodo.text}
        </span>

        {/* Rechts: Statusanzeige – "Saving…" während die Server Action läuft */}
        <span className="text-green-600">
          {isPending ? "Saving…" : "Done!"}
        </span>
      </div>
    );
  }

  // Standardzustand (noch nicht erledigt)
  return (
    <div className="mt-2 flex w-full justify-between p-2">
      <span>{optimisticTodo.text}</span>

      {/* Button löst den optimistischen Update + Server Action aus */}
      <button
        className="rounded-md border px-4 py-1 disabled:opacity-50"
        onClick={handleMarkAsDone}
        disabled={isPending}>
        {isPending ? "Marking…" : "Mark as done"}
      </button>
    </div>
  );
}
