import React from 'react';
import { Link } from 'react-router';

let AppLayout = function(props) {
	return (
		<div>
      <header className="App-header">
        <h2>Welcome to Moviebase</h2>
      </header>	
      <main>
      	{props.children}
      </main>
      <footer>
      	<p>Moviebase, All rights reserved</p>
      </footer>		
		</div>
	)
}

export default AppLayout;