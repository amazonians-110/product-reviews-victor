/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';

const Links = styled.a`
color: #0066c0;
display: inline block;
padding: 5px 10px 5px 10px;
text-decoration: none;
:hover {
  text-decoration: underline;
  color: #c60;
}
`;

const Descriptor = styled.div`
padding: 2px;
font-size: 14px;
padding: 0px 15px 0px 0px;
`;

const Number = styled.button`
color: #c76800;
font-size: 17px;
font-weight: bolder;
border: none; 
padding: 0;
background-color: transparent;
outline: none;
text-align: left;
:hover {
  color: #c60;
}
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
border-radius: 2px;
background: linear-gradient(to bottom,#ffce00,#ffa700);
background-color: #ffce00;
border-right-color: #cc9204;
`;

const Rating = styled.div`
color: #797979;
display: inline-block;
`;

const Starbox = styled.div`
display: flex;
align-items: center;
margin-top: 7px;
margin-bottom: 15px;
justify-content: flex-start;
`;

const Tooltiptext = styled.div`
  visibility: hidden;
  width: 400px;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 3px;
  padding: 10px;
  border: 1px solid #f1f3f5;
  position: absolute;
  z-index: 1;
`;

const Tooltip = styled.div`
position: relative;
display: inline-block;

&:hover ${Tooltiptext} {
  visibility: visible;
}
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
          {'   '}
          <Tooltip>
            4.2 out of 5 stars
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/downarrow.png" alt="down" height="10px" />
            <Tooltiptext>
            Amazon calculates a product’s star ratings based on a
            machine learned model instead of a raw data average. The
            model takes into account factors including the age of a rating,
            whether the ratings are from verified purchasers, and factors that
            establish reviewer trustworthiness.
            </Tooltiptext>
          </Tooltip>
        </Starbox>

        <div>
          <Links href="#top">
          5 star
            {'    '}
            <Bars>
              <Yellow></Yellow>
            </Bars>
          </Links>
          <Rating>20%</Rating>
        </div>
        <div>
          <Links href="#top">
          4 star
            {'    '}
            <Bars>
              <Yellow></Yellow>
            </Bars>          
          </Links>
          <Rating>20%</Rating>
        </div>
        <div>
          <Links href="#top">
          3 star
            {'    '}
            <Bars>
              <Yellow></Yellow>  
            </Bars>          
          </Links>
          <Rating>20%</Rating>
        </div>
        <div>
          <Links href="#top">
          2 star
            {'    '}
            <Bars>
              <Yellow></Yellow>  
            </Bars>          
          </Links>
          <Rating>20%</Rating>
        </div>
        <div>
          <Links href="#top">
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
