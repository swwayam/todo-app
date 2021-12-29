import React, {useState, useEffect} from 'react'
import './App.css'

const App = () => {
  //  storing the state
    const [task, setNewTask] = useState('');
    const [item, addItem] = useState([]);

  // To update the task list when user enters the data
  const update = () => {
      addItem([...item,{id: new Date().getTime().toString(), name:task}])
  }

  // To delete a task 
  const delItem = (i) => {
    addItem(item.filter(elm => {
      return i !== elm.id;
    }))
  }


  return (
    <div className='interface'>
        <div className='input-div'>
        <input className='input'
          onChange={(e) => {
            setNewTask(e.target.value);
              }} placeholder='Enter the task' />
        <button onClick={update} className='input-btn' type='submit'>Add Task</button>
          </div>
          <div className='tasks'>
              
        {
          item.map(({ name, id }) => {
            return (
              <div className='task-div' key={id}>
                <h3 className='task'>{name}</h3>
                <button className='del-btn'
                onClick={() => delItem(id)}>X</button> 
              </div>     
            )
          })
        }
          </div>
    </div>
  )
}

export default App;