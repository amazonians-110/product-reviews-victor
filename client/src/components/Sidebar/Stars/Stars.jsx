import React from 'react';

class Stars extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <b>***** 4.2 out of 5 stars</b>
        <div>
          5 star
        </div>
        <div>
          4 star
        </div>
        <div>
          3 star
        </div>
        <div>
          2 star
        </div>
        <div>
          1 star
        </div>                                
      </div>
    )
  }
}

export default Stars;