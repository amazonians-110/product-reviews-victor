/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
const axios = require('axios');

const Text = styled.a`
  color: #0066c0;
  font-size: 13px 
  text-Decoration: none;
`;

const Pic = styled.img`
  margin: 4px;
`;

class Images extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('/product/1')
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    return (
      <div>
        <b>Customer Images</b>
        <div>
          <Pic src="http://lorempixel.com/640/480/food" alt="food" height="144" width="144" />
          <Pic src="http://lorempixel.com/640/480/cats" alt="cat" height="144" width="144" />
          <Pic src="http://lorempixel.com/640/480/sports" alt="sports" height="144" width="144" />
          <Pic src="http://lorempixel.com/640/480/transport" alt="transportation" height="144" width="144" />
        </div>
        <Text href="https://www.w3schools.com/html/">See all customer images</Text>
      </div>
    );
  }
}

export default Images;
