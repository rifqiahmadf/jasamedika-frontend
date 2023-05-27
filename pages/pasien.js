import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import { useGridApiRef } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";

import SimpleNavigation from "@/components/SimpleNavigation";
import TablePasien from "@/components/pasien/TablePasien";
import ModalPasien from "@/components/pasien/ModalPasien";
import DetailPasien from "@/components/pasien/DetailPasien";
import DialogPasien from "@/components/pasien/DialogPasien";

export default function Page() {
  const [openDataPasien, setOpenDataPasien] = React.useState(false);
  const [openDetailPasien, setOpenDetailPasien] = React.useState(false);
  const [openDialogPasien, setOpenDialogPasien] = React.useState(false);
  const [currentData, setCurrentData] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 10,
    page: 0,
  });

  const handleOpenDataPasien = () => setOpenDataPasien(true);
  const handleCloseDataPasien = () => {
    setOpenDataPasien(false);
    setCurrentData(false);
  };
  const handleOpenDetailPasien = () => setOpenDetailPasien(true);
  const handleCloseDetailPasien = () => {
    setOpenDetailPasien(false);
    setCurrentData(false);
  };
  const handleOpenDialogPasien = () => setOpenDialogPasien(true);
  const handleCloseDialogPasien = () => {
    setOpenDialogPasien(false);
    setCurrentData(false);
  };
  const handleSearch = () => {
    console.log(searchText);
  };
  const handleDeletePasien = async (id) => {
    try {
      await fetch(`http://localhost:8000/api/pasien/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log("Error deleting data:", error);
    } finally {
      fetchData();
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/pasien");
      const jsonData = await response.json();
      setData(jsonData);
      setFilteredData(jsonData);
      setSearchText("");
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    setFilteredData(
      data.filter((item) => {
        return (
          item.Nama_Pasien.toLowerCase().indexOf(
            searchText.toLocaleLowerCase()
          ) !== -1
        );
      })
    );
    setPaginationModel({ ...paginationModel, page: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const apiRef = useGridApiRef();
  const handleDownloadData = () => apiRef.current.exportDataAsCsv();

  return (
    <>
      <Head>
        <title>Jasa Medika - Pasien</title>
      </Head>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid
          item
          container
          xs={12}
          md={3}
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          <FormControl
            size="small"
            variant="outlined"
            sx={{ width: { xs: "100%", sm: "50%", md: "auto" } }}
          >
            <InputLabel htmlFor="outlined-cari">Cari Data</InputLabel>
            <OutlinedInput
              id="outlined-cari"
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Cari Data"
            />
          </FormControl>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={8}
          lg={6}
          spacing={1}
          justifyContent="flex-end"
        >
          <Grid
            item
            container
            xs={12}
            md={8}
            justifyContent={{ xs: "center", md: "flex-end" }}
          >
            <Button
              onClick={handleDownloadData}
              disableElevation
              startIcon={<DownloadIcon />}
              variant="contained"
              sx={{ width: { xs: "100%", sm: "50%", md: "auto" } }}
            >
              Unduh Data
            </Button>
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={4}
            lg={4}
            xl={3}
            justifyContent={{ xs: "center", md: "flex-end" }}
          >
            <Button
              onClick={handleOpenDataPasien}
              disableElevation
              startIcon={<AddIcon />}
              variant="contained"
              sx={{ width: { xs: "100%", sm: "50%", md: "auto" } }}
            >
              Tambah Data
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container mt={1}>
        <Grid item xs={12}>
          <Box sx={{ height: "75vh" }}>
            <TablePasien
              handleOpenDataPasien={handleOpenDataPasien}
              handleOpenDetailPasien={handleOpenDetailPasien}
              handleOpenDialogPasien={handleOpenDialogPasien}
              data={filteredData}
              setCurrentData={setCurrentData}
              paginationModel={paginationModel}
              setPaginationModel={setPaginationModel}
              apiRef={apiRef}
            />
          </Box>
        </Grid>
      </Grid>
      <ModalPasien
        open={openDataPasien}
        handleClose={handleCloseDataPasien}
        currentData={currentData}
        fetchData={fetchData}
      />
      <DetailPasien
        open={openDetailPasien}
        handleClose={handleCloseDetailPasien}
        currentData={currentData}
      />
      <DialogPasien
        open={openDialogPasien}
        handleClose={handleCloseDialogPasien}
        currentData={currentData}
        handleDeletePasien={handleDeletePasien}
        fetchData={fetchData}
      />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <SimpleNavigation currentMenu={"pasien"}>{page}</SimpleNavigation>;
};
