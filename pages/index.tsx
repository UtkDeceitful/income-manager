import React from 'react'

import { Container, Header, Main, Footer, Cards, Test } from '@components'
import { Button } from 'semantic-ui-react'

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <div>
        <Test />
      </div>
      <Main />
      <Cards />
      <Footer />
    </Container>
  )
}

export default Home
