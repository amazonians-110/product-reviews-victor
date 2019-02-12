import React from 'react';
import { shallow } from 'enzyme';

import ReviewList from './ReviewList';

describe('ReviewList', () => {
  it('should render correctly', () => {
    
    const component = shallow(<ReviewList/>);

    expect(component).toMatchSnapshot();
  });
});
