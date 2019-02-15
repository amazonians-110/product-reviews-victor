/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';

const axios = require('axios');

const Button = styled.button`
  background: #eff1f3;
  border-radius: 3px;
  border-color: #ADB1B8 #A2A6AC #8D9096;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  display: inline-block;
  padding: 0;
  text-align: center;
  text-decoration: none!important;
  vertical-align: middle;
  box-sizing: border-box;
  width: 100px;
  height: 29px;
`;

const Select = styled.select`
  background: #eff1f3;
  width: 100px;
`;

const Reviews = styled.div`
  padding: 5px;
  line-height: 20px;
  font-size: 13px;  
`;

const Title = styled.b`
  font-weight: bolder;
`;

const Starbox = styled.div`
display: flex;
align-items: center;
`;

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <div>
          <h5>Showing 1-8 of 453 reviews</h5>
          <Select name="reviews">
            <option value="Top Reviews">Top Reviews</option>
            <option value="Most recent">Most recent</option>
          </Select>
        </div>

        <Reviews>
          <div>
            <img
              src="https://s3.amazonaws.com/product-reviews-hr110/Icons/avatar.png"
              height="30px"
              width="30px"
              alt="avatar"
              max-width="100%"
              display="block"
            />
            Victor Liu
            <Starbox>
              <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
              <Title> Quod soluta quas ipsam autem dolor libero dolor qui repudiandae.</Title>
            </Starbox>
            <div>September 18, 2018</div>
            <p>
            "Pariatur dolorum voluptate commodi iusto omnis alias sed enim rem. Quis omnis ipsam
             aliquid dolores. Tempore consequuntur dolor est excepturi. Cum et doloremque aut as
             Id voluptatem sint. Labore vero perferendis omnis voluptatem.,
            "revtitleiew_": "Quod soluta quas ipsam autem dolor libero dolor qui repudiandae."
            </p>
            <div>
              301 people found this helpful
            </div>
            <div>
              <Button>Helpful</Button> |
              <a href="https://www.w3schools.com/html/" style={{ textDecoration: 'none', color: '#7a7a7a' }}>Comment</a> |
              <a href="https://www.w3schools.com/html/" style={{ textDecoration: 'none', color: '#7a7a7a' }}>Report abuse</a>
            </div>
          </div>
        </Reviews>

        <Reviews>
          <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/avatar.png" height="30px" width="30px" alt="avatar" />
            Grace Shei
          <Starbox>
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
            <Title> Quod soluta quas ipsam autem dolor libero dolor qui repudiandae.</Title>
          </Starbox>
          <div>September 18, 2018</div>
          <p>
            "Pariatur dolorum voluptate commodi iusto omnis alias sed enim rem. Quis omnis ipsam
             aliquid dolores. Tempore consequuntur dolor est excepturi. Cum et doloremque aut as
             Id voluptatem sint. Labore vero perferendis omnis voluptatem.,
            "review_title": "Quod soluta quas ipsam autem dolor libero dolor qui repudiandae."
          </p>
          <div>
              107 people found this helpful
          </div>
          <div>
            <Button>Helpful</Button> |
            <a href="https://www.w3schools.com/html/" style={{ textDecoration: 'none', color: '#7a7a7a' }}>Comment</a> |
            <a href="https://www.w3schools.com/html/" style={{ textDecoration: 'none', color: '#7a7a7a' }}>Report abuse</a>
          </div>
        </Reviews>

        <Reviews>
          <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/avatar.png" height="30px" width="30px" alt="avatar" />
          Chris Tso
          <Starbox>
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
            <Title> Quod soluta quas ipsam autem dolor libero dolor qui repudiandae.</Title>
          </Starbox>
          <div>September 18, 2018</div>
          <p>
          "Pariatur dolorum voluptate commodi iusto omnis alias sed enim rem. Quis omnis ipsam
            aliquid dolores. Tempore consequuntur dolor est excepturi. Cum et doloremque aut as
            Id voluptatem sint. Labore vero perferendis omnis voluptatem.,
          "review_title": "Quod soluta quas ipsam autem dolor libero dolor qui repudiandae."
          </p>
          <div>
              888 people found this helpful
          </div>
          <div>
            <Button>Helpful</Button> |
            <a href="https://www.w3schools.com/html/" style={{ textDecoration: 'none', color: '#7a7a7a' }}>Comment</a> |
            <a href="https://www.w3schools.com/html/" style={{ textDecoration: 'none', color: '#7a7a7a' }}>Report abuse</a>          
          </div>
        </Reviews>
      </div>
    );
  }
}

export default ReviewList;
