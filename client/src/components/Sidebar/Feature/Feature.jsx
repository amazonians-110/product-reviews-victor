/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';

const Descriptor = styled.div`
padding: 2px;
`;

class Feature extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <b>By feature</b>
        <Descriptor>Sound quality          ***** 4.4</Descriptor>
        <Descriptor>Battery life           ***** 4.1</Descriptor>
        <Descriptor>Noise cancellation     ***** 4.1</Descriptor>
      </div>
    );
  }
}

export default Feature;