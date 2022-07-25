import React from 'react';
import Layout from "../../Layout/Layout";
import DashboardIcon from "../../assets/images/dashboardIcon.svg";
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
} from "@material-ui/core";

function Dashboard() {
  return (

    <Layout>
      <Grid item container style={{padding:"20px"}}>

        <Grid md={6}>
        <div> <img src={DashboardIcon}/> Dashboard</div>
       </Grid>
        <Grid md={6}>

</Grid>

      </Grid>


   
    </Layout>
    
  )
}

export default Dashboard