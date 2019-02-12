import React from 'react';

class Interests extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <b>By consumer groups & interests</b>
        <div>Headphones       ***** 4.2</div>
        <div>Customers in New York    ***** 4.7</div>
        <div>Is this feature helpful? 
          <button>Yes</button>
          <button>No</button>
        </div>        
      </div>
    )
  }
}

export default Interests;