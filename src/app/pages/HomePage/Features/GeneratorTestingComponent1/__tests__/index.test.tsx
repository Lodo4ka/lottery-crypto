import * as React from 'react';
import { render } from '@testing-library/react';

import { GeneratorTestingComponent1 } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<GeneratorTestingComponent1  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<GeneratorTestingComponent1 />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
