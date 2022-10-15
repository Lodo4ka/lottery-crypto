/**
 *
 * Game
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { DonatePopup } from '../../components/DonatePopup';
import { Input } from '../../components/Input';
import { CardChampion } from '../../components/CardChampion';

interface Props {}

export function Game(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const GamePageWrapper = styled.div`
    flex: 1;
  `;

  const GameControllers = styled.div``;

  const GameText = styled.div`
    font-family: 'Jura-Bold', Helvetica, Arial, sans-serif;
  `;

  const ChampionsTitle = styled.h5`
    font-family: 'Jura-Regular', Helvetica, Arial, sans-serif;
    font-size: 28px;
  `;

  const [showDonatePop, setShowDonatePop] = useState(false);

  return (
    <>
      <Helmet>
        <title>GamePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div className="d-flex flex-column flex-grow-1 mt-5">
        <GamePageWrapper className="row row-cols-auto">
          <GameText className="align-self-center container col-12 col-md-9">
            <p className={'mb-5'}>
              Link a wallet for depositing and withdrawing funds
            </p>
            <p className={'mb-5'}>Choose the amount you want to donate</p>
            <p className={'mb-5'}>3 pigs out of 9 contain x2 bonus</p>
            <p className={'mb-5'}>
              Guess which pig contains the bonus and win x2 from your donation
            </p>
          </GameText>
          <GameControllers className="col-12 col-md-3">
            <div className="mb-3">
              <Input
                label={'Wallet balance:'}
                disabled={true}
                value={'232332'}
              />
            </div>
            <div className="mb-5">
              <Input
                label={'Contract balance:'}
                disabled={true}
                value={'232332'}
              />
            </div>
            <div className="flex-grow-3">
              <ChampionsTitle className={'mb-3'}>Champions:</ChampionsTitle>
              <CardChampion />
            </div>
          </GameControllers>
        </GamePageWrapper>
        <div className={'align-self-center'}>
          <button
            className={'btn btn-primary btn-sm'}
            onClick={() => setShowDonatePop(true)}
          >
            Donate
          </button>
        </div>
        {showDonatePop && <DonatePopup close={() => setShowDonatePop(false)} />}
      </div>
    </>
  );
}
