import { useState } from "react";
import NewsCard from "../../components/news-card/NewsCard";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const  News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);



    return (
        <>
        <NewsCard />
            {
                news.map((news, i) => {
                    <NewsCard 
                        key={i}
                        
                    />
                })
            }
        </>
    )
}
 
export default News;