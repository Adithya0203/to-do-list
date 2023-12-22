import React from 'react'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';

const InputArea = () => {
  return (
    <div>
        <TextField
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" aria-label="add">
                      <AddOutlinedIcon fontSize="large" color="secondary" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            inputProps={{
                style: {
                    color: 'white',
                    '&::placeholder': {
                        color: 'white',
                        opcaity:1,
                    },
                },
            }}
            placeholder="Create a new todo..."
            sx={{ backgroundColor: "#444444", margin: "0", color: "white" }}
        />
    </div>
  )
}

export default InputArea