/* eslint-disable react/button-has-type */
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
font-size .9em;
padding: 15px 15px 15px 0px
`;

const Button = styled.button`
  background: #eff1f3;
  border-radius: 3px;
  border-color: #ADB1B8 #A2A6AC #8D9096;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  display: inline-block;
  margin: 4px;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  width: 50px;
  height: 20px;
  font-family: Lato,sans-serif;
  :hover {
    background: #e7e9ec;
  }
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

const Starbox = styled.div`
display: flex;
align-items: center;
margin-top: 7px;
margin-bottom: 7px;
`;

class Interests extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Border>
        <Starbox>
          <Title>By consumer groups & interests</Title>
          <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/questionmark.png" alt="questionmark" height="20px" />
        </Starbox>
        <Descriptor>
          Headphones
          <Starbox>
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
            <Rating>4.2</Rating>
          </Starbox>
        </Descriptor>

        <Descriptor>
          Customers in New York
          <Starbox>
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
            <Rating>4.7</Rating>
          </Starbox>
        </Descriptor>
        <Descriptor style={{ textDecoration: 'none', color: '#7a7a7a' }}>
          Is this feature helpful?

          <Button>Yes</Button>
          <Button>No</Button>
        </Descriptor>
      </Border>
    );
  }
}

export default Interests;