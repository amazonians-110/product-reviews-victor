import React from 'react';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        See all 453 reviews
        <div>
        <input type="submit" value="Write a customer review"></input>
        </div>
      </div>
    )
  }
}

export default WriteReview;