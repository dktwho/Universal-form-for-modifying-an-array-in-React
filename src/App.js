import { useState } from 'react';
import './App.css';

// 1 -----

function App() {
  const [notes, setNotes] = useState([1,2,3,4])
  const [editNum, setEditNum] = useState(null)
  const [value, setValue] = useState('') 

  const result = notes.map((note, index) => {
    return <li key={index} onClick={() => setEditNum(index)}>{note}</li>
  })

  function changeItem(e) {
    setNotes([...notes.slice(0, editNum), e.target.value, ...notes.slice(editNum + 1)])
  }

  function stopEdit(e) {
    setEditNum(null)
  }

  function changeValue(e) {
    setValue(e.target.value)
  }
  
  function addItem() {
    setNotes([...notes, value])
  }

  let input;
  if(editNum) {
    input = <input 
    value={notes[editNum]}
    onChange={changeItem}
    onblur={stopEdit}
    />

  } else {
    input = <input
    value={value}
    onChange={changeValue}
    onBlur={addItem}
    />
  }

  return (
    <div className="App"> 
    Подход первый
      {result}
      {input}

    </div>
  );
}

export default App;
