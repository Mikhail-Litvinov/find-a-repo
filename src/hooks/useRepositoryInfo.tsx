import { gql, useQuery } from "@apollo/client";

export function useRepositoryInfo(id: string | null) {
    const query = gql`
        query GetRepositoryById($id: ID!) {
            node(id: $id) {
                ... on Repository {
                    stargazerCount
                    updatedAt
                    owner {
                        avatarUrl
                        login
                        url
                    }
                    languages(first: 100) {
                        edges {
        node {
          name
          color 
        }
        size
      }
      totalSize
                    }
                    description
                    url
                }
            }
        }
    `;

    const { loading, error, data } = useQuery(query, {
        variables: { id },
        skip: !id,
    });

    return { loading, error, data }
}