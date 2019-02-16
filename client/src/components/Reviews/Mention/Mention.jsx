/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';

const Title = styled.button`
font-weight: 700;
font-size: 17px;
line-height: 1.255;
border: none; 
padding: 0;
background-color: transparent;
outline: none;
text-align: left;
`;

const Container = styled.div`
display: flex;
align-items: row;
align-content: space-around;
`;

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: true,
      fontColor: true,
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    this.setState({
      color: !this.state.color,
      fontColor: !this.state.fontColor,
    });
  }

  render() {
    const bgColor = this.state.color ? '#d6e8ea' : '#00464f';
    const txtColor = this.state.fontColor ? 'black' : 'white';
    const style = {
      backgroundColor: bgColor,
      color: txtColor,
      margin: '10px 10px 10px 0px',
      lineHeight: '29px',
      padding: '0px 14px',
      fontSize: '13px',
      outline: 'none',
      boxShadow: 'none',
    };
    const randomArr = ['sound quality', 'battery life', 'charging case',
      'wireless earbuds', 'noise cancelling', 'highly recommend',
      'noise cancellation', 'rose gold', 'listening to music', 'definitely recommend',
      'left earbud', 'left and right'];
    return (
      <div>
        <button
          style={style}
          onClick={this.changeColor}
        >
          {randomArr[Math.floor(Math.random() * 11) + 1]}
        </button>
      </div>
    );
  }
}

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


// const Button = styled.button`
// background-color: #D7E8EA;
// padding: 0px 14px;
// line-height: 29px;
// margin: 10px 10px 10px 0px;
// border-bottom: solid 1px #969696;
// display: flex;
// font-size: 13px;
// color: #111111;
// `;
