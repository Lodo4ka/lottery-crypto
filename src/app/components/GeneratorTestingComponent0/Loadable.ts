/**
 *
 * Asynchronously loads the component for GeneratorTestingComponent0
 *
 */

import { lazyLoad } from 'utils/loadable';

export const GeneratorTestingComponent0 = lazyLoad(
  () => import('./index'),
  module => module.GeneratorTestingComponent0,
);
