import React from 'react';

class Feature extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <b>By feature</b>
        <div>Sound quality          ***** 4.4</div>
        <div>Battery life           ***** 4.1</div>
        <div>Noise cancellation     ***** 4.1</div>
      </div>
    )
  }
}

export default Feature;