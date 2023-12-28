<<<<<<< HEAD
import React, { useState } from 'react'
=======
import React from 'react'
>>>>>>> 569e2a63f9b1add1b32630abe663300fa63a3ef0
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';

<<<<<<< HEAD
const InputArea = (props) => {
    const[note,setNote] = useState("")

    function handleChange(event){
        const newVal = event.target.value
        setNote(newVal)
    }

    return (
        <div>
            <TextField
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton edge="end" aria-label="add"
                        onClick={() => {
                            props.add(note);
                            setNote("");
                        }}>
                            <AddOutlinedIcon fontSize="large" color="secondary" />
                        </IconButton>
                    </InputAdornment>
                    ),
                }}
                inputProps={{
                    style: {
                        color: 'white',
                        '&::placeholder': {
                            color: '#fafafa',
                            opcaity: 1,
                        },
                    },
                }}
                placeholder="Create a new todo..."
                sx={{ backgroundColor: "#444444", margin: "0", color: "white" }}
                onChange={handleChange}
                value={note}
            />
        </div>
    )
=======
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
>>>>>>> 569e2a63f9b1add1b32630abe663300fa63a3ef0
}

export default InputArea