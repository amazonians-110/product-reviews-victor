/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Title, Container } from './Mention.style';
import Buttons from './Buttons';

class Mention extends React.Component {
  render() {
    return (
      <div>
        <Title>Read reviews that mention</Title>
        <Container>
          <Buttons />
          <Buttons />
          <Buttons />
          <Buttons />
        </Container>
        <Container>
          <Buttons />
          <Buttons />
          <Buttons />
          <Buttons />
        </Container>
        <Container>
          <Buttons />
          <Buttons />
          <Buttons />
          <Buttons />
        </Container>
      </div>
    );
  }
}

export default Mention;
