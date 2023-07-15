import { useState, useEffect } from "react";
import Weather from "@/components/common/Weather/Weather";
import NewTask from "../NewTask/NewTask";
import { Grid, Button } from "@material-ui/core";
import { FormatListBulleted, PlaylistAddCheck } from "@material-ui/icons";
import { useAppSelector } from "@/hooks/storeIndex";
import { TaskType } from "@/shared/task.type";
import Task from "../Task/Task";
import styles from "./Home.module.scss";

const Home = () => {


  const [completed, setCompleted] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const tasksList = useAppSelector((stata) => stata.task.tasksList);

  const changeStatus = (status: boolean) => {
    setCompleted(status);
  };

  const activeStyle = (type: boolean) => {
    return completed === type ? styles["active"] : "";
  };

  useEffect(() => {
    setTasks(
      tasksList.filter((task: TaskType) => task.completed === completed)
    );
  }, [completed, tasksList]);

  return (
    <div className={styles.home}>
      <Weather />
      <div className={styles["tasks_newTask"]}>
        <span className="paragraph">My Tasks</span>
        <NewTask />
      </div>

      <Grid container className={styles.tasks}>
        <Grid item xs={12} sm={4} className={styles.status}>
          <Button
            variant="contained"
            onClick={() => changeStatus(false)}
            className={`${activeStyle(false)} ${styles["button_status"]}`}
            fullWidth
          >
            <FormatListBulleted /> Todo
          </Button>
          <br />
          <Button
            variant="contained"
            onClick={() => changeStatus(true)}
            className={`${activeStyle(true)} ${styles["button_status"]}`}
          >
            <PlaylistAddCheck /> Completed
          </Button>
        </Grid>
        <Grid item xs={12} sm={8} className={styles.tasksList}>
          {tasks.map((task) => (
            <Task taskObj={task} key={Math.random()} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
