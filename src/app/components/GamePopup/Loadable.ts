/**
 *
 * Asynchronously loads the component for GamePopup
 *
 */

import { lazyLoad } from 'utils/loadable';

export const GamePopup = lazyLoad(
  () => import('./index'),
  module => module.GamePopup,
);
