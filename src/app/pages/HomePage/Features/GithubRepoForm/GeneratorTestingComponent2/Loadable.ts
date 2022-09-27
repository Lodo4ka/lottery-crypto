/**
 *
 * Asynchronously loads the component for GeneratorTestingComponent2
 *
 */

import { lazyLoad } from 'utils/loadable';

export const GeneratorTestingComponent2 = lazyLoad(
  () => import('./index'),
  module => module.GeneratorTestingComponent2,
);
