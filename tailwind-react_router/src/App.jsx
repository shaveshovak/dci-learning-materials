import { Link, NavLink } from "react-router-dom"; 
import AppRoutes from "./routes"; // Importiert die Routing-Konfiguration/Seiten
import LinkItem from "./components/link-item/LinkItem"; // Eigene Komponente für Links
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

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

      <LinkItem 
        toUrl={'/news'}
        title={'News'}
      /> {" "} | {" "}

      {/* Direktes Link-Element von react-router-dom → führt zu /contact */}
      <Link to={'/contact'}>Contact</Link>
      <Header />
      {/* Rendert die definierten Routen aus AppRoutes */}
      <AppRoutes />

      <Footer />
    </div>
  );
}
