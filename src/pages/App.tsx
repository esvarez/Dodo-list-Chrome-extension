import React from 'react';
import AddTodo from '../components/AddDodo/add-dodo'
import DodoList from '../components/DodoList/dodo-list';
import DodItem from '../components/DodoItem/DodoItem';
function App() {
  return (
    <React.Fragment>      
      <AddTodo />
      <DodoList />
      <DodItem />
    </React.Fragment>  
  );
}

export default App;
