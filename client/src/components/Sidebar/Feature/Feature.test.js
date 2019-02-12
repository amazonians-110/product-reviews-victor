import React from 'react';
import { shallow } from 'enzyme';

import Feature from './Feature';

describe('Feature', () => {
  it('should render correctly', () => {
    
    const component = shallow(<Feature/>);

    expect(component).toMatchSnapshot();
  });
});
