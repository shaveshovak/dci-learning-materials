import type {
  State,
  Action,
  Student,
  Group,
  AssignmentEvent,
  UnassignmentEvent,
} from "./types";
import { makeId } from "./utils";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_STUDENT": {
      const name = action.name.trim();
      if (!name) return state;
      const newStudent: Student = { id: makeId(), name, groupId: null };
      return { ...state, students: [newStudent, ...state.students] };
    }
    case "ADD_GROUP": {
      const name = action.name.trim();
      if (!name) return state;
      const newGroup: Group = { id: makeId(), name };
      return { ...state, groups: [newGroup, ...state.groups] };
    }
    case "ASSIGN_STUDENT": {
      const { studentId, groupId } = action;
      const now = Date.now();
      const evt: AssignmentEvent = {
        id: makeId(),
        studentId,
        groupId,
        at: now,
      };
      return {
        ...state,
        students: state.students.map((s) =>
          s.id === studentId ? { ...s, groupId } : s
        ),
        assignments: [evt, ...state.assignments],
      };
    }
    case "REMOVE_ASSIGNMENT": {
      const { studentId } = action;
      const now = Date.now();
      const evt: UnassignmentEvent = { id: makeId(), studentId, at: now };
      return {
        ...state,
        students: state.students.map((s) =>
          s.id === studentId ? { ...s, groupId: null } : s
        ),
        unassignments: [evt, ...state.unassignments],
      };
    }
    case "CLEAR_LOGS": {
      return { ...state, assignments: [], unassignments: [] };
    }
    default:
      return state;
  }
};
