import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';

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
                        color: props.check ? "black" : "white",
                        '&::placeholder': {
                            color: props.check ? 'black': "fafafa",
                            opcaity: 1,
                        },
                    },
                }}
                placeholder="Create a new todo..."
                sx={{ backgroundColor: props.bg, margin: "0", color: "white" }}
                onChange={handleChange}
                value={note}
            />
        </div>
    )
}

export default InputArea