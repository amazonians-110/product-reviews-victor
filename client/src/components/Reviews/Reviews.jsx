import React from 'react';
import Images from './Images/Images.jsx';
import Mention from './Mention/Mention.jsx';
import ReviewList from './ReviewList/ReviewList.jsx';
import WriteReview from './WriteReview/WriteReview.jsx';
import styled from 'styled-components';

const Boxes = styled.div`
  padding: 20px
`;


class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Boxes><Images/></Boxes>
        <Boxes><Mention/></Boxes>
        <Boxes><ReviewList/></Boxes>
        <Boxes><WriteReview/></Boxes>
      </div>
    )
  }
}

export default Reviews;