/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  color: #0066c0;
  font-size: 13px;
  font-weight: bold; 
`;

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
  width: 200px;
  height: 29px;
  font-family: Arial,sans-serif;
`;

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Text>
          See all 453 reviews
        </Text>

        <Button>
          Write a customer review
        </Button>
      </div>
    );
  }
}

export default WriteReview;
