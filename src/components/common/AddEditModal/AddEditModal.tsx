import { useState, useEffect } from "react";
import {
  Checkbox,
  Button,
  Modal,
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  FormControlLabel,
  FormControl,
  Snackbar,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

type IProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  initialValues: any;
  onSubmit: Function;
};

const AddEditModal = (props: IProps) => {
  const { open, onClose, title, initialValues, onSubmit } = props;

  const [values, setValues] = useState(initialValues || {});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    setValues(initialValues || {});
  }, [initialValues]);

  const handleChange = (event: any) => {
    const { name, value, checked } = event.target;

    setValues({
      ...values,
      [name]: name === "completed" ? checked : value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSubmit(values);
    setOpenSnackbar(true);
    onClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal">
          <AppBar className="appBar">
            <Toolbar style={{ justifyContent: "space-between" }}>
              <Typography variant="h6">{title}</Typography>

              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <TextField
                id="description"
                label="Task Description"
                multiline
                minRows={6}
                variant="filled"
                name="description"
                required
                onChange={handleChange}
                value={values?.description || ""}
              />
            </FormControl>
            <br />
            <br />
            <FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    name="completed"
                    onChange={handleChange}
                    value={values?.completed || false}
                    checked={values?.completed ? true : false}
                  />
                }
                label="Completed"
              />
            </FormControl>
            <br />
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                className="purpleButton"
              >
                save
              </Button>

              <Button
                onClick={onClose}
                variant="contained"
                className="yellowButton"
              >
                close
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
      <Snackbar
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        autoHideDuration={9000}
        message={title}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </div>
  );
};

export default AddEditModal;
