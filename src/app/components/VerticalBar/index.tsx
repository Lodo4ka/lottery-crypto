/**
 *
 * VerticalBar
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

const MenuWrapper = styled.div`
  top: 50%;
  transform: translateY(-50%);
  position: fixed;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: fit-content;
`;

const MenuItem = styled.div`
  width: 64px;
  height: 64px;

  & + & {
    margin-top: 50px;
  }
`;

interface Props {
  components: React.ReactNode[];
}

export function VerticalBar(props: Props) {
  console.log(props.components);
  return (
    <MenuWrapper>
      {props.components.map((item, i) => (
        <MenuItem key={i}>{item}</MenuItem>
      ))}
    </MenuWrapper>
  );
}
