import { Link } from "react-router-dom"; 
import AppRoutes from "./routes"; // Importiert die Routing-Konfiguration/Seiten
import LinkItem from "./components/link-item/LinkItem"; // Eigene Komponente für Links

// Hauptkomponente der App
export default function App() {
  return (
    <div>
      <LinkItem 
        toUrl={'/'}
        title={'Home'}
      /> {" "} | {" "}

      {/* Beispiel: LinkItem mit Props → zeigt "About us" und navigiert zu /about */}
      <LinkItem 
        toUrl={'/about'}
        title={'About us'}
      /> {" "} | {" "}

      {/* Direktes Link-Element von react-router-dom → führt zu /contact */}
      <Link to={'/contact'}>Contact</Link>

      {/* Rendert die definierten Routen aus AppRoutes */}
      <AppRoutes />
    </div>
  );
}
