/* eslint-disable react/no-unused-state */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';

const axios = require('axios');

const Text = styled.a`
  color: #0066c0;
  font-size: 13px 
  text-Decoration: none;
  :hover {
    text-decoration: underline;
    color: #c60;
  }
`;

const Title = styled.button`
font-weight: bolder;
font-size: 17px;
line-height: 1.255;
border: none; 
padding: 0;
background-color: transparent;
outline: none;
text-align: left;
`;

const Pic = styled.img`
  margin: 2.5px;
`;

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    axios.get('/product/2')
      .then((res) => {
        // console.log(res.data[0].images);
        this.setState({ images: res.data[0].images });
      });
  }

  render() {
    return (
      <div>
        <Title>Customer Images</Title>
        <div>
          <Pic src="http://lorempixel.com/640/480/food" alt="food" height="144" width="144" />

          <Pic src="http://lorempixel.com/640/480/cats" alt="cat" height="144" width="144" />
          <Pic src="http://lorempixel.com/640/480/sports" alt="sports" height="144" width="144" />
          <Pic src="http://lorempixel.com/640/480/transport" alt="transportation" height="144" width="144" />
        </div>
        <Text href="#top">See all customer images</Text>
      </div>
    );
  }
}

export default Images;
