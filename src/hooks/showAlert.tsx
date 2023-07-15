import Swal from "sweetalert2";

export function useSweetAlert() {
  const showAlert = (title: string) => {
    return Swal.fire({
      title,
    });
  };

  return { showAlert };
}
