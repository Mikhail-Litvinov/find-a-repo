import { ApolloError } from "@apollo/client"
import { useEffect, useState } from "react"
import { NavButton } from "./NavButton"
import { PaginationButtons } from "./PaginationButtons"
import { Ellipsis } from "./Ellipsis"
import * as Icon from "../imagery/icons"
import classNames from "classnames"
import { useSearchParams } from "react-router-dom"
import { useUnit } from "effector-react"
import { $searchResults, $totalPages, setNextCursor } from "../store/searchStore"

type Props = {
    loading: boolean,
    error: ApolloError | undefined
}
export const TableNavigation = ({ loading, error }: Props) => {
    const [searchParams, setSearchParams] = useSearchParams()

    const totalPages = useUnit($totalPages)
    const searchResults = useUnit($searchResults)
    const pageInfo = searchResults?.search?.pageInfo

    const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page') || 1))

    const isNavDisabled = loading || Boolean(error)

    const handlePageClick = (page: number) => {
        setCurrentPage(page)
        setNextCursor(btoa(`cursor:${(page - 1) * 10}`))
    };

    const constructNextCursor = () => {
        if (!isNavDisabled && pageInfo.hasNextPage) {
            setNextCursor(pageInfo.endCursor)
            setCurrentPage(prev => prev + 1)
        }
    }

    const constructPrevCursor = () => {
        if (!isNavDisabled && pageInfo.hasPreviousPage) {
            setNextCursor(btoa(`cursor:${Math.max(0, (currentPage - 2) * 10)}`))
            setCurrentPage(prev => prev - 1)
        }
    }

    useEffect(() => {
        const newParams = new URLSearchParams(searchParams)
        if (currentPage > 1) {
            newParams.set('page', String(currentPage))
        } else {
            newParams.delete('page')
        }
        setSearchParams(newParams)
    }, [currentPage, searchParams, setSearchParams])

    const renderPageButtons = () => {
        const buttons = [];
        const maxButtons = 5;

        if (totalPages === 0) {
            buttons.push(
                <PaginationButtons key={1} onClick={() => handlePageClick(1)}>
                    1
                </PaginationButtons>
            );
        } else {
            let startPage = 1;
            let endPage = totalPages > maxButtons ? maxButtons : totalPages;

            if (currentPage > 3 && totalPages > maxButtons) {
                startPage = currentPage - 2;
                endPage = Math.min(currentPage + 2, totalPages);
            }

            if (currentPage > 3 && totalPages > maxButtons) {
                buttons.push(
                    <PaginationButtons key={1} onClick={() => handlePageClick(1)}>
                        1
                    </PaginationButtons>
                );
                if (startPage > 2) buttons.push(<Ellipsis key="start-ellipsis" />);
            }

            for (let i = startPage; i <= endPage; i++) {
                buttons.push(
                    <PaginationButtons
                        key={i}
                        isActive={i === currentPage}
                        onClick={() => handlePageClick(i)}
                    >
                        {i}
                    </PaginationButtons>
                );
            }

            if (totalPages > maxButtons && endPage < totalPages) {
                if (endPage < totalPages - 1) buttons.push(<Ellipsis key="end-ellipsis" />);
                buttons.push(
                    <PaginationButtons key={totalPages} onClick={() => handlePageClick(totalPages)}>
                        {totalPages}
                    </PaginationButtons>
                );
            }
        }

        return buttons;
    };

    return (
        <div className="w-max grid grid-rows-1 grid-flow-col gap-2">
            <NavButton
                data-test="prev-button"
                onClick={constructPrevCursor} disabled={isNavDisabled || !pageInfo?.hasPreviousPage}
            >
                <Icon.ArrowLeft className={classNames("fill-gray-500", {
                    "fill-gray-400": isNavDisabled || !pageInfo?.hasPreviousPage
                })} />
            </NavButton>
            {renderPageButtons()}
            <NavButton
                data-test="next-button"
                onClick={constructNextCursor} disabled={isNavDisabled || !pageInfo?.hasNextPage}
            >
                <Icon.ArrowRight className={classNames("fill-gray-500", {
                    "fill-gray-400": isNavDisabled || !pageInfo?.hasNextPage
                })} />
            </NavButton>
        </div>
    )
}