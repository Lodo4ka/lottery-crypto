/**
 *
 * Navbar
 *
 */
import React, { memo } from 'react';
import './style.css';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import Logo from './Logo.svg';
import { NavLink } from 'react-router-dom';

interface Props {}

export const Navbar = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className={'navbar-nav me-auto'}></div>
          <div className="d-flex navbar-nav">
            <NavLink to="/contacts" className="nav-item nav-link nav-margin">
              Contacts
            </NavLink>
            <NavLink to="faq" className="nav-item nav-link nav-margin">
              FAQ
            </NavLink>
            <button className="btn btn-danger">CONNECT WALLET</button>
          </div>
        </div>
      </div>
    </nav>
  );
});
