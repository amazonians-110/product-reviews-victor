/* eslint-disable react/button-has-type */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #eff1f3;
  border-radius: 3px;
  border-color: #ADB1B8 #A2A6AC #8D9096;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  display: inline-block;
  padding: 0;
  text-align: center;
  text-decoration: none!important;
  vertical-align: middle;
  box-sizing: border-box;
  width: 300px;
  height: 29px;
  font-family: Arial,sans-serif;
  
`;


class Thoughts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <b>Review this product</b>
        <div>Share your thoughts with other customers</div>

        <Button>
          Write a customer review
        </Button>
      </div>
    );
  }
}

export default Thoughts;
