import React, { useState } from 'react'
import '../auth.scss';
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
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Webcam from "react-webcam";
import userIcon from "../../assets/images/user.jpg"

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = {
    facingMode: FACING_MODE_USER
};




function Login() {
    const [facingMode, setFacingMode] = React.useState(FACING_MODE_USER);
    const [image, setImage] = useState('')
    console.log(image,"image")
    const [mobile, setMobile] = useState('')
    const [type, setType] = React.useState('');
    const handleMobileChange = (event) => {
        setMobile(event.target.value);
    };
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };


    const SwitchCamera = React.useCallback(() => {
        setFacingMode(
            prevState =>
                prevState === FACING_MODE_USER
                    ? FACING_MODE_ENVIRONMENT
                    : FACING_MODE_USER
        );
    }, []);




    const [open, setOpen] = React.useState(false);
    const PopupOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const webcamRef = React.useRef(null);
    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc)
        },
        [webcamRef, setImage]
    );




    return (
        <>
            {/* Registration for start */}
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    {/* <Grid container> */}
                        <Grid className='Login-Container' align="left">

                            <img src={Logo} alt="logo" />
                            <h1 className="heading" >Registraion</h1>
                            {/* <h3 className="Sub-heading" >Please Enter Your Valid Mobile Number</h3> */}
                            <div className="login_form">
                            <form >
                                <Grid align="center">
                                <img src={image==''? userIcon : image } style={{borderRadius:"50%", width:"100px", height:"100px"}} /><br/><br/>
                                </Grid>

                             


                                <TextField
                                    id="outlined-basic"
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleMobileChange}
                                    radius="50px"
                                />
                                <br /><br />
                                <TextField
                                    id="outlined-basic"
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleMobileChange}
                                    radius="50px"
                                />
                                <br /><br />
                                <TextField
                                    id="outlined-basic"
                                    label="mobile number"
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleMobileChange}
                                    radius="50px"
                                />
                                <br /><br />
                                <TextField
                                    id="outlined-basic"
                                    label="email id"
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleMobileChange}
                                    radius="50px"
                                />
                                <br /><br />
                                <TextField
                                    id="outlined-basic"
                                    label="Passord"
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleMobileChange}
                                    radius="50px"
                                />
                                <br /><br /><br />
                                <Link to="/Verification">
                                    <button variant="contained" className='login_button'> Submit</button>
                                </Link>
                            </form>
                            </div>
                            <br /><br />
                            <button variant="contained" className='login_button' onClick={PopupOpen}> Upload your image</button>
                            <br /><br />
                            <Grid align="center">
                                <p style={{ color: "#D8315B", fontSize: "16px" }}>Or Sign in with Email</p>
                            </Grid>
                        </Grid>
                    {/* </Grid> */}
                </Grid>
                <Grid item md={6} lg={6} sm={12} xs={12}>
                <div className="image-container">
                        <img src={LoginImg} alt="login imag" />
                    </div>
                </Grid>
            </Grid>

            {/* Registration for end */}
 {/* ================================================================================= */}
            {/* image popup start */}

            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Upload your image"}
                    </DialogTitle>
                    <DialogContent>


                        {/* web-camera start */}

                        {image == '' ? <Webcam
                            audio={false}
                            height={390}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={520}
                            videoConstraints={videoConstraints}
                        /> : <img src={image} />}

                        <Grid item container align="left"
                        //  style={image != '' ? { marginTop: "30px" } : { marginTop: "0px" }} 
                         >
                            {image != '' ?
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    setImage('')
                                }}
                                    className='popupbtton'

                                >
                                    Retake Image</button> :
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    capture();
                                }}
                                    className='popupbtton'>Capture</button>
                            } &nbsp;

                            {
                                facingMode === 'user' ?
                                    <button onClick={SwitchCamera} className='popupbtton'>Switch back camera</button>
                                    :
                                    <button onClick={SwitchCamera} className='popupbtton'>Switch front camera</button>

                            }
                        </Grid>
                        {/* web-camera end */}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Submit</Button>
                        <Button onClick={handleClose} autoFocus>
                            cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            {/* image popup start */}
        </>

    )
}

export default Login