/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        See all 453 reviews
        <div>
          <input type="submit" value="Write a customer review" />
        </div>
      </div>
    );
  }
}

export default WriteReview;
