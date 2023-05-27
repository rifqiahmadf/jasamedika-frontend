import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DialogPasien({
  open,
  handleClose,
  currentData,
  handleDeletePasien,
}) {
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Hapus data pasien?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{`Anda akan menghapus pasien ${currentData?.Nama_Pasien}`}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Batal</Button>
          <Button
            onClick={() => {
              handleDeletePasien(currentData?.ID_Pasien);
              handleClose();
            }}
            autoFocus
          >
            Hapus
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
