/**
 *
 * Asynchronously loads the component for GeneratorTestingComponent1
 *
 */

import { lazyLoad } from 'utils/loadable';

export const GeneratorTestingComponent1 = lazyLoad(
  () => import('./index'),
  module => module.GeneratorTestingComponent1,
);
