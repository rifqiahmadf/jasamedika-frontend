import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export default function DetailPasien({ open, handleClose, currentData }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Card
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "40vw",
        }}
      >
        <CardHeader title="Detail Pasien" />
        <Divider />
        <CardContent>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell align="left">ID Pasien</TableCell>
                  <TableCell align="left">{currentData?.ID_Pasien}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Nama Pasien</TableCell>
                  <TableCell align="left">{currentData?.Nama_Pasien}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Jenis Kelamin</TableCell>
                  <TableCell align="left">
                    {currentData?.Jenis_Kelamin}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Tanggal Lahir</TableCell>
                  <TableCell align="left">
                    {currentData?.Tanggal_Lahir}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Nomor Telepon</TableCell>
                  <TableCell align="left">{currentData?.No_Telepon}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Alamat</TableCell>
                  <TableCell align="left">{currentData?.Alamat}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">RT / RW</TableCell>
                  <TableCell align="left">
                    {currentData?.RT} \ {currentData?.RW}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Kelurahan</TableCell>
                  <TableCell align="left">
                    {currentData?.kelurahan?.Nama_Kelurahan}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Kecamatan</TableCell>
                  <TableCell align="left">
                    {currentData?.kelurahan?.Nama_Kecamatan}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Kota</TableCell>
                  <TableCell align="left">
                    {currentData?.kelurahan?.Nama_Kota}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <Divider />
        <CardActions style={{ justifyContent: "flex-end" }}>
          <Button color="primary" onClick={handleClose}>
            Tutup
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
}
