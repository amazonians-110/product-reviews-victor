/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar/Sidebar.jsx';
import Reviews from './Reviews/Reviews.jsx';

const LeftRight = styled.div`
display: flex;
flex-direction: column;
border: solid black 1px;
width: 100%
height: 100%
justify-content: flex-start;
flex-wrap: wrap;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LeftRight>
          <Sidebar />
        </LeftRight>

        <LeftRight>
          <Reviews />
        </LeftRight>
      </div>
    );
  }
}

export default App;
