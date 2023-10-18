import { editTask } from "@/services/task";
import { useMutation, useQueryClient } from "react-query";

const useEditTask = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation( editTask,{
    onSuccess: (data) => {
      queryClient.resetQueries(["tasks"]);
    },
  });

  return mutation;
};

export default useEditTask;
