import React from 'react';

const Draft = (props) => {
	console.log(props)
  return (
  	<ol>
    	<li>{props.draftPicks.map(pick => pick)}</li>
    </ol>
  );
}

export default Draft
