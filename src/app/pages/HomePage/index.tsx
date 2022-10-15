import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import './style.scss';
import styled from 'styled-components';
import { breakpointHelpers } from 'utils/helpers';
import { VerticalBar } from 'app/components/VerticalBar';
import { IconLink } from 'app/components/IconLink';
import { User, Gamepad, Docs } from 'svg/components';

const HomePageWrapper = styled.div`
  flex: 1;
  display: flex;
`;

const ContentBlock = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: flex-end;
  margin-bottom: 100px;
  max-width: 1370px;

  @media screen and (max-width: ${breakpointHelpers.lg}) {
    flex-direction: column;
  }

  & > .description-block {
    max-width: 665px;
    flex: 1;
  }

  & > .start-game-block {
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }
`;

export function HomePage() {
  return (
    <HomePageWrapper>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <VerticalBar
        components={[
          <IconLink to="/1">
            <Gamepad />
          </IconLink>,
          <IconLink to="/3">
            <Docs />
          </IconLink>,
          <IconLink to="/2">
            <User />
          </IconLink>,
        ]}
      />
      <ContentBlock className="container px-5">
        <div className="description-block">
          <h1>Send a donation and win 2 times more</h1>
          <p>The probability of instantly withdrawing x2 is 33%</p>
        </div>
        <div className="start-game-block">
          <button className="btn btn-primary btn-lg">Let's try</button>
        </div>
      </ContentBlock>
    </HomePageWrapper>
  );
}
