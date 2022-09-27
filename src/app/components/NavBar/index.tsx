/**
 *
 * Navbar
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

const Container = styled.div``;

export const Navbar = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Container>
      {t('')}
      Navbar
      {/*  {t(...messages.someThing())}  */}
    </Container>
  );
});
