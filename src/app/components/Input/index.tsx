/**
 *
 * Input
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {
  label: string;
  disabled?: boolean;
  value: string;
}

export const Input = memo(({ label, disabled, value }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const LabelInput = styled.label``;

  const InputWrapper = styled.div`
    font-family: 'Jura-Regular', Helvetica, Arial, sans-serif;
    font-size: 28px;
    position: relative;

    &:after {
      bottom: -1px;
      content: '';
      left: 0;
      position: absolute;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
      width: 100%;
      border: 2px solid rgba(243, 243, 243, 1);
    }
  `;

  return (
    <InputWrapper>
      <LabelInput className={'mb-1'}>{label}</LabelInput>
      <input
        type="text"
        className="form-control"
        value={value}
        disabled={disabled}
      />
    </InputWrapper>
  );
});
