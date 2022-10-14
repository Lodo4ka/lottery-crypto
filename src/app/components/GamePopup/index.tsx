/**
 *
 * GamePopup
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import './styles.scss';
import { messages } from './messages';
import GreyRectangle from './GrayRectangle.svg';
import BlueRectangle from './BlueRectangle.svg';
import PurpleRectangle from './PurpleRectangle.svg';
import YellowRectangle from './YellowRectangle.svg';

interface Props {
  close: () => void;
}

// rgba(180, 180, 202, 1)
// rgba(180, 180, 202, 0.2)

export const GamePopup = memo(({ close }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing())}  */}

      <div
        className="modal fade bd-example-modal-lg show d-flex align-items-center"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myLargeModalLabel"
      >
        <div className="modal-dialog modal-xl">
          <div
            className="modal-content text-center"
            style={{ padding: '5rem 10rem' }}
          >
            <button
              type="button"
              className="btn-close btn-close-white position-absolute"
              aria-label="Close"
              onClick={close}
            ></button>
            <p
              className="modal-title"
              style={{ fontSize: 28, marginBottom: '4rem' }}
            >
              Choose the amount you want to donate
            </p>
            <div className="row row-cols-auto gap-3 gx-5">
              <div className="col">
                <div className="card card-grey card-custom">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                      <img src={GreyRectangle} alt="grey" />
                    </h5>
                    <p className="mt-auto">1</p>
                    <p className="card-text">waves</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-blue card-custom">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                      <img src={BlueRectangle} alt="grey" />
                    </h5>
                    <p className="mt-auto">2</p>
                    <p className="card-text">waves</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-purple card-custom">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                      <img src={PurpleRectangle} alt="grey" />
                    </h5>
                    <p className="mt-auto">3</p>
                    <p className="card-text">waves</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-yellow card-custom">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                      <img src={YellowRectangle} alt="grey" />
                    </h5>
                    <p className="mt-auto">4</p>
                    <p className="card-text">waves</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <button className="btn btn-sm btn-primary">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
});

const Div = styled.div``;
