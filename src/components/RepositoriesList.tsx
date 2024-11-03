import classNames from "classnames"
import { useEffect } from "react";
import { useSearch } from "../hooks/useSearch";
import { RepositoryElement } from "./RepositoryElement";
import { TableNavigation } from "./TableNavigation";
import { useSearchParams } from "react-router-dom";
import { useGetUser } from "../hooks/useGetUser";
import { useUnit } from "effector-react";
import { $nextCursor, $searchResults, setSearchResults, setTotalPages } from "../store/searchStore";

export const RepositoriesList = () => {
    const [searchParams] = useSearchParams()
    const repoName = searchParams.get("reponame") || undefined
    const userName = searchParams.get("login") || undefined

    const searchResults = useUnit($searchResults)
    const nextCursor = useUnit($nextCursor)

    const { currentUserData } = useGetUser()
    const currentUserName = currentUserData?.viewer?.login

    const queryString = [
        repoName ? `${repoName} in:name` : '',
        userName ? `user:${userName} in:login` : !repoName && !userName ? `user:${currentUserName} in:login` : '',
        `sort:updated-desc`
    ].filter(Boolean).join(' ')

    const { loading, error, data } = useSearch(queryString, nextCursor)

    useEffect(() => {
        if (!loading && !error) {
            setSearchResults(data)
            setTotalPages(Math.ceil(data.search.repositoryCount / 10))
        }
    }, [data, loading, error, queryString])

    useEffect(() => {
        console.log(searchResults)
    }, [searchResults])

    return (
        <div className={classNames("w-full flex flex-col gap-6")}>
            <div className="w-full flex flex-col gap-4 box-border">
                <div className="w-full grid sm:grid-cols-[repeat(4,_minmax(0,_1fr))] md:grid-cols-[50%_repeat(3,_minmax(0,_1fr))] gap-2 box-border border-b-gray border-b p-2 md:h-10 relative font-bold bg-gray-200 rounded-xl shadow-lg">
                    <div
                        className="w-full text-center"
                    >
                        {"Repository name"}
                    </div>
                    <p className="w-full text-center">{"Repository stars"}</p>
                    <p className="w-full text-center" >{"Last update"}</p>
                    <p className="w-full text-right">{"Github link"}</p>
                </div>
                {searchResults?.search?.nodes.map((repo, i) => {
                    return (
                        <RepositoryElement key={`${repo.name}_${repo.id}_${i}`} repo={repo} index={i} />
                    )
                })
                }
            </div>
            <div className="w-full flex justify-center items-center">
                <TableNavigation
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    )
}