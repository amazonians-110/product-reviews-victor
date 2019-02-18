/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Title, Pic, Text, SeeImages } from './Images.style';
import Modal from '../Modal/Modal.jsx';

const axios = require('axios');

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }


  componentDidMount() {
    axios.get('/product/2')
      .then((res) => {
      // console.log(res.data[0].images);
        this.setState({ images: res.data[0].images });
      });
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Title>Customer Images</Title>
        <div id="app">
          <div>
            <Pic src="http://lorempixel.com/640/480/food" alt="food" height="144" width="144" />
            <Pic src="http://lorempixel.com/640/480/cats" alt="cat" height="144" width="144" />
            <Pic src="http://lorempixel.com/640/480/sports" alt="sports" height="144" width="144" />
            <Pic src="http://lorempixel.com/640/480/transport" alt="transportation" height="144" width="144" />        
          </div>
          <SeeImages onClick={this.toggleModal}>
            See all customer images
          </SeeImages>

          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>
            <Pic src="http://lorempixel.com/640/480/food" alt="food" height="120" width="120" />
            <Pic src="http://lorempixel.com/640/480/cats" alt="cat" height="120" width="120" />
            <Pic src="http://lorempixel.com/640/480/people" alt="sports" height="120" width="120" />
            <Pic src="http://lorempixel.com/640/480/nature" alt="transportation" height="120" width="120" />    
            <Pic src="http://lorempixel.com/640/480/food" alt="food" height="120" width="120" />
            <Pic src="http://lorempixel.com/640/480/cats" alt="cat" height="120" width="120" />
            <Pic src="http://lorempixel.com/640/480/cats" alt="sports" height="120" width="120" />
            <Pic src="http://lorempixel.com/640/480/transport" alt="transportation" height="120" width="120" /> 
            <Pic src="http://lorempixel.com/640/480/fashion" alt="food" height="120" width="120" />
            <Pic src="http://lorempixel.com/640/480/nightlife" alt="cat" height="120" width="120" />
            <Pic src="http://lorempixel.com/640/480/cats" alt="sports" height="120" width="120" />
            <Pic src="http://lorempixel.com/640/480/cats" alt="transportation" height="120" width="120" />        
            <Pic src="http://lorempixel.com/640/480/food" alt="food" height="120" width="120" />
            <Pic src="http://lorempixel.com/640/480/cats" alt="cat" height="120" width="120" />
            <Pic src="http://lorempixel.com/640/480/people" alt="sports" height="120" width="120" />                                               
          </Modal>
        </div>
      </div>
    );
  }
}

export default Images;
