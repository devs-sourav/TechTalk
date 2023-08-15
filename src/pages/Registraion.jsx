import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginPic from '../assets/Sign UP1.jpg'
import TreeBird from '../assets/BlueBird.gif'
import logo from '../assets/letter-t.svg'
import { useNavigate } from "react-router-dom";

const Registraion = () => {
  const navigate = useNavigate();

  let handleChangePage = ()=>{
    navigate("/login");
  }


  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className='reg_container'>
              <div className='reg_box1'>
                <div className='reg_img'>
                  <img src={LoginPic}/>
                </div>
                <div className='reg_form'>
                  <div className='regbirdtree1'>
                    <img src={TreeBird}/>
                  </div>
                  <div className='logo'>
                    <img src={logo}/>
                  </div>
                  <div className='reg_heading'>
                    <h2>Sign Up</h2>
                    <p>Share Your Feelings</p>
                  </div>
                  <TextField id="outlined-basic" label="Full Name" variant="outlined" />
                  <TextField id="outlined-basic" label="Email" variant="outlined" />
                  <TextField id="outlined-basic" label="Password" variant="outlined" />
                  <Button variant="contained">Sign Up</Button>
                  <div className='reg_signin'><h4 className='reglogbtn1'>Have an account?</h4><h4 onClick={handleChangePage} className='reglogbtn'>Log in</h4></div>
                </div>
              </div>
          </div>
        </Grid>
      </Grid>        
    </div>
  )
}

export default Registraion