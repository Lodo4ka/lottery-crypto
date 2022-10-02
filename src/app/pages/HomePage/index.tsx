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

      {/*<div className="gradient-box">*/}
      {/*  <p>*/}
      {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent*/}
      {/*    bibendum, lorem vel tincidunt imperdiet, nibh elit laoreet felis, a*/}
      {/*    bibendum nisl tortor non orci. Donec pretium fermentum felis, quis*/}
      {/*    aliquet est rutrum ut. Integer quis massa ut lacus viverra pharetra in*/}
      {/*    eu lacus. Aliquam tempus odio adipiscing diam pellentesque rhoncus.*/}
      {/*    Curabitur a bibendum est.{' '}*/}
      {/*  </p>*/}
      {/*</div>*/}
      <div>
        <button className="reset btn-gradient-2">Button Two</button>
      </div>
    </>
  );
}
