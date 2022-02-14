import React from 'react';

export const DodoList = (props:any) => {
	return(
		<React.Fragment>
			<span>DodoList works!</span>			
			{props.children}			
		</React.Fragment>
	)
}

export default DodoList;