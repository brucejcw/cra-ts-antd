import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '@/composed/Header'
import Footer from '@/composed/Footer'
import Container from '@/composed/Container'
import Routes from './Routes'
import { GlobalStyle } from './globalStyle'
import '@/lib/i18n'
import { UserCtxProvider } from '@/context/UserContext'
import { GlobalCtxProvider, useGlobalContext } from '@/context/GlobalContext'
import { StyledGlobalSpin } from './style'

const MultiProvider = (props: any) => {
  let previous = props.children
  for (let i = props.providers.length - 1; i >= 0; i--) {
    previous = React.createElement(props.providers[i], {}, previous)
  }
  return previous
}

function Component() {
  const {
    state: { showGlobalLoading },
  } = useGlobalContext()

  return (
    <StyledGlobalSpin tip="Loading..." spinning={showGlobalLoading}>
      <Router>
        <Layout>
          <Header />
          <Container>
            <Routes />
          </Container>
          <Footer />
        </Layout>
      </Router>
    </StyledGlobalSpin>
  )
}

function Index() {
  return (
    <>
      <GlobalStyle />
      <MultiProvider providers={[GlobalCtxProvider, UserCtxProvider]}>
        <Component />
      </MultiProvider>
    </>
  )
}

export default Index
