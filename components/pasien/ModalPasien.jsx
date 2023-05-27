import React from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Fade } from "@mui/material";

export default function ModalPasien({
  open,
  handleClose,
  currentData,
  fetchData,
}) {
  const [formData, setFormData] = React.useState({});
  const [dataKelurahan, setDataKelurahan] = React.useState({});

  const fetchDataKelurahan = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/kelurahan");
      const jsonData = await response.json();
      setDataKelurahan(jsonData);
      setFilteredData(jsonData);
      setSearchText("");
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    fetchDataKelurahan();
  }, []);

  const handleSavePasien = async () => {
    try {
      if (currentData) {
        await fetch(`http://localhost:8000/api/pasien/${formData?.ID_Pasien}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      } else {
        await fetch("http://localhost:8000/api/pasien", {
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
            title={`${currentData ? "Ubah" : "Tambah"} Data Pasien`}
          />
          <Divider />
          <CardContent>
            <TextField
              label="Nama Pasien"
              margin="dense"
              fullWidth
              value={formData?.Nama_Pasien || ""}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  Nama_Pasien: event.target.value,
                });
              }}
            />
            <TextField
              label="Jenis Kelamin"
              margin="dense"
              fullWidth
              value={formData?.Jenis_Kelamin || ""}
              onChange={(event) => {
                setFormData({ ...formData, Jenis_Kelamin: event.target.value });
              }}
            />
            <TextField
              label="Tanggal Lahir"
              margin="dense"
              fullWidth
              value={formData?.Tanggal_Lahir || ""}
              onChange={(event) => {
                setFormData({ ...formData, Tanggal_Lahir: event.target.value });
              }}
            />
            <TextField
              label="Nomor Telepon"
              margin="dense"
              fullWidth
              value={formData?.No_Telepon || ""}
              onChange={(event) => {
                setFormData({ ...formData, No_Telepon: event.target.value });
              }}
            />
            <TextField
              label="Alamat"
              margin="dense"
              fullWidth
              value={formData?.Alamat || ""}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  Alamat: event.target.value,
                });
              }}
            />
            <TextField
              label="RT"
              margin="dense"
              fullWidth
              value={formData?.RT || ""}
              onChange={(event) => {
                setFormData({ ...formData, RT: event.target.value });
              }}
            />
            <TextField
              label="RW"
              margin="dense"
              fullWidth
              value={formData?.RW || ""}
              onChange={(event) => {
                setFormData({ ...formData, RW: event.target.value });
              }}
            />
            <TextField
              label="Kelurahan"
              margin="dense"
              fullWidth
              value={formData?.kelurahan_id || ""}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  kelurahan_id: parseInt(event.target.value),
                });
              }}
            />
          </CardContent>
          <Divider />
          <CardActions style={{ justifyContent: "flex-end" }}>
            <Button color="primary" onClick={handleClose}>
              Batal
            </Button>
            <Button color="primary" onClick={handleSavePasien}>
              Simpan
            </Button>
          </CardActions>
        </Card>
      </Fade>
    </Modal>
  );
}
