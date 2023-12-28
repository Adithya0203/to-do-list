import React, { useRef, useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ToDoItem = (props) => {
    const [isChecked, setChecked] = useState(false);
  
    const handleCheckboxChange = () => {
      setChecked(!isChecked);
    };  

    return (
        <div className="note"
            style={{
                textDecoration: isChecked ? "line-through" : "none",
                color:props.check ? "#444444" : "ivory",
                backgroundColor:props.check ? "ivory" : "#444444",
                textTransform:"uppercase",
                
            }}
        >
            <Checkbox 
                icon={<RadioButtonUncheckedIcon/>}
                checkedIcon={<CheckCircleIcon/>} 
                onClick={handleCheckboxChange}/>
                {props.text}
            <IconButton color='secondary' size='large' onClick={()=>{
                props.delete(props.id)
            }}>
                <CloseIcon/>
            </IconButton>
        </div>
    )
}

export default ToDoItem