import { useEffect, ReactNode, useRef } from "react";
import {
  Modal,
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  ModalProps,
  ButtonProps,
  Button,
  DialogActions,
} from "@mui/material";

import { CloseOutlined } from "@mui/icons-material";

const SharedModal = ({
  onClose,
  onSubmit,
  onCancel,
  modal,
  children,
  hideCloseIcon = false,
  ...props
}: GenericModalProps) => {
  const {
    title,
    closeButton = { label: "Cancel" },
    submitButton = { label: "Submit" },
  } = modal;

  const { label: submitButtonLabel, ...submitButtonProps } = submitButton;
  const { label: closeButtonLabel, ...closeButtonProps } = closeButton;
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        event.key === "Enter" &&
        submitButtonRef.current &&
        submitButtonRef.current.disabled === false
      ) {
        submitButtonRef.current.click();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <Box>
      <Modal
        onClose={onClose}
        {...props}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal">
          <AppBar className="appBar">
            <Toolbar style={{ justifyContent: "space-between", padding: 0 }}>
              <Typography variant="h6">{title}</Typography>

              <IconButton onClick={onClose}>
                <CloseOutlined />
              </IconButton>
            </Toolbar>
          </AppBar>

          {children}

          {(onCancel || onSubmit) && (
            <DialogActions
              sx={{
                justifyContent: "end !important",
                columnGap: 1,
                rowGap: 1,
                flexWrap: "wrap",
                px: 0,
                pb: 0,
                pt: "30px",
              }}
            >
              {onCancel && (
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={onClose}
                  {...closeButtonProps}
                  sx={{ m: "0px !important", ...closeButtonProps.sx }}
                >
                  {closeButtonLabel}
                </Button>
              )}

              {onSubmit && (
                <Button
                  ref={submitButtonRef}
                  variant="contained"
                  color="primary"
                  {...submitButtonProps}
                  onClick={onSubmit}
                >
                  {submitButtonLabel}
                </Button>
              )}
            </DialogActions>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default SharedModal;

export type GenericModalProps = Omit<ModalProps, "onClose" | "onSubmit"> & {
  modal: {
    title: string | ReactNode;
    subTitle?: string;
    submitButton?: ButtonProps & {
      label: string;
    };
    closeButton?: ButtonProps & {
      label: string;
    };
  };
  onClose: () => void;
  onSubmit?: () => void;
  onCancel?: () => void;
  hideCloseIcon?: boolean;
};
