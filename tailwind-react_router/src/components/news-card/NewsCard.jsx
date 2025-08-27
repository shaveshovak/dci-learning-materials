import { Link } from "react-router-dom"
import { domainFromUrl, formatData } from "../../assets/utils"

const NewsCard = ({
    newsItem, 
    id
}) => {
     
    const {
        urlToImage,
        url,
        source,
        author,
        title, 
        description,
        publishedAt,
        // content
    } = newsItem || {}

    const sourceName = source?.name || domainFromUrl(url) || "Source"
    const published = formatData(publishedAt)

    return (
        <article 
            className="group relative overflow-hidden rounded-2xl bg-white/70 shadow-sm ring-1 ring-black/5 dark:bg-zinc-900/70 backdrop-blur">
            {/* Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
                {
                    urlToImage ? (
                        <img 
                            src={urlToImage}
                            alt={title || sourceName}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                            loading="lazy"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700">
                            <span className="text-gray-500 text-sm">No Image</span>
                        </div>
                    )
                }

                {/* Source badge */}
                <div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white shadow-sm backdrop-blur-sm dark:bg-white/20">
                    {sourceName}
                </div>
                

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="flex flex-col gap-3 p-4 sm:p-5">
                {/* Title */}
                <h3 className="text-lg font-semibold leading-snug text-zinc-900 dark:text-zinc-50">
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-start gap-2"
                    >
                        <span className="underline-offset-4 decoration-zinc-300 group-hover:underline">
                            {title || "Untitled"}
                        </span>
                        <span className="ml-1 text-gray-400">↗</span>
                    </a>
                </h3>

                {/* Description */}
                {
                    description && (
                        <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-300">
                            {description}
                        </p>
                    )
                }

                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                    {/* Author */}
                    {
                        author && (
                            <span className="rounded-full bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
                                By {author}
                            </span>
                        )
                    }

                    {/* Published */}
                    {published && (
                        <span className="inline-flex items-center gap-1">
                            <span>🕒</span> 
                            {published}
                        </span>
                    )}

                    {url && (
                        <a
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="truncate text-zinc-600 underline decoration-dotted underline-offset-4 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                        >{domainFromUrl(url)}</a>
                    )}

                    <Link
                        to={`/news/${id}`}
                        state={newsItem}
                        className="inline-block rounded-lg bg-indigo-500 px-3 py-1.5 text-sm text-white hover:bg-indigo-700"
                    >
                        More
                    </Link>
                </div>
            </div>

        </article>
    );
}
 
export default NewsCard;