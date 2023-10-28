import { AddCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
import { TaskInterface } from "@/shared/task.interface";
import SharedModal from "@/components/common/SharedModal/SharedModal";
import TaskForm from "./TaskForm";
import { useModal } from "@/components/common/SharedModal/hooks/useModal";
import { showNotification } from "@/utils/utils";
import useAddTask from "../hooks/useAddTask";

const NewTask = () => {
  const { isModalOpen, closeModal, openModal } = useModal<"add_Task">();

  const { mutateAsync:addTask } = useAddTask();

  const handleSubmit = (values: TaskInterface) => {
    addTask(values).then(() => {
      closeModal();
      showNotification("Add New Task", "success");
    });
  };

  return (
    <div>
      <Button
        onClick={() => openModal("add_Task")}
        variant="contained"
      >
        create new task  <AddCircle  sx={{marginLeft:'5px'}} />
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
            color: "primary",
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
