import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import './style.scss';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <button className="btn btn-primary btn-lg">Click me</button>
      <button className="btn btn-primary btn-sm">Click me</button>
      <button className="btn btn-secondary btn-sm">Click me</button>
    </>
  );
}
