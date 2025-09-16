# Nützliche Links & Erklärung

## 📚 Referenzen

- [React: useReducer](https://react.dev/reference/react/useReducer)  
- [MDN: structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone)  
- [MDN: Number.toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)  

---

## ⚛️ Erklärung: `useReducer` (auf Deutsch)

`useReducer` ist ein React Hook, der es ermöglicht, komplexere Zustandslogik in funktionalen Komponenten zu verwalten.  
Er ist eine Alternative zu `useState`, insbesondere wenn:

- Der Zustand viele Teilwerte hat.  
- Die nächste Zustandsänderung stark von der vorherigen abhängt.  
- Man die Zustandslogik klar strukturieren möchte.  

### Grundidee
`useReducer` arbeitet mit einem **Reducer** – einer Funktion, die den aktuellen Zustand (`state`) und eine Aktion (`action`) entgegennimmt und daraus den neuen Zustand berechnet.  

```tsx
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Zähler: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
