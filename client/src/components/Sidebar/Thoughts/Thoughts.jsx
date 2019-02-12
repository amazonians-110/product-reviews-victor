import React from 'react';

class Thoughts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <b>Review this product</b>
        <div>Share your thoughts with other customers</div>
        <input type="submit" value="Write a customer review"></input>
      </div>
    )
  }
}

export default Thoughts;