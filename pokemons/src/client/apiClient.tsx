import { ApolloClient, InMemoryCache } from '@apollo/client';

const apiClient = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/.',
    cache: new InMemoryCache(),
});

export default apiClient