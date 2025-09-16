// Produkt-Typ definieren
export type Product = {
  id: number;
  name: string;
  price: number;
};

// Zustand (State) definieren
export type State = {
  basket: Product[];
  total: number;
};

// mögliche Aktionen für den Reducer
export type Action =
  | {
      type: "add";
      product: Product;
    }
  | {
      type: "clear";
    };
