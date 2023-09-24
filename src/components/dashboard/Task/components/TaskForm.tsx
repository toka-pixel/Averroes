import {
  Checkbox,
  TextField,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { TaskInterface } from "@/shared/task.interface";
import { useForm } from "react-hook-form";

interface TaskFormProps {
  defaultValues?: TaskInterface;
  onSubmit: (data: TaskInterface) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ defaultValues, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskInterface>({ defaultValues });
 
  return (
    <form id="task_form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth>
        <TextField
          id="description"
          label="Task Description"
          multiline
          minRows={6}
          variant="filled"
          required
          {...register("description", { required: true })}
          error={!!errors.description}
        />
      </FormControl>
      <br />
      <br />
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              // checked={defaultValues?.completed ? true : false}
              // value={defaultValues?.completed || false}
              {...register("completed")}
            />
          }
          label="Completed"
        />
      </FormControl>
    </form>
  );
};

export default TaskForm;
