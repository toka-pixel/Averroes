import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";
import { TaskType } from "@/shared/task.type";
import { useAppDispatch } from "@/hooks/storeIndex";
import { newTask } from "@/store/Task/taskSlice";
import AddEditModal from "@/components/common/AddEditModal/AddEditModal";

const NewTask = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  const dispatch = useAppDispatch();

  const handleSubmit = (values: TaskType) => {
    dispatch(
      newTask({
        ...values,
        id: Math.random(),
        date: new Date().toLocaleDateString(),
      })
    );
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" className="purpleButton">
        create new task <AddIcon />
      </Button>

      <AddEditModal
        open={open}
        onClose={handleCloseModal}
        title={"Create New Task"}
        initialValues={{ description: "", completed: false, date: "", id: 1 }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default NewTask;
