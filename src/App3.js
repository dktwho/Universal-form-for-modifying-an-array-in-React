

import React from 'react'
import { useState } from 'react'

const App3 = () => {

  const [notes, setNotes] = useState([1,2,3])
  const [editNum, setEditNum] = useState(null)

  const result = notes.map((note, index) => {
    return <li key={index} onClick={() => startEdit(index)}>{note}</li>
  })

  function startEdit(index) {
    setEditNum(index)
  }
  function editItem(e) {
    setNotes([...notes.slice(0, editNum), e.target.value, ...notes.slice(editNum + 1)])
  }

  function createItem() {
    if(!editNum) {
      const res = [...notes, '']
      setNotes(res)
      setEditNum(res.length - 1)
    }
  }

  function stopEdit() {
    setEditNum(null)
  }
  return (
    <div className='App'>
      Подход третий
      {result}
      <input
      value={editNum ? notes[editNum] : ''}
      onChange={editItem}
      onFocus={createItem}
      onBlue={stopEdit}
      />
      
      
    </div>
  )
}

export default App3
