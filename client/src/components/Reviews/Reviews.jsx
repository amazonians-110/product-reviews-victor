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
display: flex;
flex-direction: row;
background: #fff;
border: solid black 1px;
padding-top: 10px;
padding-bottom: 10px;
width: 100%
height: 100%
`;


class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Boxes><Images /></Boxes>
        <Boxes><Mention /></Boxes>
        <Boxes><ReviewList /></Boxes>
        <Boxes><WriteReview /></Boxes>
      </div>
    );
  }
}

export default Reviews;
