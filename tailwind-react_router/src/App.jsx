import { Link } from "react-router-dom"; 
import AppRoutes from "./pages"; // Importiert die Routing-Konfiguration/Seiten
import LinkItem from "./components/LinkItem"; // Eigene Komponente für Links

// Hauptkomponente der App
export default function App() {
  return (
    <div>
      {/* Hier wird LinkItem ohne Props aufgerufen → erzeugt einen leeren Link */}
      <LinkItem 
        // kein toUrl / kein title übergeben → der Link wird nicht sichtbar/leer
      />

      {/* Beispiel: LinkItem mit Props → zeigt "About us" und navigiert zu /about */}
      <LinkItem 
        toUrl={'/about'}
        title={'About us'}
      />

      {/* Direktes Link-Element von react-router-dom → führt zu /contact */}
      <Link to={'/contact'}>Contact</Link>

      {/* Rendert die definierten Routen aus AppRoutes */}
      <AppRoutes />
    </div>
  );
}
