import React, { useRef, useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ToDoItem = (props) => {
    // const draggedNote = useRef(0)
    // const draggedOverNote = useRef(0)

    // function handleSort(){
    //     const noteItem = props.notes
    //     const notes1 = [...noteItem]
    //     const temp = notes1[draggedNote.current]
    //     notes1[draggedNote.current] = notes1[draggedOverNote.current]
    //     notes1[draggedOverNote.current] = temp
    //     props.noteset(noteItem)
    // }
    const [isChecked, setChecked] = useState(false);
  
    const handleCheckboxChange = () => {
      setChecked(!isChecked);
    };  

    return (
        <div className="note"
            // draggable
            // onDragStart={()=> (draggedNote.current = props.index)}
            // onDragEnter={()=>(draggedOverNote.current = props.index)}
            // onDragEnd={handleSort}
            // onDragOver={(e) => e.preventDefault()}
            style={{textDecoration: isChecked ? "line-through" : "none",textTransform:"uppercase"}}
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