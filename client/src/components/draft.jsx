import React from 'react';
import DraftEntry from './draftEntry.jsx';

const olStyle = {
  'list-style-type': 'none',
  margin: 0,
  padding: 0,
  'counter-reset': 'ordered-list'
};

const Draft = (props) => {
  return (
  	<ol>
    	{props.draftPicks.map((pick, index) => <DraftEntry style={olStyle} key={index} pick={pick} />)}
    </ol>
  )
}

export default Draft
