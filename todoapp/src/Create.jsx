import React, { useState } from 'react'
import axios from 'axios'

function Create() {
  const [task, setTask] = useState()

  //create task
  const handleAdd = () => {
    axios.post('http://localhost:5001/add', {task: task})
    .then( result => {
      location.reload()
    })
    .catch( err => console.log(err))
  }
  return (
    <div class="create_form">
        <input type="text" placeholder='Enter the Task Name' onChange={(e) => setTask(e.target.value)}/>
        <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create