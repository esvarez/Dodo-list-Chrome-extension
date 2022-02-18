import { Fragment, useState } from 'react';
import { AddDodo } from '../components/AddDodo/add-dodo'
import { DodoList } from '../components/DodoList/dodo-list';
import { DodoItem } from '../components/DodoItem/DodoItem';

export interface dodo {name: string, done: boolean}

const defaultDodos: dodo[] = [
  {name: 'something something', done:false},
  {name: 'something something 3', done:false},
  {name: 'something something 2', done:false},
  {name: 'something somethi ng somethething s something something 1 something something 1 something something 1 ', done:false},
]

function App() {
  const [dodos, setDodos] = useState(defaultDodos)

  const completeDodo = (id: string): void => {       
    setDodos([... dodos.map(dodo => {
      if (dodo.name === id) {
        dodo.done = true
      }
      return dodo
    })]    )
  }

  const deleteDodo = (id: string): void => {    
    setDodos([... dodos.filter(dodo => dodo.name != id)])
  }

  return (
    <Fragment>   
      <div className='w-96 h-[420px] px-4 py-2 border-2'>
        <AddDodo />
        <DodoList >   
          { dodos.map(dodo => (
              <DodoItem 
                key={dodo.name}
                name={dodo.name} 
                done={dodo.done}
                onComplete = {() => completeDodo(dodo.name)}
                onDelete = {() => deleteDodo(dodo.name)}
              />
            )) }                
        </DodoList>
      </div>   
    </Fragment>  
  );
}

export default App;
