import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginPic from '../assets/Sign UP1.jpg'
import TreeBird from '../assets/BlueBird.gif'
import logo from '../assets/letter-t.svg'
import { useNavigate } from "react-router-dom";
// RxEyeNone
import {RxEyeNone, RxEyeOpen} from 'react-icons/rx'
import Alert from '@mui/material/Alert';
import LoadingButton from '@mui/lab/LoadingButton';
import { getDatabase, ref, set,push } from "firebase/database";


import { getAuth, createUserWithEmailAndPassword,updateProfile,sendEmailVerification } from "firebase/auth";

let info = {
  fullname : "",
  email: "",
  password: "",
  error: "",
  loading: false,
  eye:false,
}

const Registraion = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getDatabase();
  
  let [ userInfo, setUserInfo] = useState(info)

  let handleChangePage = ()=>{
    navigate("/login");
  }
  let handleSignUp= () =>{

    let {fullname,email,password} = userInfo;

    if(!password){
      setUserInfo({
        ...userInfo,
        error:"Enter an Password"
      })
    }
    if(!email){
      setUserInfo({
        ...userInfo,
        error:"Enter an Email"
      })
    }
    if(!fullname){
      setUserInfo({
        ...userInfo,
        error:"Enter an Full Name"
      })
    }
    if(fullname && email && password){
      setUserInfo({
        ...userInfo,
        error:""
      })
    }


    if( fullname && email && password){

      setUserInfo({
        ...userInfo,
        loading:true
      })

      createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      updateProfile(auth.currentUser, {
        displayName: fullname, photoURL: "https://i.ibb.co/VBsbBpv/avatar.png"
      }).then(() => {
        sendEmailVerification(auth.currentUser)

        .then(()=>{
          set(push(ref(db, 'users/')), {
            fullname: userInfo.fullname,
            email: userInfo.email,
            profile_picture : user.user.photoURL
          });
        })
      })
      setUserInfo({
        fullname : "",
        email: "",
        password: "",
        error: "",
        loading:false
      })
      navigate('/login')
    })

    }

    


  }

  let handleEye = ()=>{
    setUserInfo({
      ...userInfo,
      eye: ! userInfo.eye,
    })
  }

  let handleChange = (e) =>{
    
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value

    })
  }
  console.log(userInfo)


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

                  <div className='textFieldGroup'>
                    <TextField id="outlined-basic" onChange={handleChange} type='text' value={userInfo.fullname} name='fullname' label="Full Name" variant="outlined" />
                    {
                      userInfo.error.includes("Full Name") && <Alert severity="error">{userInfo.error}</Alert>
                    }
                  </div>
                  <div className='textFieldGroup'>
                    <TextField id="outlined-basic1" onChange={handleChange} type='email' value={userInfo.email} name='email' label="Email" variant="outlined" />
                    {
                      userInfo.error.includes("Email") && <Alert severity="error">{userInfo.error}</Alert>
                    }
                  </div>
                  <div className='textFieldGroup'>
                    <TextField id="outlined-basic2" onChange={handleChange} type={userInfo.eye ? 'text' : 'password'} name='password' value={userInfo.password} label="Password" variant="outlined" />
                    {
                      userInfo.eye
                      ?
                      <span className='eyefix' onClick={handleEye}><RxEyeOpen/></span>
                      :
                      <span className='eyefix' onClick={handleEye}><RxEyeNone/></span>
                    }
                    {
                      userInfo.error.includes("Password") && <Alert severity="error">{userInfo.error}</Alert>
                    }
                  </div>
                    {
                      userInfo.loading
                      ?
                      <LoadingButton className='signupbtn'  loading={userInfo.loading} loadingPosition="end" variant="contained">
                        <span>Send</span>
                      </LoadingButton>
                      :
                      <Button className='signupbtn' onClick={handleSignUp} variant="contained">Sign Up</Button>
                    }

                  
                  <div className='reg_signin'>
                    <h4 className='reglogbtn1'>Have an account?</h4>
                    <h4 onClick={handleChangePage} className='reglogbtn'>Log in</h4>
                  </div>
                </div>
              </div>
          </div>
        </Grid>
      </Grid>        
    </div>
  )
}

export default Registraion