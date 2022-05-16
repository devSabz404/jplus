import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Navbar from "../../components/Navbar";
import lightTheme from "../../styles/theme/lightTheme";
import { Grid } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import excuteQuery from "../../lib/db";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme) => ({
  right: {
    [lightTheme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Continue({ cookies, owners }) {
 
  const Router = useRouter();

  const [companyName, setComp] = useState();
  const [address, setAdd] = useState();
  const [phone, setphone] = useState();
  const [referall, setRef] = useState();
  const [Ira, setIra] = useState();
  const [Kra, setKra] = useState();
  const [idnumber, setId] = useState();

  const userData = jwtDecode(cookies.OursiteJWT);
  const identity = userData.id;

  const classes = useStyles();

  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let min = dateObj.getMinutes()
  let newdate = month + day + min ;

  const withHyph = `${referall}-${newdate}`;

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('Okss')

    const credentials = {
      companyName,
      address,
      phone,
      Ira,
      Kra,
      idnumber,
      identity,
    };
    const credentials0 = {
      companyName,
      address,
      phone,
      withHyph,
      Ira,
      Kra,
      idnumber,
      referall,
      identity,
    };
    if (!referall) {
      const res = await axios.post("/api/auth/continue", credentials);
      if (res.status == 200) {
        handleLogOut();
      }
    } else {
      for (let i = 0; owners.length > i; i++) {
        if (parseInt(referall) !== parseInt(owners[i].agent_admin)) {
          handleClickz();
        } else if (parseInt(referall) === parseInt(owners[i].agent_admin)) {
          const res = await axios.post("/api/auth/continue0", credentials0);
          if (res.status == 200) {
            handleLogOut();
          } else if (res.status === 400) {
            alert("s not exist");
          }
        }
      }
    }
  };

  const handleLogOut = async () => {
    const user = await axios.get("/api/auth/logout");

    if (user.status === 200) Router.push("/login");
  };

  const [openq, setOpenq] = useState(false);

  const handleClick = () => {
    setOpenq(true);
  };

  const handleCloset = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenq(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="warning"
        onClick={handleCloset}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const [openqz, setOpenqz] = useState(false);

  const handleClickz = () => {
    setOpenqz(true);
  };

  const handleClosetz = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenqz(false);
  };

  const actionz = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="success"
        onClick={handleClosetz}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <Navbar />

      <Grid container>
        <Grid item sm={2} xs={2}></Grid>
        <Grid item sm={7} xs={10}>
          <form
            onSubmit={submitHandler}
            style={{ marginTop: 100 }}
            sx={{ display: "flex", flexWrap: "wrap" }}
          >
            <h1>Complete Registration</h1>
            <div>
              <TextField
                label="Company name"
                sx={{ m: 1, width: "25ch" }}
                id="companyName"
                name="companyName"
                type="text"
                onChange={(e) => setComp(e.target.value)}
                value={companyName}
              />
              <TextField
                label="Phone number"
                sx={{ m: 1, width: "25ch" }}
                id="phone"
                name="phone"
                type="number"
                onChange={(e) => setphone(e.target.value)}
                value={phone}
                pattern="[a-z]{0,9}"
                title="Password should be digits (0 to 9) or alphabets (a to z)."
              />

              <TextField
                label="Referall number"
                sx={{ m: 1, width: "25ch" }}
                id="referall"
                name="referall"
                type="text"
                onChange={(e) => setRef(e.target.value)}
                value={referall}
              />

              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Physical address
                </InputLabel>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  onChange={(e) => setAdd(e.target.value)}
                  value={address}
                  label="Amount"
                />
              </FormControl>
            </div>
            <div>
              <TextField
                label="KRA Pin"
                sx={{ m: 1, width: "25ch" }}
                id="Kra"
                name="Kra"
                type="text"
                onChange={(e) => setKra(e.target.value)}
                value={Kra}
                pattern="[0-9]"
                title="Password should be digits (0 to 9) or alphabets (a to z)."
              />
              <TextField
                label="Identity number"
                sx={{ m: 1, width: "25ch" }}
                id="idnumber"
                name="idnumber"
                type="text"
                onChange={(e) => setId(e.target.value)}
                value={idnumber}
              />
              {referall ? null : (
                <TextField
                  label="IRA license"
                  sx={{ m: 1, width: "25ch" }}
                  id="Ira"
                  name="Ira"
                  type="text"
                  onChange={(e) => setIra(e.target.value)}
                  pattern="[A-Z]{3}[/][0-9]{2}[/][0-9]{5}[/][0-9]{4}$"
                  title="Invlid License"
                />
              )}
            </div>
            <Button type="submit" variant="contained">
              Submit
            </Button>
            <form />
          </form>
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Snackbar
            open={openq}
            autoHideDuration={6000}
            onClose={handleCloset}
            message="Duplicate Product"
            action={action}
          />
          <Snackbar
            open={openqz}
            autoHideDuration={6000}
            onClose={handleClosetz}
            message="Referall deos not exist"
            action={actionz}
          />
        </Grid>
      </Grid>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { req, res } = ctx;
  const { cookies } = req;

  let agentCodes = await excuteQuery({
    query: "SELECT `agent_admin` FROM tbl_user ",
  });

  const owners = JSON.parse(JSON.stringify(agentCodes));

  return { props: { cookies, owners } };
}
