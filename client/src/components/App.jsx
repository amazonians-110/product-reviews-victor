import React from 'react';
import Sidebar from './Sidebar/Sidebar.jsx';
import Reviews from './Reviews/Reviews.jsx';
import styled from 'styled-components';

const LeftRight = styled.div`
  display: inline-block
  border: 1px
  border-style: solid
  padding: 50px
  height: 100%
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <LeftRight>
          <Sidebar/>
        </LeftRight>

        <LeftRight>
          <Reviews/>                              
        </LeftRight>
      </div>
    )
  }
}

export default App;