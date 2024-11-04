import { useUnit } from "effector-react"
import { $itemPage } from "../store/pageStore"

export const RepositoryOwner = () => {
    const itemPage = useUnit($itemPage)

    return (
        <div className="w-full bg-gray-200 rounded-xl p-2 shadow-lg">
            <a href={itemPage?.node?.owner?.url} target="_blank" rel="noopener noreferrer" className="w-max flex flex-row items-center justify-start gap-2 text-gray-900 hover:text-gray-900">
                <img src={itemPage?.node?.owner?.avatarUrl} alt={itemPage?.node?.owner?.login} className="w-8 h-8 rounded-full" />
                <span>{itemPage?.node?.owner?.login}</span>
            </a>
        </div>
    )
}