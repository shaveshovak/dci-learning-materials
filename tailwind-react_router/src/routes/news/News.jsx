import { useState, useEffect } from "react";
import NewsCard from "../../components/news-card/NewsCard";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const  News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);

    useEffect(() => {
        if(!API_KEY) {
            setError("Missing API key. Add it to your .env as VITE_NEWS_API_KEY (for Vite).")
            setLoading(false);
            return;
        }

        const controller = new AbortController();
        const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`;

        async function fetchNews() {
            try {
                setLoading(true);
                const res = await fetch(url, { signal: controller.signal });

                if(!res.ok) {
                    const text = await res.text().catch(() => "");
                    throw new Error(
                        `Fetch failed (${res.status}) ${res.statusText} ${text || ""}`.trim()
                    )
                }

                const data = await res.json();
                const list = Array.isArray(data.articles) ? data.articles : [];

                const newsWithId = list.map((listItem, i) => ({
                    // randomUUID()
                    ...listItem,
                    id: (typeof crypto !== "undefined" && crypto.randomUUID())
                        ? crypto.randomUUID()
                        : String(i)
                }))

                setNews(newsWithId);
            } catch(err) {
                if (err.name !== "AbortError") setError(err.message || "Unknown error");
            } finally {
                setLoading(false);
            }
        }

        fetchNews();
        return () => controller.abort();
    }, [])

    return (
       <div className="grid gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
            {
                news.map((news, i) => {
                    return (
                        <NewsCard 
                            key={i}
                            newsItem={news}
                            id={news.id}
                        />
                    )
                    
                })
            }
        </div>
    )
}
 
export default News;