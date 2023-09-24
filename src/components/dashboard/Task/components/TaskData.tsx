import React from "react";
import { Grid } from "@mui/material";
import { TaskInterface } from "@/shared/task.interface";
import Task from "./Task";

interface TasksProps {
  tasks: TaskInterface[];
}

const TaskData: React.FC<TasksProps> = ({ tasks }) => {
  return (
    <Grid item xs={12} sm={8}>
      {tasks.map((task) => (
        <Task taskObj={task} key={task.id} />
      ))}
    </Grid>
  );
};

export default TaskData;
