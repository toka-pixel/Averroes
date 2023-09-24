import { TaskInterface } from "@/shared/task.interface";
import {
  ListAlt,
  PlaylistAddCheck,
  EventNote,
  DeleteForever,
  Edit,
} from "@mui/icons-material";
import { useAppDispatch } from "@/hooks/storeIndex";
import { deleteTask, updatedTask } from "@/store/Task/taskSlice";
import SharedModal from "@/components/common/SharedModal/SharedModal";
import TaskForm from "./TaskForm";
import styles from "./Task.module.scss";
import { useModal } from "@/components/common/SharedModal/hooks/useModal";
import { showNotification } from "@/utils/utils";
import { Typography } from "@mui/material";

type IProps = {
  taskObj: TaskInterface;
};

const Task = (props: IProps) => {
  const { taskObj } = props;

  const { isModalOpen, closeModal, openModal } = useModal<
    "delete_Task" | "edit_Task"
  >();

  const dispatch = useAppDispatch();

  const handleDeleteTask = (id: number) => {
    dispatch(deleteTask({ id }));
    closeModal();
    showNotification("Delete Task", "error");
  };

  const onSubmit = (values: TaskInterface) => {
    dispatch(updatedTask(values));
    closeModal();
    showNotification("Update Task", "success");
  };

  return (
    <>
      <div className={styles.task}>
        <div className={styles.data}>
          <ListAlt className={styles.list} />
          <div className={styles.details}>
            <h3 className={styles.description}>{taskObj.description}</h3>
            <p>
              <EventNote className={styles.dataIcon} /> creation date :{" "}
              {taskObj.date}
            </p>
            <p>
              <PlaylistAddCheck className={styles.dataIcon} />
              completed : {taskObj.completed ? "true" : "false"}
            </p>
          </div>
        </div>
        <div className={styles.actions}>
          <Edit
            className={styles.actionIcon}
            onClick={() => {
              openModal("edit_Task");
            }}
          />

          <DeleteForever
            className={styles.actionIcon}
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
            color: "success",
            form: "task_form",
          },
        }}
      >
        <TaskForm onSubmit={onSubmit} defaultValues={taskObj} />
      </SharedModal>

      <SharedModal
        open={isModalOpen("delete_Task")}
        onClose={closeModal}
        onCancel={closeModal}
        onSubmit={() => handleDeleteTask(taskObj.id)}
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
