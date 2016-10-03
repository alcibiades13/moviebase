import React from 'react';
import { Link } from 'react-router';


let Other  = function() {
	return (
		<div>
			<p>Other component</p>
			<Link to="/">Movies page</Link>
		</div>
	)
}

export default Other;