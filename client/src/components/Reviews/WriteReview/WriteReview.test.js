import React from 'react';
import { shallow } from 'enzyme';

import WriteReview from './WriteReview';

describe('WriteReview', () => {
  it('should render correctly', () => {
    
    const component = shallow(<WriteReview/>);

    expect(component).toMatchSnapshot();
  });
});
