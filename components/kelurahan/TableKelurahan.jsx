import React from "react";
import { DataGrid } from "@mui/x-data-grid/";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TableKelurahan({
  handleOpenDataKelurahan,
  handleOpenDetailKelurahan,
  handleOpenDialogKelurahan,
  data,
  setCurrentData,
  paginationModel,
  setPaginationModel,
  apiRef,
}) {
  const columns = [
    { field: "Nama_Kelurahan", headerName: "Nama Kelurahan", disableColumnMenu: true, minWidth: 150 },
    { field: "Nama_Kecamatan", headerName: "Nama Kecamatan", disableColumnMenu: true, minWidth: 150 },
    {
      field: "Nama_Kota",
      headerName: "Nama Kota",
      disableColumnMenu: true,
      minWidth: 150,
      flex: 1,
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
                    handleOpenDetailKelurahan();
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
                    handleOpenDataKelurahan();
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
                    handleOpenDialogKelurahan();
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
