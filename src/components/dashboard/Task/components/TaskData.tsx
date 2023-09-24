import React from "react";
import { Grid ,Box, Typography} from "@mui/material";
import { TaskInterface } from "@/shared/task.interface";
import Task from "./Task";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";

interface TasksProps {
  tasks: TaskInterface[];
}

const TaskData: React.FC<TasksProps> = ({ tasks }) => {
  return tasks.length > 0 ? (
    <Grid item xs={12} sm={8}>
      {tasks.map((task) => (
        <Task taskObj={task} key={task.id} />
      ))}
    </Grid>
  ) : (
    <Box sx={{margin:'auto',textAlign:'center'}}>
         <AssignmentLateIcon sx={{ color: 'text.secondary' ,fontSize:'40px'}} />
         <Typography>There are no tasks yet</Typography>
    </Box>
 
  );
};

export default TaskData;
