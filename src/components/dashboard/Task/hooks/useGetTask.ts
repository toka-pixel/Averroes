import { getTask } from "@/services/task";
import { useQuery } from "react-query";



const useGetTask = () => {
  const result = useQuery(["tasks"], () => getTask, {
    select: (data:any) => data?.data,
  });

  return result;
};

export default useGetTask;
