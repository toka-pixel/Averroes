import { getTasksOfUser } from "@/services/task";
import { useQuery } from "react-query";

const useGetTasksOfUser = (userId:string) => {
  const result = useQuery(["tasks", userId], () => getTasksOfUser(userId), {
    enabled: !!userId,
    select: (data) => data?.data,
  });

  return result;
};

export default useGetTasksOfUser;
