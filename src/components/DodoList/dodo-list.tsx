import React from 'react';

function DodoList(props:any) {
	return(
		<React.Fragment>
			<span>DodoList works!</span>
			<ul>
				{props.children}
			</ul>
		</React.Fragment>
	)
}

export default DodoList;