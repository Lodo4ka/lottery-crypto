/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Switch,
  Route,
  BrowserRouter,
  Link,
  useLocation,
} from 'react-router-dom';

import '../styles/custom-bootstrap.scss';
import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { Faq } from './pages/Faq';
import { useTranslation } from 'react-i18next';
import { About } from './pages/About/Loadable';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import styled from 'styled-components';
import { BackgroundPattern } from 'svg/components';
import { Game } from './pages/Game';

const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const BackgroundOverlay = styled.div`
  z-index: 0;
  position: fixed;
  pointer-events: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #170928;
`;

export function App() {
  const { i18n } = useTranslation();
  const location = useLocation();

  return (
    <>
      {['/faq'].includes(location.pathname) && (
        <BackgroundOverlay>
          <BackgroundPattern />
        </BackgroundOverlay>
      )}
      <div className="container-fluid">
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>

        <Layout>
          <ContentWrapper>
            <NavBar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/faq" component={Faq} />
              <Route exact path="/about" component={About} />
              <Route exact path="/game" component={Game} />
              <Route component={NotFoundPage} />
            </Switch>
          </ContentWrapper>
          {['/', '/faq'].includes(location.pathname) && (
            <Footer isTransparent={location.pathname !== '/'} />
          )}
        </Layout>
        <GlobalStyle />
      </div>
    </>
  );
}
