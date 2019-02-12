/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Stars from './Stars';

describe('Stars', () => {
  it('should render correctly', () => {
    const component = shallow(<Stars />);

    expect(component).toMatchSnapshot();
  });
});
