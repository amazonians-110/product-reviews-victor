/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h6>Showing 1-8 of 453 reviews</h6>
          <select name="reviews">
            <option value="Top Reviews">Top Reviews</option>
            <option value="Most recent">Most recent</option>
          </select>
        </div>

        <div>Review of product</div>
        <div>Review of product</div>
        <div>Review of product</div>
        <div>Review of product</div>
        <div>Review of product</div>
      </div>
    );
  }
}

export default ReviewList;
