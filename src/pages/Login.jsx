import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginPic from '../assets/Login1.gif'
import TreeBird from '../assets/BlueBird.gif'
import logo from '../assets/letter-t.svg'
import { useNavigate } from "react-router-dom";



const Login = () => {
  const navigate = useNavigate();
  let handleChangePage = ()=>{
    navigate("/");
  }

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
              
          <div className='reg_container'>
              <div className='reg_box'>
                <div className='reg_img'>
                  
                  <img src={LoginPic}/>
                </div>
                <div className='reg_form'>
                  <div className='logo'>
                      <img src={logo}/>
                  </div>
                  <div className='regbirdtree'>
                    <img src={TreeBird}/>
                  </div>
                  <div className='reg_heading'>
                    <h2>Sign In</h2>
                    <p>Ready To Spread Friendship</p>
                  </div>
                  <div className='textFieldGroup'>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                  </div>
                  <div className='textFieldGroup'>
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                  </div>

                  <Button variant="contained">Login</Button>
                  <div className='reg_signin'><h4 className='reglogbtn1'>Haven't an account?</h4><h4 onClick={handleChangePage} className='reglogbtn'>Sign Up</h4></div>
                </div>
              </div>
          </div>
        </Grid>
      </Grid>        
    </>
  )
}

export default Login