import { addUser } from "@/services/user";
import { useMutation, useQueryClient } from "react-query";

const useAddUser = () => {
  const client = useQueryClient();

  const mutation = useMutation(addUser, {
    onSuccess: () => client.resetQueries(["users"]),
  });

  return mutation;
};

export default useAddUser;
