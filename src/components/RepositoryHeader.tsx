import { useUnit } from "effector-react"
import { $itemPage } from "../store/pageStore"
import { useParams } from "react-router-dom"

export const RepositoryHeader = () => {
    const { name } = useParams<{ name: string }>()
    const itemPage = useUnit($itemPage)
    const formattedDate = new Date(itemPage?.node?.updatedAt).toLocaleDateString()

    return (
        <div className="w-full px-2 box-border">
            <div className="w-full flex flex-row justify-between text-gray-900 bg-gray-200 rounded-xl p-2 box-border">
                <div>
                    <a href={itemPage?.node?.url} target="_blank" rel="noopener noreferrer" className="hover:text-white" data-test={name}>{name}</a>
                </div>
                <div className="flex flex-row gap-4">
                    <div>
                        {itemPage?.node?.stargazerCount}
                    </div>
                    <div>
                        {`Last updated: ${formattedDate}`}
                    </div>
                </div>
            </div>
        </div>
    )
}