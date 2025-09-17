export type ID = string;

export type Student = {
  id: ID;
  name: string;
  groupId: ID | null;
};

export type Group = {
  id: ID;
  name: string;
};

export interface AssignmentEvent {
  id: ID;
  studentId: ID;
  groupId: ID;
  at: number;
}

export interface UnassignmentEvent {
  id: ID;
  studentId: ID;
  at: number;
}

export type State = {
  students: Student[];
  groups: Group[];
  assignments: AssignmentEvent[];
  unassignments: UnassignmentEvent[];
};

export type Action =
  | { type: "ADD_STUDENT"; name: string }
  | { type: "ADD_GROUP"; name: string }
  | { type: "ASSIGN_STUDENT"; studentId: ID; groupId: ID }
  | { type: "REMOVE_ASSIGNMENT"; studentId: ID }
  | { type: "CLEAR_LOGS" };
