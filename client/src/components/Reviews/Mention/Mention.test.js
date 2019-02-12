import React from 'react';
import { shallow } from 'enzyme';

import Mention from './Mention';

describe('Mention', () => {
  it('should render correctly', () => {
    
    const component = shallow(<Mention/>);

    expect(component).toMatchSnapshot();
  });
});
