import React, { useEffect, useState, useRef } from "react";
// import "./sidebarlayout.scss";
 import './sidebarlayout.scss'
 import logo from "../assets/images/Logo.svg"
 import profileImg from "../assets/images/profileImg.svg";
// import logo from "../../../assets/doctall_logo.svg";
import Avatar from "../assets/Avatar.png";
import DashboardIcon from "../assets/DashboardIcon.png";
import ProfileIcon from "../assets/ProfileIcon.png";
import ProfileIconLight from "../assets/profile_icon_light.svg";
import LogoutIcon from "../assets/LogoutIcon.png";
import ICON9 from "../assets/ICON9.svg";
import Downarrow from "../assets/Downarrow.png";
// import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import { secureStorage } from "../../../Utils";
// import dashboardIconLight from "../../../assets/dashboard_icon_light.svg";
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
// import axios from 'axios';
import d_icon from "../assets/doctall_icon.svg"
// import CloseIcon from '@mui/icons-material/Close';
import msg from "../assets/msg_icon.svg";


import hamburger from "../assets/images/menuIcon.svg";
import closeIcon from "../assets/images/x.svg";

import {  Link } from "react-router-dom";







const SidebarLayout = (props) => {
  // const navigate = useNavigate();
  const history = useHistory();
  console.log(props,"navigate")
  const [popup, setPopup] = useState(false);
//   const dispatch = useDispatch();
  const [closer, setCloser] = useState(false)
  const [modalShow, setModalShow] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [sidemenu, setSidemenu] = useState(true);
  const [isDesktopView, setIsDesktopView] = useState(true);
//   const [width, height] = useWindowSize();
//   const userdata = useSelector((state) => state.auth);
//   const patientdata = useSelector((state) => state.patients.data);
  const [profile, setProfile] = useState(false);
  const [shownofity, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [submitShow, setSubmitShow] = useState(false);
  const [modalShowfeed, setModalShowfeed] = useState(false);
  

  // let userID = secureStorage.getItem("currentUser").data.uuid

  const [notification, setNotification] = useState([]);

  const ref = useRef();

  const handleClickOpen = (e) => {
    e.preventDefault();
    setModalShow(true);
  };

 

  const redirectToDMP = () => {
    let url = process.env.REACT_APP_DMP_URL
    window.location.href = url
  }



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 

// function logout(){
//   secureStorage.removeItem("currentUser");
// }






// useEffect(() => {
//   getNotification()
// }, [])

// const getNotification = () => {
//   axios.get(`${process.env.REACT_APP_WEB_APP}/notification/list/${userID}`)
//     .then((res) => {
//       setNotification(res.data)

//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }


useEffect(() => {
  const setResponsiveness = () => {
    return window.outerWidth < 426 && window.outerWidth > 300 
      ? setSidemenu(false)
  : setSidemenu(true)

  };

  setResponsiveness();
  window.addEventListener("resize", () => setResponsiveness());

  return () => {
    window.removeEventListener("resize", () => setResponsiveness());
  };
}, []);





  return (
    <>
      <div className="navbar">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "3%",
            width: "310px",
          }}
        >
          <span
          // style={{width:"50px"}}
            // className="sideMenuIconHolder"
            className="sideMenuIconHolder1"

            onClick={() => {
              setSidemenu(!sidemenu);
            }}
          >
            {sidemenu ? 
            (
              <img
                crossorigin="anonymous"
                src={closeIcon}
                className="hamburger"
                alt="doctall"
              // style={{width:"30px"}}

              />
            ) 
            : (
              <img
                crossorigin="anonymous"
                src={hamburger}
                className="hamburger"
                alt="doctall"
                // style={{width:"60px"}}
              />
            )}{" "}
          </span>
          <img
            crossorigin="anonymous"
            src={logo}
            className="doctallimg"
            alt="logo"
            // onClick={"/"}
            onClick={() => {
                  history.push("/dashboard");
                  // window.location.reload(false);
                }} 
          ></img>
        </div>
        <div className="headerNav">
          {/* <div className="searchContainer">
            <input
              type="text"
              placeholder="keyword search"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <img
              crossorigin="anonymous"
              src={"ICON10"}
              className="searchimg"
              alt="search"
              onClick={() => {
                onSearch();
              }}
            />
          </div> */}
          <div className="dummy"></div>
          <div className="navbarContainerTwo">
            <div className="noti-count">
              <img
                crossorigin="anonymous"
                src={ICON9}
                className="notifyimg"
                alt="doctall"
                style={{ paddingRight: "31px" }}
                onClick={() => setPopup(!popup)}
              ></img>
              {popup ? (
              <div className="popupScreen" ref={ref}>
              {
                notification.length == 0?
          
                <div style={{width:"350px", height:"450px", overflow:"auto", background:"#fffff", }}>
                
               <Grid style={{ height: "300px", paddingTop:"100px", overflow:"hidden" }} align="center">
               <img src={msg}/>
                <Typography style={{color:"#002931",fontSize:"14px", fontWeight:"600"}} >No notification yet</Typography>  
                <Typography style={{color:"#5B7B83",fontSize:"12px", fontWeight:"400"}}>You don’t have any notification yet</Typography>  
    </Grid>
</div>
        :  
              <div style={{width:"350px", height:"450px", overflow:"auto", background:"#fffff", opacity:"10px"}}>
              {
                notification.map((item) => {
                  return (
                    <Grid item container style={{ margin: "10px", width:"310px",background:"#fffff"}}>
                      <Grid md={2}>
                        <img 
                        src={d_icon} 
                        alt="message icon" />
                      </Grid>

                      <Grid md={10}>

                        <Typography
                        style={{fontSize:"14px", fontWeight:"600", color:"#344054"}}
                        //  className={classes.messageHeading}
                         >
                        {item.title} &nbsp;
                         <span style={{fontSize:"12px", fontWeight:"400", color:"#667085"}}
                        //  className={classes.messageText}
                         >2 mins ago</span></Typography>
                        <Typography
                        style={{fontSize:"12px", fontWeight:"400", color:"#667085"}}
                        //  className={classes.messageText}
                         >{item.message}.</Typography>

                      </Grid>
                    </Grid>
                  )
                })
              }
              </div>

              }

              {/* <div className="line"></div> */}
                {/* <Link
                  to={{
                    pathname: "/profile",
                    state: patientdata,
                  }}
                >
                  <a>Health Profile</a>
                </Link> */}
                {/* <Link to="/relatives">Relatives</Link>
                <a href="" onClick={(event) => handleClickOpen(event)}>
                  Change Passcode
                </a>
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    logoutfn();
                  }}
                >
                  Sign Out
                </a>
                <div className="line"></div> */}
              </div>
            ) : (
              " "
            )}
            </div>
            {profile ? (
              <img
                crossorigin="anonymous"
                src={profileImg}
                className="profileimg"
                alt="doctall"
                style={{ borderRadius: "50%", paddingRight: "7px" }}
              ></img>
            ) : (
              <div className="profilediv">
                <img
                crossorigin="anonymous"
                src={profileImg}
                className="profileimg"
                alt="doctall"
                style={{ borderRadius: "50%", paddingRight: "7px" }}
              ></img>
                  {/* {IntialGen(userdata)} */}
                  </div>
            )}
            <div onClick={handleClick}>
            Ms. Fareeha Rasheed &nbsp;
            <img
              crossorigin="anonymous"
              src={Downarrow}
              className="arrimg"
              alt="doctall"
              style={{ cursor: "pointer" }}
              
            ></img>
            </div>
          
            
          </div>
        </div>
      </div>
      <div className="dashContainer" style={{ position: "relative" }}>
        {isDesktopView ? (
          sidemenu ? (
            <div className={`sidemenu ${sidemenu ? "sidemenu-display" : " "}`}>
              <div
                className={
                  window.location.pathname == "/dashboard"
                    ? "menu active"
                    : "menu"
                }
                onClick={() => {
                  history.push("/dashboard");
                  // window.location.reload(false);
                }}
              >
                 {/* {(window.location.pathname.endsWith("/dashboard")) ? 
                 <img 
                 src={dashboardIconLight}
                   alt="doctall_care" /> 
                   :
                   <img 
                   src={DashboardIcon}
                    alt="doctall_care" />
                    } */}
                {/* <img crossorigin="anonymous" src={DashboardIcon} alt="doctall"></img> */}
                Dashboard
              </div>
              {/* <div
                className={
                  window.location.pathname == "/transaction"
                    ? "menu active"
                    : "menu"
                }
                onClick={() => { history.push("/transaction"); 
                // window.location.reload(false);
                }}
              >
              {(window.location.pathname.endsWith("/transaction")) ? <img src={TransactionIconLight}  alt="doctall_care" /> :<img src={TransactionIcon} alt="doctall_care" />}

               
                Transaction History
              </div> */}
 {/* <img crossorigin="anonymous" src={TransactionIcon} alt="doctall"></img> */}
 <div
                className={
                  window.location.pathname == "/questionnaire"
                    ? "menu active"
                    : "menu"
                }
                onClick={() => {
                  history.push("/questionnaire");
                  // window.location.reload(false);
                }}
              >
               Questionnaire
              </div>



              <div
                className={
                  window.location.pathname == "/profile"
                    ? "menu active"
                    : "menu"
                }
                onClick={() => {
                  // history.push("/profile");
                  // window.location.reload(false);
                }}
              >
              {/* {(window.location.pathname.endsWith("/profile")) ?
               <img 
               src={ProfileIconLight}
                 alt="doctall_care" /> :
                 <img 
                 src={ProfileIcon}
                  alt="doctall_care" />} */}
        
                {/* <img crossorigin="anonymous" src={ProfileIcon} alt="doctall"></img> */}
                Profile
              </div>
              <div
                className={
                  window.location.pathname == "/Logout"
                    ? "menu active"
                    : "menu"
                }
                onClick={() => {
                  // logout()
                  history.push("/login");
                }}
              >
                {/* <img crossorigin="anonymous" 
                src={LogoutIcon} 
                alt="doctall"></img> */}
                Logout
              </div>
            </div>
          ) : null
        ) : sidemenu ? (
        //   <Sidemenumodal style={sidemenu ? "sidemenu-show" : ""} />
        <div></div>
        ) : (
          ""
        )}
        <div className="children">
          {props.children}
          {/* <div className="chatIcon">
            <img crossorigin="anonymous" src={ChatIcon}/>
          </div> */}
        </div>
      </div>

      {/* <ConfirmChangePasscode
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleConfirmChangePass={handleConfirmChangePass}
      /> */}
      {props.loadin ? (
        <div className="loadingcontainer">
          {/* <CircularProgress style={{ color: "#00839b" }} /> */}
        </div>
      ) : null}
     

      <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open2}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        style={{ width:"200px", marginTop:"30px", padding:"30px"}}
      >
      
        <MenuItem>Dashboard </MenuItem>
              
                <MenuItem >Profile</MenuItem>
                <MenuItem >Admin</MenuItem>
                <MenuItem 
                //  onClick={() => {
                //   logout()
                //   history.push("/login");
                // }}
                
                >Logout</MenuItem>
      
               
      </Menu>
    </div>
    </>
  );
};

export default SidebarLayout;