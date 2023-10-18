
import { TaskStatus } from "./taskStatus.enum";

export interface TaskInterface {
  description: string;
  id: string,
  userId:string,
  taskStatus:TaskStatus
}
