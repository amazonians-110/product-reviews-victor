/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Title, Pic, SeeImages } from './Images.style';
import Modal from '../Modal/Modal.jsx';

const axios = require('axios');

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isOpen: false,
      refresh: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    const fullUrl = document.URL;
    const urlArray = fullUrl.split('/');
    const lastSegment = urlArray[urlArray.length - 1];
    axios.get(`http://ec2-34-212-75-218.us-west-2.compute.amazonaws.com/api/product/${lastSegment}`)
      .then((res) => {
        console.log(res);
        for (let i = 0; i < res.data[0].images.length; i += 1) {
          this.state.images.push(<img src={res.data[0].images[i]} height="120" width="120" alt="test" key={i} style={{ margin: '2.5px' }} />);
        }
        this.setState({
          refresh: true,
        });
      });
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
 
  render() {
    return (
      <div>
        <Title>Customer Images</Title>
        <div id="app2">
          <div>
            {this.state.images}
          </div>
          <SeeImages onClick={this.toggleModal}>
            See all customer images
          </SeeImages>

          <Modal
            show={this.state.isOpen}
            onClose={this.toggleModal}
          >
            <Pic src="http://lorempixel.com/640/480/food" alt="food" height="120" width="120" />
            <Pic src="http://lorempixel.com/640/480/cats" alt="cat" height="120" width="120" />
            <Pic src="http://lorempixel.com/640/480/people" alt="sports" height="120" width="120" />
            <Pic src="http://lorempixel.com/640/480/nature" alt="transportation" height="120" width="120" />
            <Pic src="http://lorempixel.com/640/480/cats" alt="food" height="120" width="120" />
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
