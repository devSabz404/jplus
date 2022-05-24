import * as React from "react";
import { makeStyles } from "@mui/styles";
import Navbar from "../../components/Navbar";
import lightTheme from "../../styles/theme/lightTheme";
import { Grid } from "@mui/material";
import SideBar from "../../components/SideBar";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import excuteQuery from "../../lib/db";
import Link from "next/link";

import { useRouter } from "next/router";
import axios from "axios";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles(() => ({
  right: {
    [lightTheme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  fab: {
    position: "fixed",
    bottom: 50,
    right: 50,
  },
}));

export default function App({covera}) {
  const router = useRouter();
  
 
  const columns = [
    { field: "id", headerName: "#", width: 10 },
    { field: "underwriter", headerName: "Name", width: 330 },
    { field: "email", headerName: "Email", width: 330 },

    { field: "paybill", headerName: "Paybill", width: 130 },
   
    {
      field: "edit",
      headerName: "Edit",
      width: 70,

      renderCell: (params) => {
        return (
          <Button>
            {" "}
            <Link
              href={{ pathname: "under/[id]", query: { id: params.row.id } }}
            >
              edit
            </Link>{" "}
          </Button>
        );
      },
    },

    // {
    //   field: "delete",
    //   headerName: "Delete",
    //   width: 70,

    //   renderCell: (params) => {
    //     const onClick = async (e) => {
    //       e.stopPropagation(); // don't select this row after clicking
    //       const info = params.row.id;
    //       const data = { info };

    //       const res = await axios.post("/api/product/delete", data);
    //       if (res.status == 200) {
    //         router.push("/dashboard/products");
    //       } else {
    //         alert(Alleady);
    //       }
    //     };

    //     return (
    //       <Button onClick={onClick}>
    //         <DeleteIcon />
    //       </Button>
    //     );
    //   },
    // },
  ];

  const rows = covera.map((item) => ({
    id: item.ID,
    underwriter: item.Name,
    email: item.EMAIL_ADDRESS,
    paybill: item.paybill,
   
  }));

  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <SideBar />
        </Grid>
        <Grid item sm={9} xs={10}>
          <div style={{ height: 700, width: "100%", marginTop: 80 }}>
            
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={40}
              rowsPerPageOptions={[7]}
              checkboxSelection
            />
          </div>
        </Grid>
        <Grid item sm={1} className={classes.right}></Grid>
      </Grid>
    </>
  );
}

export async function getStaticProps() {
    const cover = await excuteQuery({
       query:"SELECT * FROM `itbl_underwriters`"
      });
   
      let covera = JSON.parse(JSON.stringify(cover));
      return {
       props: {covera}
     };
   }














