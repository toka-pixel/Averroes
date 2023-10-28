import { getAllUsers } from "@/services/user";
import { useQuery } from "react-query";


const useGetAllUsers = () => {
  const query = useQuery(["users"], getAllUsers, {
    select: (data) => data?.data,
  });

  return query;
};

export default useGetAllUsers;
