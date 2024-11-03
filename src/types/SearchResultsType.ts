export interface SearchResultsType {
    search: {
        nodes: PreviewRepositoryType[]
        pageInfo: SearchPageInfoType
        repositoryCount: number
    }
}

export interface PreviewRepositoryType {
    id: string
    name: string
    stargazerCount: number
    updatedAt: string
    url: string
}

export interface SearchPageInfoType {
    endCursor: string
    hasNextPage: boolean
    hasPreviousPage: boolean
    startCursor: string
    }