import React from 'react';
import Layout from "../../Layout/Layout";
import DashboardIcon from "../../assets/images/dashboardIcon.svg";
import { useState, useRef, useEffect } from 'react';
import {
  Grid,
  Hidden,
  IconButton,
  useMediaQuery,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Card,
  Input,
  Box,

} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core";
import styles from "./styles";
import userIcon from "../../assets/images/user.svg"



const useStyles = makeStyles((theme) => styles(theme));

function Dashboard() {

  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const custommatchesXL = useMediaQuery("(min-width:1550px)");
  const custommatchesXXL = useMediaQuery("(min-width:1700px)");
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [value, setValue] = React.useState(null);


  return (

    <Layout>
      <Grid item container style={{ padding: "20px" }}>
        <Grid md={6}>
          <Typography className={classes.Heading}><img src={DashboardIcon} />  Payment</Typography>
        </Grid>
        <Grid md={6}>
        </Grid>
      </Grid>


      <Grid item container style={{ padding: "20px" }}>
        <Grid md={4} style={{ padding: "20px" }}>
          <div className="Card1">
            <Grid item container style={{ padding: "80px 50px" }}>
              <Grid md={6} sm={6} xs={6}>
                <img src={userIcon} alt="user icon" /><br /><br />

                <Typography className={classes.CarHeading}> Teachers</Typography>
              </Grid>
              <Grid md={6}  sm={6} xs={6}>
                <Typography className={classes.CardAmount}> 56+ </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid md={4} style={{ padding: "20px" }}>
          <div className="Card2">
            <Grid item container style={{ padding: "80px 50px" }}>
              <Grid md={6} sm={6} xs={6}>
                <img src={userIcon} alt="user icon" /><br /><br />

                <Typography className={classes.CarHeading}> Parents</Typography>
              </Grid>
              <Grid md={6} sm={6} xs={6}>
                <Typography className={classes.CardAmount}> 56+ </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid md={4} style={{ padding: "20px" }}>
          <div className="Card3">
            <Grid item container style={{ padding: "80px 50px" }}>
              <Grid md={6} sm={6} xs={6}>
                <img src={userIcon} alt="user icon" /><br /><br />

                <Typography className={classes.CarHeading}> Students</Typography>
              </Grid>
              <Grid md={6} sm={6} xs={6}>
                <Typography className={classes.CardAmount}> 56+ </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid md={4} style={{ padding: "20px" }}>
          <div className="Card4">
            <Grid item container style={{ padding: "80px 50px" }}>
              <Grid md={6} sm={6} xs={6}>
                <img src={userIcon} alt="user icon" /><br /><br />

                <Typography className={classes.CarHeading}> Psychiatrists</Typography>
              </Grid>
              <Grid md={6} sm={6} xs={6}>
                <Typography className={classes.CardAmount}> 56+ </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid md={4} style={{ padding: "20px" }}>
          <div className="Card5">
            <Grid item container style={{ padding: "80px 50px" }}>
              <Grid md={6} sm={6} xs={6}>
                <img src={userIcon} alt="user icon" /><br /><br />

                <Typography className={classes.CarHeading}> Medical Officers</Typography>
              </Grid>
              <Grid md={6} sm={6} xs={6}>
                <Typography className={classes.CardAmount}> 56+ </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
      
        <Grid md={4} style={{ padding: "20px" }}>
          <div className="Card6">
            <Grid item container style={{ padding: "80px 50px" }}>
              <Grid md={6} sm={6} xs={6}>
                <img src={userIcon} alt="user icon" /><br /><br />

                <Typography className={classes.CarHeading}> Clinical Assistants</Typography>
              </Grid>
              <Grid md={6} sm={6} xs={6}>
                <Typography className={classes.CardAmount}> 56+ </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>





      </Grid>


    </Layout>

  )
}

export default Dashboard