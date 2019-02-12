import React from 'react';
import Sidebar from './Sidebar/Sidebar.jsx';
import Reviews from './Reviews/Reviews.jsx';
import styled from 'styled-components';

const LeftRight = styled.div`
  display: inline-block
  padding: 50px
  border-style: solid
  margin: 50px
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