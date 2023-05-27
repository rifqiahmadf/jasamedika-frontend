import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Paper from "@mui/material/Paper";
import { Typography, Grid, Divider, Stack, Item } from "@mui/material";

import SimpleNavigation from '@/components/SimpleNavigation';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Jasa Medika - Dashboard</title>
      </Head>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={8}>
          <Paper variant="outlined" sx={{ overflow: "auto", height: "300px" }}>
            <Typography variant="h6" color="primary" textAlign="center">
              Jadwal Diklat
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper variant="outlined" sx={{ overflow: "auto", height: "300px" }}>
            <Typography variant="h6" color="primary" textAlign="center">
              Permintaan Persetujuan
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={8}>
          <Paper
            variant="outlined"
            sx={{ overflow: "auto", height: "300px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
          >
            <Typography variant="h6" color="primary" textAlign="center">
              Nilai Siswa
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper variant="outlined" sx={{ overflow: "auto", height: "300px" }}>
            <Typography variant="h6" color="primary" textAlign="center">
              Menu Pintas
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <SimpleNavigation currentMenu={"dashboard"}>{page}</SimpleNavigation>;
};