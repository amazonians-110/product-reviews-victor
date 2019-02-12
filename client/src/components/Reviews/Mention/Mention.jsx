/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Mention extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <b>Read reviews that mention</b>
        <div>
          <input type="submit" value="sound quality" />
          <input type="submit" value="battery life" />
          <input type="submit" value="highly charging case" />
          <input type="submit" value="wireless earbuds" />
        </div>
        <div>
          <input type="submit" value="noise cancelling" />
          <input type="submit" value="highly recommend" />
          <input type="submit" value="noise cancellation" />
          <input type="submit" value="rose gold" />
        </div>
        <div>
          <input type="submit" value="definitely recommend" />
          <input type="submit" value="left earbud" />
          <input type="submit" value="listening to music" />
          <input type="submit" value="left and right" />
        </div>
      </div>
    );
  }
}

export default Mention;
