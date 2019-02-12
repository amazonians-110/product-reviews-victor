import React from 'react';
import Images from './Images/Images.jsx';
import Mention from './Mention/Mention.jsx';
import ReviewList from './ReviewList/ReviewList.jsx';
import WriteReview from './WriteReview/WriteReview.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        This is the reviews
        <Images/>
        <Mention/>
        <ReviewList/>
        <WriteReview/>
      </div>
    )
  }
}

export default Reviews;