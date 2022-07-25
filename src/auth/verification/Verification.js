import React, { useState } from 'react'
import '../auth.scss';
// import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

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
    TextField,
} from "@material-ui/core";

import LoginImg from "../../assets/images/login.svg";
import Logo from "../../assets/images/Logo.svg";
import OtpInput from "react-otp-input";



function Verification() {
    const [code, setCode] = useState("");
    console.log(code, "code")
    const handleChange = (code) => setCode(code);


    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <Grid container>
                        <Grid className='Login-Container' align="left">
                            <img src={Logo} alt="logo" />
                            <h1 className="heading" >Verification</h1>

                            <h3 className="Sub-heading" >Please Enter Your OTP Code Here</h3>  <br />  <br />

                            <div className="App">
                                <Grid align="center">
                                    <OtpInput
                                        value={code}
                                        onChange={handleChange}
                                        numInputs={4}
                                        separator={<span style={{ width: "8px" }}></span>}
                                        isInputNum={true}
                                        shouldAutoFocus={true}
                                        inputStyle={{
                                            align: "center",
                                            border: "1px solid  #CFD3DB",
                                            borderRadius: "8px",
                                            width: "54px",
                                            height: "54px",
                                            fontSize: "12px",
                                            color: "#000",
                                            fontWeight: "400",
                                            caretColor: "blue"
                                        }}
                                        focusStyle={{
                                            border: "1px solid black",
                                            outline: "none"
                                        }}
                                    />
                                </Grid>
                                <br />  <br />


                            </div>
                            <Link to="/dashboard">
                                <button variant="contained" className='login_button'>LOGIN NOW >> </button>
                            </Link>

                        </Grid>

                    </Grid>

                </Grid>
                <Grid item md={6} lg={6} sm={12} xs={12}>
                <div className="image-container">
                    <img src={LoginImg} alt="login imag" />
                    </div>
                </Grid>
            </Grid>
        </>

    )
}

export default Verification