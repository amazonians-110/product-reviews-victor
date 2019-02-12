/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Stars from './Stars/Stars.jsx';
import Feature from './Feature/Feature.jsx';
import Interests from './Interests/Interests.jsx';
import Thoughts from './Thoughts/Thoughts.jsx';

const Boxes = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  border: solid black 1px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%
  height: 100%
`;

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Boxes>
          <b>453 customer reviews</b>
        </Boxes>
        <Boxes>
          <Stars />
        </Boxes>
        <Boxes>
          <Feature />
        </Boxes>
        <Boxes>
          <Interests />
        </Boxes>
        <Boxes>
          <Thoughts />
        </Boxes>
      </div>
    );
  }
}

export default Reviews;
