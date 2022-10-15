/**
 *
 * IconLink
 *
 */
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const IconItem = styled.div`
  margin: auto;
  color: #b5b4ca;

  &:hover {
    color: #f3f3f3;
  }
`;

interface Props {
  children: React.ReactNode;
  to: string;
}

export function IconLink(props: Props) {
  return (
    <Link to={props.to}>
      <IconItem>{props.children}</IconItem>
    </Link>
  );
}
