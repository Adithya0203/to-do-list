import { useState } from 'react'
import "./App.css"
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import InputArea from './assets/components/InputArea';
import ToDoItem from './assets/components/ToDoItem'

function App() {
  const[items,setItems] = useState([])

  function addNote(note){
    setItems((prevItems) => {
      return [...prevItems, note];
    });
  }

  function deleteNote(id){
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <div className="bg1"></div>
      <div className="bg2"></div>
      <Grid display="flex" justifyContent="center" alignItems="center" height="100dvh" flexDirection="column">
        <Paper elevation={24}>
          <InputArea add={addNote} />
        </Paper>
        <br />
        <Paper elevation={24}>
            {items.map((todoitem,index)=>(
              <ToDoItem
                key={index}
                id={index}
                text={todoitem}
                delete={deleteNote}
              />
            ))}
        </Paper>
      </Grid>
    </div>
  )
}

export default App