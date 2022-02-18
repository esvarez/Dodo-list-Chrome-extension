import React from 'react';

export const AddDodo = () => {
  return(
		<React.Fragment>
			<div>
				<label htmlFor='dodo' className='block text-sm font-medium text-gray-700'>
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
						className='focus:blue-500 focus:blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md'
						placeholder='Salir a caminar'
					/>					
				</div>							
				<span className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-2'>
					Dodo no valido!
				</span>
				<div className='flex justify-end'>
        	<button type='button' className='inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto md:text-sm'>Cancelar</button>
        	<button type='button' className='ml-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-xs font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto md:text-sm'>Crear</button>
      	</div>				
			</div>
		</React.Fragment>        
  );
}

/*
    

*/