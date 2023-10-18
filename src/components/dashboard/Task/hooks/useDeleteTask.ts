import { deleteTask } from "@/services/task";
import { useMutation, useQueryClient } from "react-query";

const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteTask, {
    onSuccess: () => {
      queryClient.resetQueries(["tasks"]);
    },
  });

  return mutation;
};

export default useDeleteTask;
