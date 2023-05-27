import React from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Fade } from "@mui/material";

export default function ModalKelurahan({
  open,
  handleClose,
  currentData,
  fetchData,
}) {
  // TODO FETCH FRESH DATA BY ID
  const [formData, setFormData] = React.useState({});

  const handleSaveKelurahan = async () => {
    // TODO ADD API TO SAVE EDIT KELURAHAN
    try {
      if (currentData) {
        await fetch(`http://localhost:8000/api/kelurahan/${formData?.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      } else {
        await fetch("http://localhost:8000/api/kelurahan", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      }
    } catch (error) {
      console.log("Error posting data:", error);
    } finally {
      fetchData();
      handleClose();
    }
  };

  React.useEffect(() => {
    if (currentData) {
      setFormData(currentData);
    } else {
      setFormData({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentData]);

  return (
    <Modal open={open} closeAfterTransition>
      <Fade in={open}>
        <Card
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40vw",
          }}
        >
          <CardHeader
            title={`${currentData ? "Ubah" : "Tambah"} Data Kelurahan`}
          />
          <Divider />
          <CardContent>
            <TextField
              label="Nama Kelurahan"
              margin="dense"
              fullWidth
              value={formData?.Nama_Kelurahan || ""}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  Nama_Kelurahan: event.target.value,
                });
              }}
            />
            <TextField
              label="Nama Kecamatan"
              margin="dense"
              fullWidth
              value={formData?.Nama_Kecamatan || ""}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  Nama_Kecamatan: event.target.value,
                });
              }}
            />
            <TextField
              label="Nama Kota"
              margin="dense"
              fullWidth
              value={formData?.Nama_Kota || ""}
              onChange={(event) => {
                setFormData({ ...formData, Nama_Kota: event.target.value });
              }}
            />
          </CardContent>
          <Divider />
          <CardActions style={{ justifyContent: "flex-end" }}>
            <Button color="primary" onClick={handleClose}>
              Batal
            </Button>
            <Button color="primary" onClick={handleSaveKelurahan}>
              Simpan
            </Button>
          </CardActions>
        </Card>
      </Fade>
    </Modal>
  );
}
