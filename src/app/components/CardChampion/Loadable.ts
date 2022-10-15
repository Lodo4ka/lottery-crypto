/**
 *
 * Asynchronously loads the component for CardChampions
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CardChampions = lazyLoad(
  () => import('./index'),
  module => module.CardChampion,
);
