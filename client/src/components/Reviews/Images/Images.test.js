import React from 'react';
import { shallow } from 'enzyme';

import Images from './Images';

describe('Images', () => {
  it('should render correctly', () => {
    
    const component = shallow(<Images/>);

    expect(component).toMatchSnapshot();
  });
});
