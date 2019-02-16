/* eslint-disable react/button-has-type */
import React from 'react';

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

export default Buttons;
