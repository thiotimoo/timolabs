import { formatDateLong } from "@/lib/utils";
import { IBlog } from "@/model/Blog";
import { BlogMetadata } from "@/types/blogs";
import Image from "next/image";
import Link from "next/link";

export const ItemPost = (blog: IBlog) => {
    const {blogType, imageUrl, title, category, createdAt, slug} = blog
    return (
        <Link
            className="border-2 border-fore dark:border-fore-dark border-opacity-30 dark:border-opacity-10 rounded-xl p-4 hover:shadow-xl bg-surface-adaptive active:bg-neutral-500 transition-all flex flex-wrap items-start hover:dark:shadow-neutral-700 hover:shadow-neutral-500 hover:ring-fore hover:dark:ring-fore-dark hover:ring-2 overflow-clip hover:-translate-y-1 gap-4"
            href={`/${blogType}/${slug}`}
        >
            {imageUrl && (
                <Image
                unoptimized //remove to optimize
                    className=" aspect-video object-cover w-full md:w-64 rounded-xl "
                    alt={title}
                    src={imageUrl}
                    width={400}
                    height={225}
                />
            )}
            <div className="flex-1 flex flex-col gap-4 items-start justify-between w-full h-full px-2 py-4">
                <div className="flex flex-col items-start gap-1">
                    <h3 className="bg-fore dark:bg-fore-dark text-back dark:text-back-dark px-2 rounded-full font-semibold tracking-wider text-sm">
                        {category}
                    </h3>
                    <h3 className="text-2xl font-bold">{title}</h3>
                    {createdAt && <h3 className="text-base text-blue-400">
                        {formatDateLong(createdAt.toString())}
                    </h3>}
                    
                </div>
            </div>
        </Link>
    );
};