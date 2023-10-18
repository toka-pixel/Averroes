import { TaskInterface } from "@/shared/task.interface";
import { ListAlt, DeleteForever, Edit } from "@mui/icons-material";
import SharedModal from "@/components/common/SharedModal/SharedModal";
import TaskForm from "./TaskForm";
import styles from "./Task.module.scss";
import { useModal } from "@/components/common/SharedModal/hooks/useModal";
import { showNotification } from "@/utils/utils";
import {
  Typography,
  Select,
  MenuItem,
  SelectChangeEvent,
  Zoom,
} from "@mui/material";
import useDeleteTask from "../hooks/useDeleteTask";
import useEditTask from "../hooks/useEditTask";
import { TaskStatus } from "@/shared/taskStatus.enum";
import { useTheme } from "@mui/material";
import { useState } from "react";

type TaskProps = {
  task: TaskInterface;
};

const Task: React.FC<TaskProps> = ({ task }) => {
  const theme = useTheme();

  const { isModalOpen, closeModal, openModal } = useModal<
    "delete_Task" | "edit_Task"
  >();

  const [isShown, setIsShown] = useState(false);

  const { mutateAsync: deleteTask } = useDeleteTask();
  const { mutateAsync: editTask } = useEditTask();

  const handleDeleteTask = (id: string) => {
    deleteTask({ userId: task.userId, id: task.id }).then(() => {
      closeModal();
      showNotification("Delete Task", "success");
    });
  };

  const onSubmitUpdateTask = (values: TaskInterface) => {
    editTask(values).then(() => {
      closeModal();
      showNotification("Update Task", "success");
    });
  };

  const handleTaskStatus = (e: SelectChangeEvent) => {
    editTask({
      ...task,
      taskStatus: e.target.value as TaskStatus,
    });
  };

  return (
    <>
      <div
        className={styles.task}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <div className={styles.data}>
          <Typography
            sx={{ display: "flex", alignItems: "center", fontSize: "17px" }}
          >
            <ListAlt className={styles.list} sx={{ mr: 1 }} />
            {task?.description}

            <Zoom in={isShown}>
              <Edit
                onClick={() => {
                  openModal("edit_Task");
                }}
                sx={{ ml: 2, color: "", fontSize: "17px", cursor: "pointer" }}
              />
            </Zoom>
          </Typography>
        </div>
        <div className={styles.actions}>
          <Select
            value={task.taskStatus}
            defaultValue={task.taskStatus}
            onChange={handleTaskStatus}
            sx={{
              width: "115px",
              height: "24px",
              fontSize: "14px",
              bgcolor: theme.palette.grey[200],
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
            }}
          >
            {Object.keys(TaskStatus)?.map((item) => (
              <MenuItem
                value={item}
                key={item}
              >
                {item}
              </MenuItem>
            ))}
          </Select>

          <DeleteForever
            sx={{ ml: 2, color: "red", fontSize: "17px", cursor: "pointer" }}
            onClick={() => {
              openModal("delete_Task");
            }}
          />
        </div>
      </div>

      <SharedModal
        open={isModalOpen("edit_Task")}
        onClose={closeModal}
        onCancel={closeModal}
        onSubmit={() => {}}
        modal={{
          title: "Edit Task",
          closeButton: {
            label: "Cancel",
            form: "task_form",
          },
          submitButton: {
            label: "Edit",
            type: "submit",
            variant: "contained",
            color: "primary",
            form: "task_form",
          },
        }}
      >
        <TaskForm onSubmit={onSubmitUpdateTask} defaultValues={task} />
      </SharedModal>

      <SharedModal
        open={isModalOpen("delete_Task")}
        onClose={closeModal}
        onCancel={closeModal}
        onSubmit={() => handleDeleteTask(task.id)}
        modal={{
          title: "Delete Task",
          closeButton: {
            label: "Cancel",
            form: "task_form",
          },
          submitButton: {
            label: "Delete",
            type: "submit",
            variant: "contained",
            color: "error",
            form: "task_form",
          },
        }}
      >
        <Typography>Are you sure you want to delete Task?</Typography>
      </SharedModal>
    </>
  );
};
export default Task;
