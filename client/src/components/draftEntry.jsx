import React from 'react';

const liStyle = {
  'border-bottom': '1px solid gray',
  'font-size': '20px',
  padding: '15px 15px 20px 120px',
  position: 'relative'
};

const DraftEntry = (props) => {
  return (
  	<li style={liStyle} className="draftPick">{props.pick}</li>
  );
}

export default DraftEntry