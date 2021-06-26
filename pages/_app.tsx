import React from 'react'
import { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import 'tailwindcss/tailwind.css'
import { StyledThemeProvider } from '@definitions/styled-components'
import { Provider as ReduxProvider } from 'react-redux'
import store from '@redux/store'
import { ApolloProvider } from '@apollo/client/react'
import client from '../src/graphql'

import '@styles/global.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <StyledThemeProvider>
        <ReduxProvider store={store}>
          <Component {...pageProps} />
        </ReduxProvider>
      </StyledThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
