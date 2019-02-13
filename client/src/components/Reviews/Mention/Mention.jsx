/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';

const Buttons = styled.button`
  background-color: #D7E8EA;
  padding: 0px 14px;
  line-height: 29px;
  margin: 0px 10px 14px 0px;
  border-bottom: solid 1px #969696;
  display: inline-block;
  font-size: 13px;
  color: #111111;
`;

class Mention extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <b>Read reviews that mention</b>
        <div>
          <Buttons>sound quality</Buttons>
          <Buttons>battery life</Buttons>
          <Buttons>charging case</Buttons>
          <Buttons>wireless earbuds</Buttons>
        </div>
        <div>
          <Buttons>noise cancelling</Buttons>
          <Buttons>highly recommend</Buttons>
          <Buttons>noise cancellation</Buttons>
          <Buttons>rose gold</Buttons>
        </div>
        <div>
          <Buttons>listening to music</Buttons>
          <Buttons>definitely recommend</Buttons>
          <Buttons>left earbud</Buttons>
          <Buttons>left and right</Buttons>
        </div>
      </div>
    );
  }
}

export default Mention;
