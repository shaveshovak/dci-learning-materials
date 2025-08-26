import { Route, Routes } from "react-router-dom"; 
// Importiert die Route-Komponenten von react-router-dom

import { Home } from "../components/Home";   // Startseite
import About from "../components/About";     // "Über uns"-Seite
import Contact from "../components/Contact"; // Kontakt-Seite
import NotFound from "../components/NotFound"; // Fallback-Seite (404)

// Definiert die Routen für die Anwendung
const AppRoutes = () => {
    return (
        <>
            <Routes>
                {/* Route für die Startseite "/" */}
                <Route path="/" element={<Home />} />

                {/* Route für "/about" */}
                <Route path="/about" element={<About />}/>

                {/* Route für "/contact" */}
                <Route path="/contact" element={<Contact />}/>

                {/* Wildcard "*" → wird aufgerufen, wenn keine Route passt (404-Seite) */}
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </>
    );
}

export default AppRoutes; // Exportiert die Komponente
