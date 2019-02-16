/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Button, Select, Reviews, Title, Starbox, Space } from './ReviewList.style';

class ReviewList extends React.Component {

  render() {
    return (
      <div>
        <Title>Showing 1-8 of 453 reviews</Title>
        <div>
          <Select name="reviews">
            <option value="Top Reviews">Top Reviews</option>
            <option value="Most recent">Most recent</option>
          </Select>
        </div>

        <Reviews>
          <div>
            <Starbox>
              <img
                src="https://s3.amazonaws.com/product-reviews-hr110/Icons/avatar.png"
                height="30px"
                width="30px"
                alt="avatar"
                max-width="100%"
                display="block"
              />
              Colleen Marquardt
            </Starbox>
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
            <Space>
              <Button>Helpful</Button> |
              <a href="#top" style={{ textDecoration: 'none', color: '#7a7a7a' }}>Comment</a> |
              <a href="#top" style={{ textDecoration: 'none', color: '#7a7a7a' }}>Report abuse</a>
            </Space>
          </div>
        </Reviews>

        <Reviews>
          <Starbox>
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/avatar.png" height="30px" width="30px" alt="avatar" />
            Ms. Calista Buckridge
          </Starbox>
          <Starbox>
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/stars.png" alt="stars" height="25px" />
            <Title> Quod soluta quas ipsam autem dolor libero dolor qui repudiandae.</Title>
          </Starbox>
          <div>August 9, 2018</div>
          <p>
            "Pariatur dolorum voluptate commodi iusto omnis alias sed enim rem. Quis omnis ipsam
             aliquid dolores. Tempore consequuntur dolor est excepturi. Cum et doloremque aut as
             Id voluptatem sint. Labore vero perferendis omnis voluptatem.,
            "review_title": "Quod soluta quas ipsam autem dolor libero dolor qui repudiandae."
          </p>
          <div>
              107 people found this helpful
          </div>
          <Space>
            <Button>Helpful</Button> |
            <a href="#top" style={{ textDecoration: 'none', color: '#7a7a7a' }}>Comment</a> |
            <a href="#top" style={{ textDecoration: 'none', color: '#7a7a7a' }}>Report abuse</a>
          </Space>
        </Reviews>

        <Reviews>
          <Starbox>
            <img src="https://s3.amazonaws.com/product-reviews-hr110/Icons/avatar.png" height="30px" width="30px" alt="avatar" />
            Reina Beer
          </Starbox>
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
          <Space>
            <Button>Helpful</Button> |
            <a href="#top" style={{ textDecoration: 'none', color: '#7a7a7a' }}>Comment</a> |
            <a href="#top" style={{ textDecoration: 'none', color: '#7a7a7a' }}>Report abuse</a>          
          </Space>
        </Reviews>
      </div>
    );
  }
}

export default ReviewList;
