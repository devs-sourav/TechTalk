import React from 'react'
import { Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import {AiFillHome , AiOutlineUser} from 'react-icons/ai'
import {HiOutlineChatAlt , HiOutlineUserGroup} from 'react-icons/hi'
import {CgMenuRound} from 'react-icons/cg'
import {FiSettings} from 'react-icons/fi'
import ProfileImage from '../assets/Profile.png'
import { useNavigate } from "react-router-dom";

const RootLayout = () => {
    const navigate = useNavigate();

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
                                        <h3>Sourav</h3>
                                        <h4>Edit Profile</h4>
                                    </div>
                                    <div className='profile_setting_icon'>
                                        <FiSettings/>
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