import { useState } from 'react'
import "./App.css"
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

function App() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div className="app">
      <div className="bg1">
        
      </div>
      <div className="bg2">

      </div>
      <div className="content">
        <Grid placeItems="center">
          <Card>
            
          </Card>
        </Grid>
      </div>
    </div>
  )
}

export default App
