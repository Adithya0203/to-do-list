import { useState, useEffect } from 'react'
import "./App.css"
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import InputArea from './components/InputArea';
import ToDoItem from './components/ToDoItem'
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Box, Card } from '@mui/material';

function App() {
  const [items, setItems] = useState([])
  const [isChecked, setChecked] = useState(false)
  const [isLight, setLight] = useState(false)

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    setLight(!isLight);
  };

  function addNote(note) {
    setItems((prevItems) => {
      return [...prevItems, note];
    });
  }

  function deleteNote(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  // useEffect(() => {
  //   const string = localStorage.getItem("key");
  //   const arrRetrieval = JSON.parse(string);

  //   setItems(arrRetrieval);
  // },[]);

  // useEffect(() => {
  //   const string = JSON.stringify(items);
  //   localStorage.setItem("key",string);
  // },[items]);

  // var string = JSON.stringify(items)
  // localStorage.setItem("key",string)
  // var strRetrieval = localStorage.getItem("key")
  // var arrRetrieval = JSON.parse(strRetrieval)
  // var newItems = [...arrRetrieval]

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" height="100vh" direction="column" spacing={1}>
        <div className="bg1" style={{ backgroundImage: isLight ? 'url(images/bg-desktop-light.jpg)' : 'url(images/bg-desktop-dark.jpg)' }}></div>
        <div className="bg2" style={{ backgroundColor: isChecked ? "aliceblue" : "#161A30" }}></div>

        <Grid item>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography sx={{ color: isChecked ? "#444444" : "aliceblue", fontWeight: "700", fontSize: ["1em", "1.5em"], letterSpacing: "0.4em" }}>
              TODO
            </Typography>
            <Checkbox
              icon={<LightModeOutlinedIcon color='secondary' />}
              checkedIcon={<DarkModeOutlinedIcon color='secondary' fontWeight="900" />}
              onChange={handleCheckboxChange}
            />
          </Box>
        </Grid>

        <Grid item>
          <Paper elevation={24}>
            <InputArea
              add={addNote}
              bg={isChecked ? "ivory" : "#444444"}
              check={isChecked}
            />
          </Paper>
        </Grid>

        <Grid item>
          {items.map((todoitem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoitem}
              delete={deleteNote}
            />
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default App