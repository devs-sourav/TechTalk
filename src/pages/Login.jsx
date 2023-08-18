import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginPic from '../assets/Login1.gif'
import TreeBird from '../assets/BlueBird.gif'
import logo from '../assets/letter-t.svg'
import {RxEyeNone, RxEyeOpen} from 'react-icons/rx'
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import LoadingButton from '@mui/lab/LoadingButton';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { userData} from '../slices/user/UserSlice'
import { toast } from 'react-toastify';




let info = {
  email: "",
  password: "",
  error: "",
  loading: false,
  eye:false,
}

const Login = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch()
  let [ userInfo, setUserInfo] = useState(info)
  const auth = getAuth();

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
  




  let handleChangePage = ()=>{
    navigate("/");
  }


  let handleChange = (e) =>{
    
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value

    })
  }
  let handleEye = ()=>{
    setUserInfo({
      ...userInfo,
      eye: ! userInfo.eye,
    })
  }
  useEffect(()=>{
    if(localStorage.getItem("user")){
      navigate("/techtalk/home")
    }
  },[])

  let handleSignIn = ()=>{
    let {email,password} = userInfo;

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

    if( email && password){

      setUserInfo({
        ...userInfo,
        loading:true
      })


      signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user.user)
        
        dispatch(userData(user.user))
        localStorage.setItem("user",JSON.stringify(user.user))
        navigate("/techtalk/home")
        notify("Login Successful")
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)

        if(errorCode == 'auth/wrong-password'){
          setUserInfo({
            ...userInfo,
            password:"",
            error: "Wrong Password",
            loading:false,
          })
        }
        if((errorCode == 'auth/user-not-found')||(errorCode =="auth/invalid-email")){
          setUserInfo({
            ...userInfo,
            email:"",
            error: "Invalid User Email",
            loading:false,
          })
        }
      });


    }
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
                    <TextField id="outlined-basic" onChange={handleChange} type='email' value={userInfo.email} name='email' label="Email" variant="outlined" />
                    {
                      userInfo.error.includes("Email") && <Alert severity="error">{userInfo.error}</Alert>
                    }
                  </div>
                  <div className='textFieldGroup'>
                    <TextField id="outlined-basic1" onChange={handleChange} type={userInfo.eye ? 'text' : 'password'} name='password' value={userInfo.password} label="Password" variant="outlined" />
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
                      <Button className='signupbtn' onClick={handleSignIn} variant="contained">Login</Button>
                    }

                  
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