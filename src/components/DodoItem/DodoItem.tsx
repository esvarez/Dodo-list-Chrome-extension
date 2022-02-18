import React from 'react';
import { dodo } from '../../pages/App';
import { faCheck, faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faEdit } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const DodoItem = (props: any) => {
	return (
		<React.Fragment>
			
			<div className='border-2 mt-1 py-1 inline-block w-full hover:bg-gray-100'>
				<div className='flex flex-row'>					
					<div className='flex items-center px-2'>		
						<FontAwesomeIcon 
							icon={faCircle} 
							className={`cursor-pointer text-primary hover:text-secondary text-xs`} 
							onClick={props.onComplete}
						/>
					</div>
					<div className='flex flex-col mx-1 p-1 justify-center w-full'>												
						<p className="text-xs leading-none text-regular-bk md:text-sm ">{ props.name } {props.done? 'done': 'nops'} </p>
					</div>
					<div className='flex items-center pl-1 pr-2' >
						<FontAwesomeIcon icon={faPen} className='cursor-pointer mr-2 hover:text-secondary text-xs' />								
						<FontAwesomeIcon 
							icon={faTrashAlt} 
							className='cursor-pointer hover:text-red-500 text-xs' 
							onClick={props.onDelete}
						/>								
					</div>
				</div>
			</div>		
			
		</React.Fragment>			
	)
}

/*					

<FontAwesomeIcon icon={faCheck} className='cursor-pointer' />												
					<div className='flex flex-col px-2 justify-center'>
						<FontAwesomeIcon icon={faCircle} className='cursor-pointer' />		
						<FontAwesomeIcon icon={faCheck} className='cursor-pointer' />						
					</div>*/