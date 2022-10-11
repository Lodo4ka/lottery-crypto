/**
 *
 * Footer
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {
  isTransparent: boolean;
}

const FooterContainer = styled.div<Props>`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => (props.isTransparent ? 'transparent' : '#170928')};
  color: #f3f3f3;

  & > p {
    font-size: 22px;
    margin: 0;
  }
`;

export function Footer(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <FooterContainer isTransparent={props.isTransparent}>
      <p>Powered by 'Waves' cryptocurrency</p>
    </FooterContainer>
  );
}
