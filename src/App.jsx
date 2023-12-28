import { useState } from 'react'
import "./App.css"
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import InputArea from './assets/components/InputArea';
import ToDoItem from './assets/components/ToDoItem'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function App() {
  const[items,setItems] = useState([])
  const [isChecked, setChecked] = useState(true);
  
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  // const dImg = 'url("./assets/images/bg-desktop-dark.jpg")'
  // const lImg = 'url("./assets/images/bg-desktop-light.jpg")'

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
      <div className="bg1" style={{backgroundImage:isChecked ? 'url("./src/assets/images/bg-desktop-light.jpg")' : 'url("./src/assets/images/bg-desktop-dark.jpg")'}}></div>
      <div className="bg2" style={{backgroundColor:isChecked ? "aliceblue" : "#161A30"}}>
      </div>
      <Grid display="flex" justifyContent="center" alignItems="center" height="100dvh" flexDirection="column">
        <div className='heading'>
          <Typography sx={{color:isChecked ? "#444444" : "aliceblue",fontWeight:"700",fontSize:"1.5em",letterSpacing:"0.4em"}}>TODO</Typography>
          <Checkbox 
            icon={<LightModeOutlinedIcon color='secondary' />} 
            checkedIcon={<DarkModeOutlinedIcon color='secondary' fontWeight="900" />} 
            onChange={handleCheckboxChange}
          />
        </div>
        <Paper elevation={24}>
          <InputArea
            add={addNote}
            bg = {isChecked ? "ivory" : "#444444"}
            check={isChecked}
          />
        </Paper>
        <br />
        <Paper elevation={24}>
            {items.map((todoitem,index)=>(
              <ToDoItem
                key={index}
                id={index}
                text={todoitem}
                delete={deleteNote}
                check={isChecked}
              />
            ))}
        </Paper>
      </Grid>
    </div>
  )
}

export default App