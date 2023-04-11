import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import apiClient from '@/client/apiClient'
import { ApolloProvider } from '@apollo/client';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apiClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
