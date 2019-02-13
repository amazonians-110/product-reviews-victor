/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';

const Links = styled.a`
color: #0066c0;
`;

const Number = styled.b`
color: #c76800;
font-weight: 700;
font-size: 17px;
line-height: 1.3;
`;

const Descriptor = styled.div`
padding: 2px;
font-size: 14px;
padding: 15px 15px 0px 0px
`;

class Stars extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Descriptor>
        <Number>453 customer reviews</Number>
        <div />
        <div>***** 4.2 out of 5 stars</div>
        <div>
          <Links>
          5 star
          </Links>
        </div>
        <div>
          <Links>
          4 star
          </Links>
        </div>
        <div>
          <Links>
          3 star
          </Links>
        </div>
        <div>
          <Links>
          2 star
          </Links>
        </div>
        <div>
          <Links>
          1 star
          </Links>
        </div>
      </Descriptor>
    );
  }
}

export default Stars;
