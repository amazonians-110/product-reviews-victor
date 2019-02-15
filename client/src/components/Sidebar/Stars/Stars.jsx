/* eslint-disable react/self-closing-comp */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';

const Links = styled.a`
color: #0066c0;
display: inline block;
padding: 2px;
`;

const Number = styled.b`
color: #c76800;
font-weight: bolder;
font-size: 17px;
line-height: 1.3;
`;

const Descriptor = styled.div`
padding: 2px;
font-size: 14px;
padding: 0px 15px 0px 0px;
vertical-align: text-bottom;
`;

const Bars = styled.div`
background-color: #f1f1f1;
width: 195px;
height: 17px;
display: inline-block;
border: 1px solid #b1b1b1;
`;

const Yellow = styled.div`
background-color: #ffc200;
width: 39px;
height:17px;
border-radius: 1px;
background: linear-gradient(to bottom,#ffce00,#ffa700);
background-color: #ffce00;
}
`;

const Rating = styled.div`
  color: #797979;
  display: inline-block;
`;

const Starbox = styled.div`
display: flex;
align-items: center;
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
        <Starbox>
          <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
           4.2 out of 5 stars
          <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/downarrow.png" alt="down" height="10px" />
        </Starbox>
        <div>
          <Links>
          5 star
            {'    '}
            <Bars>
              <Yellow></Yellow>
            </Bars>
          </Links>
          <Rating>20%</Rating>
        </div>
        <div>
          <Links>
          4 star
            {'    '}
            <Bars>
              <Yellow></Yellow>
            </Bars>          
          </Links>
          <Rating>20%</Rating>
        </div>
        <div>
          <Links>
          3 star
            {'    '}
            <Bars>
              <Yellow></Yellow>  
            </Bars>          
          </Links>
          <Rating>20%</Rating>
        </div>
        <div>
          <Links>
          2 star
            {'    '}
            <Bars>
              <Yellow></Yellow>  
            </Bars>          
          </Links>
          <Rating>20%</Rating>
        </div>
        <div>
          <Links>
          1 star
            {'    '}
            <Bars>
              <Yellow></Yellow>
            </Bars>
          </Links>
          <Rating>20%</Rating>
        </div>
      </Descriptor>
    );
  }
}

export default Stars;
