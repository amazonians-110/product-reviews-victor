/* eslint-disable react/button-has-type */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';

const Descriptor = styled.div`
padding: 2px;
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
  box-sizing: border-box;
  width: 50px;
  height: 20px;
  font-family: Arial,sans-serif;
`;

class Interests extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <b>By consumer groups & interests</b>
        <Descriptor>Headphones       ***** 4.2</Descriptor>
        <Descriptor>Customers in New York    ***** 4.7</Descriptor>
        <Descriptor>
          Is this feature helpful?
          <Button>Yes</Button>
          <Button>No</Button>
        </Descriptor>
      </div>
    );
  }
}

export default Interests;