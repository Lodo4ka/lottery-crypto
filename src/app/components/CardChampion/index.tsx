/**
 *
 * CardChampions
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import User from './User.svg';
import { messages } from './messages';

interface Props {}

export const CardChampion = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const CardChampionsWrapper = styled.div`
    border-radius: 10px;
    border: 2px solid rgba(180, 180, 202, 1);
    padding: 20px 18px;
  `;

  return (
    <CardChampionsWrapper>
      <div>
        <img src={User} alt="user" />
      </div>
    </CardChampionsWrapper>
  );
});
