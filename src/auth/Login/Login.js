import React, { useState } from 'react'
import '../auth.scss';
// import Grid from '@mui/material/Grid';

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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LoginImg from "../../assets/images/login.svg";
import Logo from "../../assets/images/Logo.svg";
import googleIcon from "../../assets/images/google-icon.svg";
import fbIcon from "../../assets/images/fb-icon.svg";
import { Link } from 'react-router-dom';






function Login() {
    const [mobile, setMobile] = useState('')
    const [type, setType] = React.useState('');
    console.log(type, mobile, "type")
    const handleMobileChange = (event) => {
        setMobile(event.target.value);
    };
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };




    return (
        <>
            <Grid container spacing={2} className="main-container">

                <Grid item md={6} xs={12}>
                    <Grid container>
                        <Grid className='Login-Container' align="left">
                            <img src={Logo} alt="logo" /> 
                            <h4 className="heading" >Login</h4>
                            <h3 className="Sub-heading" >Please Enter Your Valid Mobile Number</h3>
                            <div className="login_form">
                                <form>
                                    <TextField
                                        id="outlined-basic"
                                        label="mobile number"
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleMobileChange}
                                        radius="50px"
                                    />
                                    {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}


                                    <br /><br /><br />
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">select user</InputLabel>
                                        <Select
                                            //   labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={type}
                                            label="select user"
                                            onChange={handleTypeChange}
                                        >
                                            <MenuItem value={"Student"}>Student</MenuItem>
                                            <MenuItem value={"Teacher"}>Teacher</MenuItem>
                                            <MenuItem value={"Parents"}> Parents</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <br /><br /><br />



                                    <Link to="/verification">
                                        <button variant="contained" className='login_button'> Get OTP >> </button>
                                    </Link>
                                </form>
                            </div>
                            <Grid align="center">
                                <p style={{ color: "#D8315B", fontSize: "16px" }}>Or Sign in with Email</p>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item md={6} xs={6}>
                                    <button variant="contained" className='login-with' type='submit'> <img src={googleIcon} /> &nbsp; Google </button>
                                </Grid>
                                <Grid item md={6} xs={6}>
                                    <button variant="contained" className='login-with' type='submit'><img src={fbIcon} /> &nbsp; Facebook </button>
                                </Grid>
                            </Grid>


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

export default Login