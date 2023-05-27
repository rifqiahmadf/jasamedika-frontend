import React from "react";
import { DataGrid } from "@mui/x-data-grid/";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TablePasien({
  handleOpenDataPasien,
  handleOpenDetailPasien,
  handleOpenDialogPasien,
  data,
  setCurrentData,
  paginationModel,
  setPaginationModel,
  apiRef,
}) {
  const columns = [
    {
      field: "ID_Pasien",
      headerName: "ID Pasien",
      disableColumnMenu: true,
      minWidth: 150,
    },
    {
      field: "Nama_Pasien",
      headerName: "Nama Pasien",
      disableColumnMenu: true,
      minWidth: 150,
    },
    {
      field: "Jenis_Kelamin",
      headerName: "Jenis Kelamin",
      disableColumnMenu: true,
      minWidth: 150,
    },
    {
      field: "No_Telepon",
      headerName: "Nomor Telepon",
      disableColumnMenu: true,
      minWidth: 150,
    },
    {
      headerName: "Kelurahan",
      disableColumnMenu: true,
      minWidth: 150,
      flex: 1,
      valueGetter: (value) => value.row.kelurahan.Nama_Kelurahan,
    },
    {
      field: "aksi",
      headerName: "Aksi",
      headerAlign: "center",
      align: "center",
      width: 150,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Box sx={{ "& button": { m: 1 } }}>
            <Tooltip title="Lihat Data">
              <span>
                <IconButton
                  aria-label="view"
                  color="primary"
                  size="small"
                  onClick={() => {
                    handleOpenDetailPasien();
                    setCurrentData(params.row);
                  }}
                >
                  <VisibilityIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Ubah Data">
              <span>
                <IconButton
                  aria-label="edit"
                  color="warning"
                  size="small"
                  onClick={() => {
                    handleOpenDataPasien();
                    setCurrentData(params.row);
                  }}
                >
                  <EditIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Hapus Data">
              <span>
                <IconButton
                  aria-label="delete"
                  color="error"
                  size="small"
                  onClick={() => {
                    handleOpenDialogPasien();
                    setCurrentData(params.row);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </span>
            </Tooltip>
          </Box>
        );
      },
    },
  ];
  return (
    <DataGrid
      rows={data}
      columns={columns}
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } },
      }}
      pageSizeOptions={[10, 25, 50]}
      disableSelectionOnClick
      disableRowSelectionOnClick
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      apiRef={apiRef}
    />
  );
}
