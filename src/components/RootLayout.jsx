import React from 'react'
import { Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import {AiFillHome , AiOutlineUser} from 'react-icons/ai'
import {HiOutlineChatAlt , HiOutlineUserGroup} from 'react-icons/hi'
import {CgMenuRound} from 'react-icons/cg'
import {FiSettings} from 'react-icons/fi'
import ProfileImage from '../assets/Profile.png'
import { useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux'


const RootLayout = () => {
    const userData = useSelector((state) =>(state.loggedUser.loginUser))

    const notify = (msg) => toast.success(msg,{
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let handleLogOut = ()=>{
        setAnchorEl(null);
        navigate('/login')
        localStorage.removeItem("user")
        notify("Log Out Complete")
        
    }

    let handleHome = ()=>{
        navigate('/techtalk/home')
    }
    let handleChat = ()=>{
        navigate('/techtalk/chat')
    }
    let handleGroup = ()=>{
        navigate('/techtalk/group')
    }
    let handleFriends = ()=>{
        navigate('/techtalk/friends')
    }
    let handlePeople = ()=>{
        navigate('/techtalk/people')
    }

  return (
    <>
        <Grid container>
            {/* <div className='home_container'> */}
                <Grid className='home_container' item xs={12}>
                    
                    <Grid container spacing={2.5}>
                        <Grid item xs={1.81}>
                            <div className='root_container'>
                                <div  className='root_list'>
                                    <h2 onClick={handleHome}><span>Ch</span>att.</h2>
                                    <ul>
                                        <li onClick={handleHome}>
                                            <div>
                                                <span><AiFillHome/></span>
                                                <h3>Home</h3>
                                            </div>
                                        </li>
                                        <li onClick={handleChat}>
                                            <div>
                                                <span><HiOutlineChatAlt/></span>
                                                <h3>Chat</h3>
                                            </div>
                                        </li>
                                        <li onClick={handleGroup}>
                                            <div>
                                                <span><HiOutlineUserGroup/></span>
                                                <h3>Group</h3>
                                            </div>
                                        </li>
                                        <li onClick={handleFriends}>
                                            <div>
                                                <span><AiOutlineUser/></span>
                                                <h3>Friends</h3>
                                            </div>
                                        </li>
                                        <li onClick={handlePeople}>
                                            <div>
                                                <span><CgMenuRound/></span>
                                                <h3>People</h3>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                                <div className='profile_container'>
                                    <div className='profile_img'>
                                        <img src={ProfileImage}/>
                                    </div>
                                    <div className='profile_info'>
                                        <h3>{userData.displayName}</h3>
                                        <h4>Edit Profile</h4>
                                    </div>
                                    <div className='profile_setting_icon'>
                                        <FiSettings                                                 aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}/>
                                        <div>
                                            <Menu className='setting_menu' id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}MenuListProps={{ 'aria-labelledby': 'basic-button', }}>
                                                <MenuItem className='setting_item' onClick={handleClose}>Profile</MenuItem>
                                                <MenuItem className='setting_item' onClick={handleClose}>Settings</MenuItem>
                                                <MenuItem className='setting_item1' onClick={handleLogOut}>Logout</MenuItem>
                                            </Menu>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Grid>
                        <Grid className='root_pad' item xs={10.19}>
                            <div className='pad'>
                                <Outlet/>
                            </div>
                        </Grid>
                    </Grid>                        
                </Grid>
            {/* </div> */}
        </Grid>      
    </>

  )
}

export default RootLayout