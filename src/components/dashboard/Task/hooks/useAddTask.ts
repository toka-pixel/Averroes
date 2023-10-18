import { addTask } from "@/services/task";
import { useMutation, useQueryClient } from "react-query";

const useAddTask = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(addTask, {
    onSuccess: () => {
      queryClient.resetQueries(["tasks"]);
    },
  });

  return mutation;
};

export default useAddTask;
