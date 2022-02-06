import React from 'react';

function AddTodo() {
  return(
		<React.Fragment>
			<div>
				<label htmlFor="dodo" className='block text-sm font-medium text-gray-700'>
					Nuevo dodo
				</label>
				<div className='mt-1 relative rounded-md shadow-sm'> 
					<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
						<span className='text-gray-500 sm:text-sm'>+</span>
					</div>
					<input 
						type='text'
						name='dodo'		
						id='dodo'				
						className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md'
						placeholder='Salir a caminar'
					/>					
				</div>							
				<span className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
					Invalid username field !
				</span>
			</div>
		</React.Fragment>        
  );
}

export default AddTodo;

/*
    

*/