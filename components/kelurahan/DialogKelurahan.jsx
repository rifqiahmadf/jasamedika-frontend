import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DialogKelurahan({
  open,
  handleClose,
  currentData,
  handleDeleteKelurahan,
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
          {"Hapus data kelurahan?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{`Anda akan menghapus modul ${currentData?.Nama_Kelurahan}`}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Batal</Button>
          <Button
            onClick={() => {
              handleDeleteKelurahan(currentData?.id);
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
