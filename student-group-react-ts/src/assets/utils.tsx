export const makeId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? (crypto.randomUUID() as string)
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
