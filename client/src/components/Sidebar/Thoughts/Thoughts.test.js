import React from 'react';
import { shallow } from 'enzyme';

import Thoughts from './Thoughts';

describe('Thoughts', () => {
  it('should render correctly', () => {
    
    const component = shallow(<Thoughts/>);

    expect(component).toMatchSnapshot();
  });
});
