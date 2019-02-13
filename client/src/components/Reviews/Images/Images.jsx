/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import smiley from './smiley.jpg';

const Text = styled.a`
  color: #0066c0;
  font-size: 13px 
  text-Decoration: none;
`;

class Images extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <b>Customer Images</b>
        <div>
          <img src={smiley} alt="smiley face" height="100" width="100" />
          <img src={smiley} alt="smiley face" height="100" width="100" />
          <img src={smiley} alt="smiley face" height="100" width="100" />
          <img src={smiley} alt="smiley face" height="100" width="100" />
        </div>
        <Text href="https://www.w3schools.com/html/">See all customer images</Text>
      </div>
    );
  }
}

export default Images;
