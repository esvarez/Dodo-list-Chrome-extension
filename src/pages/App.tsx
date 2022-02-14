import React from 'react';
import AddTodo from '../components/AddDodo/add-dodo'
import DodoList from '../components/DodoList/dodo-list';
import { DodoItem } from '../components/DodoItem/DodoItem';

export interface dodo {name: string, done: boolean}

const dodos: dodo[] = [
  {name: 'something something', done:false},
  {name: 'something something 3', done:false},
  {name: 'something something 2', done:false},
  {name: 'something somethi ng somethething s something something 1 something something 1 something something 1 ', done:false},
]

function App() {
  return (
    <React.Fragment>   
      <div className='w-96 h-[420px] px-4 py-2 border-2'>
        <AddTodo />
        <DodoList >   
          { dodos.map(dodo => (
              <DodoItem 
                key={dodo.name}
                name={dodo.name} 
                done={dodo.done}
              />
            )) }                
        </DodoList>
      </div>   
    </React.Fragment>  
  );
}

export default App;
