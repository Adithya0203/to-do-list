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
import { Box } from '@mui/material';
// import dImg from "../public/bg-desktop-dark.jpg"
// import lImg from "../src/assets/images/bg-desktop-light.jpg"

function App() {
  const[items,setItems] = useState([])
  const [isChecked, setChecked] = useState(false)
  const [isLight, setLight] = useState(false)

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    setLight(!isLight);
  };

  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      setContainerHeight(windowHeight);
    };

    handleResize(); // Set initial height
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const dImg = 'url("./src/assets/images/bg-desktop-dark.jpg")'
  // const lImg = 'url("./src/assets/images/bg-desktop-light.jpg")'

  function addNote(note){
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

        <Grid item xs={12} sm={8} md={6} lg={4} sx={{flexShrink:"1"}}>
          <Paper elevation={24} sx={{overflow:"hidden"}}>
            <div>
              {items.map((todoitem,index)=>(
                <ToDoItem
                  key={index}
                  id={index}
                  text={todoitem}
                  delete={deleteNote}
                  check={isChecked}
                />
                ))}
            </div>
          </Paper>
        </Grid>
      </Grid>
  )
}

export default App