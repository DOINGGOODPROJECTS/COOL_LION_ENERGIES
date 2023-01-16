import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import GenerateModalButton from "./GenerateModalButton";
import { Box } from "@mui/material";

const CreateModal = ({
  OpenButton = GenerateModalButton,
  ButtonContent,
  ModalContent,
  ContentProps,
  MakeOpen = false,
  position,
}) => {
  const [open, setOpen] = React.useState(MakeOpen);
  const [positionStyle, setPositiionStyle] = React.useState();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const CenterPosition = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    maxHeight: "80vh",
    overflowY: "scroll !important",
    overflow: "hidden",
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const RigthPosition = {
    position: "absolute",
    top: "0%",
    right: "0%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    maxHeight: "80vh",
    overflowY: "scroll !important",
    overflow: "hidden",
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const LeftPosition = {
    position: "absolute",
    top: "0%",
    left: "0%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    maxHeight: "80vh",
    overflowY: "scroll !important",
    overflow: "hidden",
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const TopPosition = {
    position: "absolute",
    top: "0%",
    left: "0%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    maxHeight: "80vh",
    overflowY: "scroll !important",
    overflow: "hidden",
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const BottomPosition = {
    position: "absolute",
    bottom: "0%",
    left: "0%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    maxHeight: "80vh",
    overflowY: "scroll !important",
    overflow: "hidden",
  };
  React.useEffect(() => {
    if (position === "center") {
      setPositiionStyle(CenterPosition);
    } else if (position === "left") {
      setPositiionStyle(LeftPosition);
    } else if (position === "right") {
      setPositiionStyle(RigthPosition);
    } else if (position === "top") {
      setPositiionStyle(TopPosition);
    } else if (position === "bottom") {
      setPositiionStyle(BottomPosition);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  const ContentButton = <>{ButtonContent}</>;

  return (
    <div>
      <OpenButton handleOpen={handleOpen} content={ContentButton} />
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        disableScrollLock={true}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          zIndex: 10000,
        }}
      >
        <Fade in={open}>
          <Box sx={positionStyle}>
            <ModalContent handleClose={handleClose} {...ContentProps} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CreateModal;
