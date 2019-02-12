import React from 'react';
import { shallow } from 'enzyme';

import Interests from './Interests';

describe('Interests', () => {
  it('should render correctly', () => {
    
    const component = shallow(<Interests/>);

    expect(component).toMatchSnapshot();
  });
});
