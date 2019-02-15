/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';

const Descriptor = styled.div`
font-size: 14px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Border = styled.div`
border-top: 1px solid #e7e7e7;
font-size 14px;
padding: 15px 15px 15px 0px
`;

const Title = styled.b`
font-weight: bolder;
font-size: 17px;
line-height: 1.255;
`;

const Rating = styled.div`
  color: #797979;
  display: inline-block;
`;

class Feature extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Border>
        <Title>By feature</Title>
        <Descriptor>
          Sound quality
          <div display="inline">
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
          </div>
          <Rating>4.4</Rating>
        </Descriptor>
        <Descriptor>
          Battery life
          <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
          <Rating>4.1</Rating>
        </Descriptor>
        <Descriptor>
          Noise cancellation
          <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
          <Rating>4.1</Rating>
        </Descriptor>
      </Border>
    );
  }
}

export default Feature;
