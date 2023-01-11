

import React from 'react'
import { useState } from 'react'

const App2 = () => {

  const [notes, setNotes] = useState([1,2,3])
  const [editNum, setEditNum] = useState(null)
  const [value, setValue] = useState('')

  const result = notes.map((note, index) => {
    return <li key={index} onClick={() => startEdit(index)}>{note}</li>
  } )

  function startEdit(index) {
    setEditNum(index)
    setValue(notes[index])
  }

  function changeHandler(e) {
    setValue(e.target.value)
    if(editNum) {
      setNotes([...notes.slice(0, editNum), e.target.value, ...notes.slice(editNum + 1)])
    } 
  }

  function blurHandler(event) {
    if(!editNum) {
      setNotes([...notes, value])
    } else {
      setEditNum(null)
    }
  }
  return (
    <div className='App'>
      Подход второй
      {result}
      <input value={value} onChange={changeHandler}  onBlur={blurHandler}/>

    </div>
  )
}

export default App2
