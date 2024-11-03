import { useState } from "react"
import { PreviewRepositoryType } from "../types/SearchResultsType"
import { Link } from "react-router-dom"

type Props = {
    repo: PreviewRepositoryType
    index: number
}

export const RepositoryElement = ({ repo, index }: Props) => {
    const formattedDate = new Date(repo.updatedAt).toLocaleDateString()
    const [isHovered, setIsHovered] = useState<boolean>(false)

    return (
        <div className="w-full grid sm:items-center sm:grid-cols-[repeat(4,_minmax(0,_1fr))] md:grid-cols-[50%_repeat(3,_minmax(0,_1fr))] gap-2 box-border border-b-gray border-b p-2 md:h-10 relative" data-test={`repo-list-item[${index}]`}>
            <Link
                to={`/${repo.name}?id=${repo.id}`}
                className="w-full truncate cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <span className="z-10">{repo.name}</span>
                {isHovered &&
                    <div className="absolute h-full bg-gray-100 px-4 left-0 -bottom-full box-border whitespace-break-spaces flex items-center justify-start rounded-lg border-gray-400 border z-50 shadow-lg">
                        {repo.name}
                    </div>
                }
            </Link>
            <p className="w-full text-center">{repo.stargazerCount}</p>
            <p className="w-full text-center">{formattedDate}</p>
            <a href={repo.url} target="_blank" className="w-full text-right" rel="noopener noreferrer">Look at GitHub</a>
        </div>
    )
}