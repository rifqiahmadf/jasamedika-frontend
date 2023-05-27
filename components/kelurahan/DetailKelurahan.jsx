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

export default function DetailKelurahan({ open, handleClose, currentData }) {
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
        <CardHeader title="Detail Kelurahan" />
        <Divider />
        <CardContent>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell align="left">ID Kelurahan</TableCell>
                  <TableCell align="left">{currentData?.id}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Nama Kelurahan</TableCell>
                  <TableCell align="left">
                    {currentData?.Nama_Kelurahan}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Nama Kecamatan</TableCell>
                  <TableCell align="left">
                    {currentData?.Nama_Kecamatan}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Nama Kota</TableCell>
                  <TableCell align="left">{currentData?.Nama_Kota}</TableCell>
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
