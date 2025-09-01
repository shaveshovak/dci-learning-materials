import { useLocation, useNavigate, useParams } from "react-router-dom";

const NewsDetails = () => {

    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    console.log(id)

    const newsItem = location.state?.newsItem;

    if(!newsItem) {
        return ( 
            <div className="p-4">
                <p>Kein Artikel im State gefunden (z. B. nach Reload).</p>
                <button onClick={() => navigate(-1)}>Zurück</button>
            </div>
        )
    }

    return ( <>
        <article>
            <h1>{newsItem.title}</h1>
            <img src={newsItem.urlToImage} alt={newsItem.title} />
            <p>{newsItem.description}</p>
            <p>{newsItem.content}</p>
            <p>Id aus URL: {id}</p>
        </article>
    </> );
}
 
export default NewsDetails;