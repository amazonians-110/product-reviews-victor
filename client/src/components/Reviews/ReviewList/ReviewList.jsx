/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';

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
  font-family: Arial,sans-serif;
`;

const Select = styled.select`
  background: #eff1f3;
`;

const Reviews = styled.div`
  padding: 5px;
  line-height: 20px;
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
            <img src="" alt="" />
            Victor Liu
            <div>
              Stars
              <b> "Quod soluta quas ipsam autem dolor libero dolor qui repudiandae."</b>
            </div>
            <div>September 18, 2018</div>
            <p>
            "Pariatur dolorum voluptate commodi iusto omnis alias sed enim rem. Quis omnis ipsam
             aliquid dolores. Tempore consequuntur dolor est excepturi. Cum et doloremque aut as
             Id voluptatem sint. Labore vero perferendis omnis voluptatem.,
            "revtitleiew_": "Quod soluta quas ipsam autem dolor libero dolor qui repudiandae."
            </p>
            <div>
              xyz people found this helpful
            </div>
            <div>
              <Button>Helpful</Button> | Comment | Report abuse
            </div>
          </div>
        </Reviews>

        <Reviews>
          <img src="" alt="" />
            Grace Shei
          <div>
              Stars
            <b> "Quod soluta quas ipsam autem dolor libero dolor qui repudiandae."</b>
          </div>
          <div>September 18, 2018</div>
          <p>
            "Pariatur dolorum voluptate commodi iusto omnis alias sed enim rem. Quis omnis ipsam
             aliquid dolores. Tempore consequuntur dolor est excepturi. Cum et doloremque aut as
             Id voluptatem sint. Labore vero perferendis omnis voluptatem.,
            "review_title": "Quod soluta quas ipsam autem dolor libero dolor qui repudiandae."
          </p>  
          <div>
              xyz people found this helpful
          </div>                
          <div>
            <Button>Helpful</Button> | Comment | Report abuse
          </div>
        </Reviews>

        <Reviews>
          <img src="" alt="" />
          Chris Tso
          <div>
              Stars
            <b> "Quod soluta quas ipsam autem dolor libero dolor qui repudiandae."</b>
          </div>
          <div>September 18, 2018</div>
          <p>
          "Pariatur dolorum voluptate commodi iusto omnis alias sed enim rem. Quis omnis ipsam
            aliquid dolores. Tempore consequuntur dolor est excepturi. Cum et doloremque aut as
            Id voluptatem sint. Labore vero perferendis omnis voluptatem.,
          "review_title": "Quod soluta quas ipsam autem dolor libero dolor qui repudiandae."
          </p>
          <div>
              xyz people found this helpful
          </div>          
          <div>
            <Button>Helpful</Button> | Comment | Report abuse
          </div>
        </Reviews>
      </div>
    );
  }
}

export default ReviewList;
