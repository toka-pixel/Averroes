
import { enqueueSnackbar } from "notistack";

export function showNotification(
  message: string,
  type: "error" | "success" | "warning" | "info"
) {

  enqueueSnackbar(message, {
    variant: type,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  });
  
}
