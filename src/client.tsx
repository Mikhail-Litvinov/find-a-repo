import { ApolloClient, InMemoryCache } from "@apollo/client"


const env = import.meta.env

export const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
        Authorization: `Bearer ${env.VITE_GIT_ACCESS_TOKEN}`,
    },
    cache: new InMemoryCache(),
})