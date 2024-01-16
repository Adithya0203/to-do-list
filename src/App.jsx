import { useState, useEffect } from 'react'
import "./App.css"
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import InputArea from './components/InputArea';
import ToDoItem from './components/ToDoItem'
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Box, Card } from '@mui/material';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import { DndContext, closestCenter } from "@dnd-kit/core";
// import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";

function App() {
  const [items, setItems] = useState(["item 1", "item 2", "item 3", "item 4"])
  const [isChecked, setChecked] = useState(false)
  const [isLight, setLight] = useState(false)

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    setLight(!isLight);
  };

  const handleDrag = (result) => {
    const { destination, source } = result;

    // If dropped outside a valid drop target, do nothing
    if (!destination) {
      return;
    }

    // Perform the reorder of items
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(source.index, 1);
    updatedItems.splice(destination.index, 0, draggedItem);

    // Update the state with the new order of items
    setItems(updatedItems);
  };
  // }

  function addNote(note) {
    setItems((prevItems) => {
      return [...prevItems, note];
    });
  }

  function deleteNote(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" height="100vh" direction="column" spacing={1}>
        <div className="bg1" style={{ backgroundImage: isLight ? 'url(images/bg-desktop-light.jpg)' : 'url(images/bg-desktop-dark.jpg)' }}></div>
        <div className="bg2" style={{ backgroundColor: isChecked ? "aliceblue" : "#161A30" }}></div>

        <Grid item>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography sx={{ color: isChecked ? "#444444" : "aliceblue", fontWeight: "700", fontSize: ["1em", "1.5em"], letterSpacing: "0.4em" }}>
              TODO
            </Typography>
            <Checkbox
              icon={<LightModeOutlinedIcon color='secondary' />}
              checkedIcon={<DarkModeOutlinedIcon color='secondary' fontWeight="900" />}
              onChange={handleCheckboxChange}
            />
          </Box>
        </Grid>

        <Grid item>
          <Paper elevation={24}>
            <InputArea
              add={addNote}
              bg={isChecked ? "ivory" : "#444444"}
              check={isChecked}
            />
          </Paper>
        </Grid>

        <Grid item>
          <DragDropContext onDragEnd={handleDrag}>
            <Droppable droppableId='todos'>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {items.map((todoitem, index) => (
                    <Draggable key={index} draggableId={index} index={index}>
                      {(provided) => (
                        <ToDoItem
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          key={index}
                          id={index}
                          text={todoitem}
                          delete={deleteNote}
                          check={isChecked}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Grid>
      </Grid>
    </>
  )
}

export default App