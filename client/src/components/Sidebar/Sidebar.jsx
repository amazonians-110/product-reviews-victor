import React from 'react';
import Stars from './Stars/Stars.jsx';
import Feature from './Feature/Feature.jsx';
import Interests from './Interests/Interests.jsx';
import Thoughts from './Thoughts/Thoughts.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        Here is the sidebar
        <Stars/>
        <Feature/>
        <Interests/>
        <Thoughts/>
      </div>
    )
  }
}

export default Reviews;