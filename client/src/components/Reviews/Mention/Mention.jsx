import React from 'react';

class Mention extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <b>Read reviews that mention</b>
        <div>
        <input type="submit" value="sound quality"></input>
        <input type="submit" value="battery life"></input>
        <input type="submit" value="highly charging case"></input>
        <input type="submit" value="wireless earbuds"></input>
        </div>
        <div>
        <input type="submit" value="noise cancelling"></input>
        <input type="submit" value="highly recommend"></input>
        <input type="submit" value="noise cancellation"></input>
        <input type="submit" value="rose gold"></input>
        </div>
        <div>
        <input type="submit" value="definitely recommend"></input>
        <input type="submit" value="left earbud"></input>
        <input type="submit" value="listening to music"></input>
        <input type="submit" value="left and right"></input>
        </div>                
      </div>
    )
  }
}

export default Mention;