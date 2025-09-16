import { useReducer } from "react";
import type { Action, Product, State } from "./assets/types";

/**
 * Reducer-Funktion zur Verwaltung des Zustands.
 *
 * @param state - Der aktuelle Zustand
 * @param action - Die auszuführende Aktion
 * @returns - Der neue Zustand
 */

const reducer = (state: State, action: Action) => {
  const newState = structuredClone(state);

  if (action.type === "add") {
    newState.basket.push(action.product);
    newState.total += action.product.price;
    return newState;
  }

  if (action.type === "clear") {
    newState.basket = [];
    newState.total = 0;
    return newState;
  }

  console.error("Unknown error", action);
  return state;
};

// Anfangszustand
const initialState: State = {
  basket: [],
  total: 0,
};

// Produktliste
const products: Product[] = [
  { id: 1, name: "Cat food", price: 2 },
  { id: 2, name: "Cat toy", price: 5 },
  { id: 3, name: "Cat bed", price: 20 },
  { id: 4, name: "Cat toilet", price: 30 },
  { id: 5, name: "Cat tree", price: 50 },
  { id: 6, name: "Cat brush", price: 10 },
];

const App = () => {
  // useReducer erhält den typisierten State & Action
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <header>
        <h1>Katzenartikel</h1>
        <p>
          <div>
            🧺 {state.basket.length} Artikel, {state.total.toFixed(2)} €
          </div>
          <button onClick={() => dispatch({ type: "clear" })}>Leeren</button>
        </p>
      </header>

      <main>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price} €</p>
            <button onClick={() => dispatch({ type: "add", product })}>
              Zum Warenkorb hinzufügen
            </button>
          </div>
        ))}
      </main>
    </>
  );
};

export default App;
