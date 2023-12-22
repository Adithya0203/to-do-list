import { useState } from 'react'
import "./App.css"
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Typography from '@mui/material/Typography';
import InputArea from './assets/components/InputArea';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Container, Paper } from '@mui/material';

function App() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <Container>
      <div className="bg1"></div>
      <div className="bg2"></div>
      <Grid display="flex" justifyContent="center" alignItems="center" height="100dvh">
        <Card raised="true">
          <InputArea />
        </Card>
      </Grid>
    </Container>
  )
}

export default App