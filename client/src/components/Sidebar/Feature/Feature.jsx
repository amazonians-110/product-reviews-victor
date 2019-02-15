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

const Title = styled.button`
font-weight: bolder;
font-size: 17px;
line-height: 1.255;
border: none; 
padding: 0;
background-color: transparent;
outline: none;
text-align: left;
`;

const Rating = styled.div`
  color: #797979;
  display: inline-block;
`;

const Keep = styled.div`
display: flex;
align-items: center;
margin-top: 7px;
margin-bottom: 7px;
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
          <Keep>
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
            <Rating>4.4</Rating>
          </Keep>
        </Descriptor>
        <Descriptor>
          Battery life
          <Keep>
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
            <Rating>4.1</Rating>
          </Keep>
        </Descriptor>
        <Descriptor>
          Noise cancellation
          <Keep>
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
            <Rating>4.1</Rating>
          </Keep>
        </Descriptor>
      </Border>
    );
  }
}

export default Feature;
