import React, { useEffect, useMemo, useReducer, useState } from "react";
import type { State } from "./assets/types";
import { reducer } from "./assets/reducers";

const STORAGE_KEY = "student-group-manager:v2";

const initialState: State = {
  students: [],
  groups: [],
  assignments: [],
  unassignments: [],
};

export default function StudentGroupManager() {
  // state = aktueller Zustand (Schüler, Gruppen, Logs).
  // dispatch = Funktion, um Aktionen auszuführen (ADD_STUDENT, ASSIGN_STUDENT, etc.).
  // Beim Laden wird geprüft, ob schon etwas im localStorage gespeichert ist. Falls ja, wird das benutzt.
  const [state, dispatch] = useReducer(reducer, initialState, (base) => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as State) : base;
    } catch {
      return base;
    }
  });

  // Immer wenn sich der Zustand ändert, wird er im Browser gespeichert. So bleiben Schüler/Gruppen auch nach einem Reload erhalten.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  const [studentName, setStudentName] = useState("");
  const [groupName, setGroupName] = useState("");

  const groupsById = useMemo(
    () => Object.fromEntries(state.groups.map((g) => [g.id, g])),
    [state.groups]
  );
  const studentsById = useMemo(
    () => Object.fromEntries(state.students.map((s) => [s.id, s])),
    [state.students]
  );

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 p-6">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Students & Groups</h1>
          <button
            onClick={() => dispatch({ type: "CLEAR_LOGS" })}
            className="px-3 py-1 rounded-xl border bg-white hover:bg-neutral-100 text-sm"
            title="Clear assignment/unassignment logs">
            Clear logs
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch({ type: "ADD_STUDENT", name: studentName });
              setStudentName("");
            }}
            className="flex gap-2 bg-white border rounded-2xl p-3">
            <input
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="New student"
              className="flex-1 border px-2 py-1 rounded"
            />
            <button
              type="submit"
              className="px-3 py-1 bg-black text-white rounded">
              Add Student
            </button>
          </form>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch({ type: "ADD_GROUP", name: groupName });
              setGroupName("");
            }}
            className="flex gap-2 bg-white border rounded-2xl p-3">
            <input
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="New group"
              className="flex-1 border px-2 py-1 rounded"
            />
            <button
              type="submit"
              className="px-3 py-1 bg-black text-white rounded">
              Add Group
            </button>
          </form>
        </div>

        {/* Students */}
        <section className="bg-white border rounded-2xl p-4">
          <h2 className="text-lg font-semibold mb-3">Students</h2>
          <ul className="space-y-2">
            {state.students.map((s) => (
              <li
                key={s.id}
                className="p-2 border rounded flex items-center justify-between">
                <span className="font-medium">{s.name}</span>
                <div className="flex gap-2 items-center">
                  <select
                    value={s.groupId ?? ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === "") {
                        dispatch({
                          type: "REMOVE_ASSIGNMENT",
                          studentId: s.id,
                        });
                      } else {
                        dispatch({
                          type: "ASSIGN_STUDENT",
                          studentId: s.id,
                          groupId: value,
                        });
                      }
                    }}
                    className="border rounded px-2 py-1">
                    <option value="">Unassigned</option>
                    {state.groups.map((g) => (
                      <option key={g.id} value={g.id}>
                        {g.name}
                      </option>
                    ))}
                  </select>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Logs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <section className="bg-white border rounded-2xl p-4">
            <h2 className="text-lg font-semibold">Assignments</h2>
            <p className="text-xs text-neutral-500 mb-2">Newest first</p>
            {state.assignments.length === 0 ? (
              <p className="text-sm text-neutral-500">No assignments yet.</p>
            ) : (
              <ul className="space-y-2">
                {state.assignments.map((a) => {
                  const student = studentsById[a.studentId];
                  const group = groupsById[a.groupId];
                  return (
                    <li
                      key={a.id}
                      className="p-2 border rounded flex items-center justify-between">
                      <span>
                        <strong>{student?.name ?? "Unknown"}</strong> →{" "}
                        <em>{group?.name ?? "?"}</em>
                      </span>
                      <span className="text-xs text-neutral-500">
                        {new Date(a.at).toLocaleString()}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
