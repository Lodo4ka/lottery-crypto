/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import '../styles/custom-bootstrap.scss';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { About } from './pages/About/Loadable';
import { Navbar } from './components/Navbar';

export function App() {
  const { i18n } = useTranslation();
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Navbar />
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
}
