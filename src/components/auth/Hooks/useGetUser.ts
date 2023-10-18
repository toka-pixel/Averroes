import { getUser } from "@/services/user";
import Cookies from "js-cookie";
import { useQuery } from "react-query";

const useGetUser = () => {
  const id:string | any = Cookies.get("tasks-management-userId");

  const result = useQuery(["users"], () => getUser(id), {
    select: (data: any) => data?.data,
    enabled:!!id
  });

  return result;
};

export default useGetUser;
