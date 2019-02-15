/* eslint-disable react/button-has-type */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';

const Border = styled.div`
border-top: 1px solid #e7e7e7;
border-bottom: 1px solid #e7e7e7;
font-size 14px;
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
  text-decoration: none!important;
  vertical-align: middle;
  box-sizing: border-box;
  width: 300px;
  height: 29px;
  font-family: Lato,sans-serif;
`;

const Title = styled.b`
font-weight: bolder;
font-size: 17px;
line-height: 1.255;
`;

class Thoughts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Border>
        <Title>Review this product</Title>
        <div>Share your thoughts with other customers</div>

        <Button>
          <a href="https://www.w3schools.com/html/" style={{ textDecoration: 'none', color: 'black' }}>Write a customer review</a>
        </Button>
      </Border>
    );
  }
}

export default Thoughts;
