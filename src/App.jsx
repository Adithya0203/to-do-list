import { useState } from 'react'
import "./App.css"
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';

function App() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div className="app">
      <div className="bg1"> </div>
      
      <div className="bg2"> </div>
      
      <div className="content">
        <Grid display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100dvh" color="white">
            <Typography variant="body1">
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
              quasi quidem quibusdam.
            </Typography>
          <Card raised>
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" aria-label="search">
                      <AddOutlinedIcon fontSize='large' color='secondary'/>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              placeholder="Create a new todo..."
              InputLabelProps={{
                children: <span style={{color:'white',fontWeight:"900"}}>Create a new todo...</span>,
              }}
              sx={{backgroundColor:"#9DB2BF",margin:"0"}}
            />
          </Card>
        </Grid>
      </div>
    </div>
  )
}

export default App