import { gql, useQuery } from "@apollo/client";

export function useSearch(queryString: string, nextCursor: string | null) {

    const query = gql`
        query Repositories($query: String!, $after: String) {
            search(query: $query, type: REPOSITORY, first: 10, after: $after) {
            repositoryCount
            nodes {
                ... on Repository {
                id
                name
                stargazerCount
                updatedAt
                url
                }
            }
            pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor 
            }
            }
        }
        `

    const { loading, error, data } = useQuery(query, {
        variables: { query: queryString, after: nextCursor }
    });

    return { loading, error, data }
}