import { useState } from 'react'
import "./App.css"
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
<<<<<<< HEAD
import InputArea from './assets/components/InputArea';
import ToDoItem from './assets/components/ToDoItem'
=======
import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Typography from '@mui/material/Typography';
import InputArea from './assets/components/InputArea';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Container, Paper } from '@mui/material';
>>>>>>> 569e2a63f9b1add1b32630abe663300fa63a3ef0

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
<<<<<<< HEAD
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
=======
    <Container>
      <div className="bg1"></div>
      <div className="bg2"></div>
      <Grid display="flex" justifyContent="center" alignItems="center" height="100dvh">
        <Card raised="true">
          <InputArea />
        </Card>
      </Grid>
    </Container>
>>>>>>> 569e2a63f9b1add1b32630abe663300fa63a3ef0
  )
}

export default App