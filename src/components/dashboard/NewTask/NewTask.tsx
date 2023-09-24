import { AddCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
import { TaskInterface } from "@/shared/task.interface";
import { useAppDispatch } from "@/hooks/storeIndex";
import { newTask } from "@/store/Task/taskSlice";
import SharedModal from "@/components/common/SharedModal/SharedModal";
import TaskForm from "../Task/components/TaskForm";
import { useModal } from "@/components/common/SharedModal/hooks/useModal";
import { showNotification } from "@/utils/utils";

const NewTask = () => {
  const { isModalOpen, closeModal, openModal } = useModal<"add_Task">();

  const dispatch = useAppDispatch();

  const handleSubmit = (values: TaskInterface) => {

    dispatch(
      newTask({
        ...values,
        id: Math.random(),
        date: new Date().toLocaleDateString(),
      })
    );
    closeModal();
    showNotification('Add New Task','success');
  };

  return (
    <div>
      <Button
        onClick={() => openModal("add_Task")}
        variant="contained"
        className="purpleButton"
      >
        create new task <AddCircle />
      </Button>
      <SharedModal
        open={isModalOpen("add_Task")}
        onClose={closeModal}
        onCancel={closeModal}
        onSubmit={() => console.log("add")}
        modal={{
          title: "Add New Task",
          closeButton: {
            label: "Cancel",
            form: "task_form",
          },
          submitButton: {
            label: "Add",
            type: "submit",
            variant: "contained",
            color: "success",
            form: "task_form",
          },
        }}
      >
        <TaskForm onSubmit={handleSubmit} />
      </SharedModal>
    </div>
  );
};

export default NewTask;
