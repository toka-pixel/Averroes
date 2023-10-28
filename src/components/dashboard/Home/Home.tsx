import { useState, useEffect } from "react";
import Weather from "@/components/common/Weather/Weather";
import NewTask from "../Task/components/NewTask";
import { Grid,  Box } from "@mui/material";
import { useAppSelector } from "@/hooks/storeIndex";
import { TaskInterface } from "@/shared/task.interface";
import TaskData from "../Task/components/TaskData";
import ActiveUsers from "../ActiveUsers/ActiveUsers";
import SearchInput from "@/components/common/SearchInput/SearchInput";
import styles from "./Home.module.scss";
import Filter from "../Filter/Filter";

const Home = () => {

  const [tasksList, setTasksList] = useState<TaskInterface[]>([]);

  const { tasks } = useAppSelector((state) => state.user);
  const { taskStatusFilter } = useAppSelector((state) => state.filter);

  useEffect(() => {
    setTasksList(tasks);
  }, [tasks]);

  const taskStatusChange = (filteredTasks: Array<TaskInterface>) => {
    if (taskStatusFilter.length > 0) {
      const results = filteredTasks.filter((task) =>
        taskStatusFilter.includes(task.taskStatus)
      );
      return results;
    }
  };

  useEffect(() => {
    const res = taskStatusChange(tasks);
    res ? setTasksList(res) : setTasksList(tasks);
  }, [taskStatusFilter]);

  // useEffect(() => {
  //   setTasksList(() =>
  //     Array.from(tasksMap.values()).reduce((result, currentArray) => {
  //       return result.concat(currentArray);
  //     }, [])
  //   );
  // }, [tasksMap]);

  // const changeStatus = (status: string) => {
  //   setTaskStatus(status);
  //   const results = tasks.filter((task) => task.taskStatus === status);
  //   setTasksList(results);
  // };

  // const activeStyle = (status: string) => {
  //   return taskStatus === status ? styles["active"] : styles["not_active"];
  // };

  const handleSearchInputChange = (inputValue: string) => {
    if (inputValue.trim() !== "") {
      const results = tasks.filter((task) =>
        task.description.toLowerCase().startsWith(inputValue.toLowerCase())
      );
      const res = taskStatusChange(results);
      res ? setTasksList(res) : setTasksList(results);
    } else {
      const res = taskStatusChange(tasks);
      res ? setTasksList(res) : setTasksList(tasks);
    }
  };

  return (
    <div className={styles.home}>
      <Weather />
      <div className={styles["tasks_newTask"]}>
        <span className="paragraph">All Tasks</span>
        <NewTask />
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className={styles.tasks}
      >
        <Grid item xs={12} sm={3}>
          {/* <Button
            variant="contained"
            onClick={() => changeStatus(TaskStatus.Todo)}
            className={`${activeStyle(TaskStatus.Todo)} ${
              styles["button_status"]
            }`}
            fullWidth
          >
            <FormatListBulleted /> Todo
          </Button>
          <br />
          <Button
            variant="contained"
            onClick={() => changeStatus(TaskStatus.Completed)}
            className={`${activeStyle(TaskStatus.Completed)} ${
              styles["button_status"]
            }`}
          >
            <PlaylistAddCheck /> Completed
          </Button> */}
          <Filter />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <SearchInput onSearchInputChange={handleSearchInputChange} />
            <ActiveUsers /> 
          </Box>
          <br />
          <TaskData tasks={tasksList} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
