import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useRepositoryInfo } from "../hooks/useRepositoryInfo"
import { RepositoryHeader, RepositoryInfo, RepositoryOwner } from "../components"
import { useUnit } from "effector-react"
import { $itemPage, setItemPage } from "../store/pageStore"

export const RepositoryPage = () => {
    const searchParams = new URLSearchParams(useLocation().search)
    const id = searchParams.get("id")

    const itemPage = useUnit($itemPage)

    const { loading, error, data } = useRepositoryInfo(id ?? null);

    useEffect(() => {
        if (!loading && !error && data) {
            setItemPage(data)
        }
    }, [loading, error, data])

    useEffect(() => {
        console.log(itemPage)
    }, [itemPage])

    return (
        <div className='w-full flex flex-col gap-5 bg-gray-100 rounded-xl shadow-lg overflow-hidden box-border'>
            <RepositoryOwner />
            <RepositoryHeader />
            <RepositoryInfo />
        </div>
    )
}
