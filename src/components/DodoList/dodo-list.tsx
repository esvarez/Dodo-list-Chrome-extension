import React from 'react';

function DodoList(props:any) {
	return(
		<React.Fragment>
			<span>DodoList works!</span>
			<ul className='list-none'>
				{props.children}
			</ul>
		</React.Fragment>
	)
}

export default DodoList;