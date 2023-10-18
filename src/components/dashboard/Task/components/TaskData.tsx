import React from "react";
import { Grid, Box, Typography, Collapse ,List} from "@mui/material";
import { TaskInterface } from "@/shared/task.interface";
import { TransitionGroup,  } from "react-transition-group";
import Task from "./Task";
import Image from "next/image";

interface TasksProps {
  tasks: TaskInterface[];
}

const TaskData: React.FC<TasksProps> = ({ tasks }) => {
  return tasks?.length > 0 ? (
    <Grid item xs={12} sm={8} sx={{ display: "contents" }}>
      <List>
        <TransitionGroup>
          {tasks.map((task) => (
            <Collapse key={task.id}>
              <Task task={task} />
            </Collapse>
          ))}
        </TransitionGroup>
      </List>
    </Grid>
  ) : (
    <Box sx={{ margin: "auto", textAlign: "center" }}>
      <Image src="/imgs/empty.png" alt="empty" width={300} height={200} />
      <Typography>There are no tasks yet</Typography>
    </Box>
  );
};

export default TaskData;
