import React, { useRef, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";

const ToDoItem = (props) => {
    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };

    // const {attributes,listeners,setNodeRef,transform,transition} = useSortable({id:props.id})

    // const style={
    //     transform:CSS.Transform.toString(transform),
    //     transition:CSS.Transition.toString(transition)
    // }

    return (
        <Grid container justifyContent="space-between" alignItems="center" 
        // ref={setNodeRef}
            style={{
                textDecoration: isChecked ? "line-through" : "none", color: props.check ? "#444444" : "ivory", backgroundColor: props.check ? "ivory" : "#444444",
                textTransform: "uppercase", maxWidth: "xs", cursor: "move",
            }}
        >
            <Grid item>
                <Checkbox
                    icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} onClick={handleCheckboxChange}
                />
            </Grid>

            <Grid item>
                <Typography>{props.text}</Typography>
            </Grid>

            <Grid item>
                <IconButton
                    color="secondary" size="large"
                    onClick={() => {
                        props.delete(props.id);
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default ToDoItem;