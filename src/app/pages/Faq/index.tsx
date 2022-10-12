/**
 *
 * Faq
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Helmet } from 'react-helmet-async';
import { FaqHelpers } from './FaqHelpers';
import { VerticalBar } from 'app/components/VerticalBar';
import { IconLink } from 'app/components/IconLink';
import { User } from 'svg/components';

const FaqPageWrapper = styled.div`
  flex: 1;
  display: flex;
`;

const FaqBlock = styled.div`
  color: #f3f3f3;
  & + & {
    margin-top: 60px;
  }
`;

const FaqHeader = styled.p`
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
`;

const FaqBarLetter = styled.p`
  font-weight: 700;
  font-size: 38px;
  line-height: 170%;
  color: #b5b4ca;
`;

const FaqAnswer = styled.p`
  text-align: left;
  font-weight: 400;
  font-size: 28px;
  line-height: 155%;
  margin-left: 20%;
`;

interface Props {}

export function Faq(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <FaqPageWrapper>
        <Helmet>
          <title>FAQ</title>
          <meta
            name="description"
            content="A Boilerplate application homepage"
          />
        </Helmet>
        <VerticalBar
          components={'FAQ'.split('').map(item => (
            <FaqBarLetter>{item}</FaqBarLetter>
          ))}
        />
        <div className="container">
          {FaqHelpers.map(item => (
            <FaqBlock>
              <FaqHeader>{item.question}</FaqHeader>
              <FaqAnswer>— {item.answer}</FaqAnswer>
            </FaqBlock>
          ))}
        </div>
      </FaqPageWrapper>
    </>
  );
}
