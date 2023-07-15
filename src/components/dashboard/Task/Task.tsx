import { useState } from "react";
import { TaskType } from "@/shared/task.type";
import {
  ListAlt,
  PlaylistAddCheck,
  EventNote,
  DeleteForever,
  Edit,
} from "@material-ui/icons";
import { Snackbar   } from "@material-ui/core";
import { useAppDispatch } from "@/hooks/storeIndex";
import { deleteTask, updatedTask } from "@/store/Task/taskSlice";
import AddEditModal from "@/components/common/AddEditModal/AddEditModal";
import styles from "./Task.module.scss";

type IProps = {
  taskObj: TaskType;
};

const Task = (props: IProps) => {
  const { taskObj } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<TaskType>();
  const [snackbar, setSnackbar] = useState(false);

  const dispatch = useAppDispatch();


  const handleDeleteTask = (id: number) => {
    setSnackbar(true);
    dispatch(deleteTask({ id })).payload.id;
   
  };

  const handleSelectedItem = (item: TaskType) => {
    handleOpenModal();
    setSelectedItem(item);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const onSubmit = (values: TaskType) => {
    dispatch(updatedTask(values));
    
  };
console.log(snackbar)
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
            onClick={() => handleSelectedItem(taskObj)}
          />

          <DeleteForever
            className={styles.actionIcon}
            onClick={() => {handleDeleteTask(taskObj.id)}}
          />
        </div>
      </div>
      <AddEditModal
        open={isOpen}
        onClose={handleCloseModal}
        title={"Edit Task"}
        initialValues={selectedItem}
        onSubmit={onSubmit}
      />
      <Snackbar
        open={snackbar}
        onClose={()=>setSnackbar(false)}
        autoHideDuration={6000}
        message={'Delete Task'}
      />
    </>
  );
};
export default Task;
