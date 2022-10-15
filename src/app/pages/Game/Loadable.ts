/**
 *
 * Asynchronously loads the component for Game
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Game = lazyLoad(
  () => import('./index'),
  module => module.Game,
);
