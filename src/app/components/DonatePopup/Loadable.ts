/**
 *
 * Asynchronously loads the component for DonatePopup
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DonatePopup = lazyLoad(
  () => import('./index'),
  module => module.DonatePopup,
);
