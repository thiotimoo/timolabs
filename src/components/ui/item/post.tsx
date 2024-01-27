import { formatDateLong } from "@/lib/utils";
import { IBlog } from "@/model/Blog";
import { BlogMetadata } from "@/types/blogs";
import Image from "next/image";
import Link from "next/link";

export const ItemPost = (blog: IBlog) => {
    const {
        blogType,
        imageUrl,
        title,
        category,
        createdAt,
        slug,
        description,
    } = blog;
    return (
        <Link
            className="flex flex-wrap items-start overflow-clip gap-4 py-4 group"
            href={`/${blogType}/${slug}`}
        >
            {imageUrl && (
                <Image
                    unoptimized //remove to optimize
                    className=" aspect-video object-cover w-full md:w-64 rounded-xl border-2 border-transparent group-hover:border-fore group-hover:dark:border-fore-dark"
                    alt={title}
                    src={imageUrl}
                    width={400}
                    height={225}
                />
            )}
            <div className="flex-1 flex flex-col gap-4 items-start justify-between w-full h-full ">
                <div className="flex flex-col items-start gap-1 group-hover:underline">
                    <h3 className="bg-fore dark:bg-fore-dark text-back dark:text-back-dark px-2 rounded-full font-semibold tracking-wider text-sm">
                        {category}
                    </h3>
                    <h3 className="text-xl font-medium ">{title}</h3>
                    {description && (
                        <h3 className="text-lg font-normal text-neutral-400 line-clamp-2">
                            {description}
                        </h3>
                    )}
                    {createdAt && (
                        <h3 className="text-base text-blue-400">
                            {formatDateLong(createdAt.toString())}
                        </h3>
                    )}
                </div>
            </div>
        </Link>
    );
};
