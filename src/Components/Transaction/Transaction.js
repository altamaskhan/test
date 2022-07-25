import React from 'react';
import { useState, useRef, useEffect } from 'react';
// import SidebarLayout from '../../components/Layout/SidebarLayout/SidebarLayout';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core";
import styles from "./styles";

// import Search from "./../../assets/Search.svg";
import {
  Grid,
  Hidden,
  IconButton,
  useMediaQuery,
  Button,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";

//  import { secureStorage } from '../../Utils';







const useStyles = makeStyles((theme) => styles(theme));
function Transaction() {
  const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const custommatchesXL = useMediaQuery("(min-width:1550px)");
    const custommatchesXXL = useMediaQuery("(min-width:1700px)");
    const [paymentDetails, setPaymentDetails] = useState([]);
    const [value, setValue] = React.useState(null);

    // let userID = secureStorage.getItem("currentUser").data.uuid
    // let token = secureStorage.getItem("currentUser").data.token

    // console.log(paymentDetails,"payment1")
    // useEffect(() => {
    //   getPaymentData()
    // }, [])
    // const getPaymentData = () => {
    //   axios.get(`https://stage-api.doctall.com/api/v1/user/pharmacyCommission/transaction/list/pharmacy?pharmacy_uuid=${userID}&limit=10&page=0`,{
    //     headers: {
    //         "Content-Types": "multipart/form-data",
    //         "x-auth-token": token,
    //       }
    // })
    //     .then((res) => {
    //       // setCode(res.data.referal_code)
    //       setPaymentDetails(res.data.data)
    //       console.log(res.data,"setpeyment")
          
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // }
    // const columns = [
    //   { field: 'id' , headerName: 'INDEX', width: 200,},
    //   { field: 'transaction_id' , headerName: 'PAYMENT ID', width: 200 },
    //   { field: 'Date', headerName: 'Date', width: 200 },
    //   // { field: 'Date', headerName: 'DATE', width: 200 },
    //   {field: 'amount',headerName: 'AMOUNT (₦)',width: 200,}
    // ];  
    // const rows = [
    //   // { id : "0", transaction_id: "123", Date:"43242", amount:"3423" },
    // ];
    // paymentDetails && paymentDetails.map((item,index) =>{
    //   rows.push(
    //     { id : index,
    //       transaction_id: item.transaction_id, 
    //       Date:item.transaction_date, 
    //       amount:item.amount },
    //   )
    //   })
    // console.log(rows)

  return (
    <>
    <div>
    <Typography  className={classes.TransactionHeading}>Payment</Typography>
    </div>
    

    </>

  )
}

export default Transaction