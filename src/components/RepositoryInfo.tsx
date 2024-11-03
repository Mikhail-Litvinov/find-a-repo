import { useUnit } from "effector-react"
import { $itemPage } from "../store/pageStore"

export const RepositoryInfo = () => {
    const itemPage = useUnit($itemPage)

    return (
        <div className="w-full flex flex-wrap justify-between items-start gap-2">
            <div className="w-full sm:ml-0 md:max-w-[60%] md:ml-2 flex flex-col items-start justify-start gap-4 p-2 bg-gray-200 text-gray-900 rounded-xl border border-gray-700/5">
                <span className="font-bold underline">Description</span>
                {itemPage?.node?.description}
            </div>
            <div className="sm:mr-0 sm:w-full md:w-max md:mr-2 flex flex-col items-start justify-start gap-4 p-2 bg-gray-200 text-gray-900 rounded-xl border border-gray-700/5 mb-2">
                <span>Languages</span>
                <div className="w-full min-w-52 h-3 flex flex-row rounded-md overflow-hidden border border-gray-900">
                    {itemPage?.node?.languages?.edges.map((item, i) => {
                        return (
                            <div
                                style={{
                                    width: `${(item.size / itemPage?.node?.languages?.totalSize) * 100}%`,
                                    backgroundColor: `${item.node.color}`
                                }}
                                key={`language-size_${item.node.name}_${i}`}
                                className="h-full"
                            >
                            </div>
                        )
                    })
                    }
                </div>
                {itemPage?.node?.languages?.edges.map((item, i) => {
                    return (
                        <div
                            key={`language_${item?.node?.name}_${i}`}
                            className="flex flex-row gap-2"
                        >
                            <span>-</span>
                            <span>{item.node.name}</span>
                            <span>{`${((item.size / itemPage?.node?.languages?.totalSize) * 100).toFixed(2)}%`}</span>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}