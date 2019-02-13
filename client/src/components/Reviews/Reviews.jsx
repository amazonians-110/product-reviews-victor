/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Images from './Images/Images.jsx';
import Mention from './Mention/Mention.jsx';
import ReviewList from './ReviewList/ReviewList.jsx';
import WriteReview from './WriteReview/WriteReview.jsx';

const Boxes = styled.div`
flex-direction: column;
align-items: stretch;
justify-content: stretch;
padding: 10px;
`;

const Left = styled.div`
padding-left: 40px;
`;


class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Left>
        <Boxes><Images /></Boxes>
        <Boxes><Mention /></Boxes>
        <Boxes><ReviewList /></Boxes>
        <Boxes><WriteReview /></Boxes>
      </Left>
    );
  }
}

export default Reviews;
