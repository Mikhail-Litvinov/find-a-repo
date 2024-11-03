export interface RepositoryPageType {
    node: {
        description: string
        languages: {
            edges: {
                node: { 
                    name: string 
                    color: string
                    }
                size: number
            }[]
         totalSize: number
        }
        owner: RepositoryOwnerType
        stargazerCount: number
        updatedAt: string
        url: string
    }
}

export interface RepositoryOwnerType {
    avatarUrl: string
    login: string
    url: string
}