import { gql, useQuery } from "@apollo/client"

export function useGetUser() {
    const userQuery = gql`
        query GetCurrentUser {
            viewer {
            login
            }
        }
    `
    const { data: currentUserData } = useQuery(userQuery)

    return { currentUserData }
}