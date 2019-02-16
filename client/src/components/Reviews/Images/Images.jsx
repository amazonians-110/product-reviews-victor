/* eslint-disable react/no-unused-state */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Title, Pic, Text } from './Images.style';

const axios = require('axios');

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
