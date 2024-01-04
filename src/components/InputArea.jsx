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

    function handleKeyPress(event){
        if (event.key == "Enter"){
            props.add(note);
            setNote("");
        }
    }

    return (
        <div>
            <TextField
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
                onKeyDown={handleKeyPress}
            />
        </div>
    )
}

export default InputArea