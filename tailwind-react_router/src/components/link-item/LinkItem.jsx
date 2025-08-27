import { Link } from "react-router-dom";

// Komponente: LinkItem
// props = Eigenschaften, die der Komponente übergeben werden
const LinkItem = ({
    toUrl,   // Ziel-URL für den Link
    title    // Text, der im Link angezeigt wird
}) => {
    return ( 
        <>
            {/* React-Router Link: navigiert ohne Seiten-Reload */}
            <Link to={toUrl}>{title}</Link>
        </>
    );
}

// Exportiert die Komponente, damit sie in anderen Dateien verwendet werden kann
export default LinkItem; 
