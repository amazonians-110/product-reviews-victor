/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  color: #0066c0;
  font-size: 13px;
  font-weight: bold; 
`;

const Wrap = styled.div`
padding: 15px 15px 25px 0px
`;

const Button = styled.button`
  background: #eff1f3;
  border-radius: 3px;
  border-color: #ADB1B8 #A2A6AC #8D9096;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  display: inline-block;
  margin: 8px;
  text-align: center;
  text-decoration: none!important;
  vertical-align: middle;
  width: 160px;
  height: 29px;
  font-family: Arial,sans-serif;
`;

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrap>
        <Text>
          See all 453 reviews
        </Text>

        <Button>
          Write a customer review
        </Button>
      </Wrap>
    );
  }
}

export default WriteReview;
