import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import { TaskInterface } from "@/shared/task.interface";
import { useForm , Controller} from "react-hook-form";
import useGetAllUsers from "@/components/auth/Hooks/useGetAllUsers";
import { UserInterface } from "@/shared/user.interface";
import { TaskStatus } from "@/shared/taskStatus.enum";

interface TaskFormProps {
  defaultValues?: TaskInterface;
  onSubmit: (data: TaskInterface) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ defaultValues, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TaskInterface>({ defaultValues });

  const { data } = useGetAllUsers();

  return (
    <form id="task_form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth sx={{ marginBottom: "15px" }}>
        <TextField
          id="description"
          label="Task Description"
          multiline
          minRows={6}
          required
          variant="filled"
          {...register("description", { required: true })}
          error={!!errors.description}
        />
      </FormControl>

      <FormControl sx={{ marginBottom: "15px" }} required>
        <InputLabel id="demo-simple-select-label">Task Status</InputLabel>
        <Controller
          name="taskStatus"
          control={control}
          defaultValue={defaultValues?.taskStatus}
          render={({ field }) => (
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={field.value}
              onChange={field.onChange}
              label="Task Status"
              sx={{ width: "160px" }}
            >
              {Object.keys(TaskStatus)?.map((item) => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>

      <FormControl fullWidth required>
        <InputLabel id="demo-simple-select-label">Assignee</InputLabel>
        <Controller
          name="userId"
          control={control}
          defaultValue={defaultValues?.userId}
          render={({ field }) => (
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              label="Assignee"
              value={field.value}
              onChange={field.onChange}
              required
              variant="filled"
            >
              {data.length > 0 &&
                data?.map((user: UserInterface, index: number) => (
                  <MenuItem value={user.id} key={index}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        alt="avatar"
                        src={user.avatar}
                        sx={{ marginRight: "7px" }}
                      />
                      <Typography>
                        {`${user.firstName} ${user.lastName}`}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
            </Select>
          )}
        />
      </FormControl>
    </form>
  );
};

export default TaskForm;
