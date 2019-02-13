/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';

const Descriptor = styled.div`
padding: 2px;
font-size: 14px;
`;

const Border = styled.div`
border-top: 1px solid #e7e7e7;
font-size 14px;
padding: 15px 15px 0px 0px
`;

class Feature extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Border>
        <b>By feature</b>
        <Descriptor>Sound quality          ***** 4.4</Descriptor>
        <Descriptor>Battery life           ***** 4.1</Descriptor>
        <Descriptor>Noise cancellation     ***** 4.1</Descriptor>
      </Border>
    );
  }
}

export default Feature;