import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { NavLink, useNavigate } from 'react-router-dom';
import jawan from '../../public/hotel-logo-design-service.png'
import { auth } from '../Config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignup = () => {
    if (!firstName || !lastName || !email || !password) {
      setError('Please fill out all fields.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        navigate('/login');  
      })
      .catch((error) => {
        setError(error.message);  
      });
  };

  return (
    <Grid container sx={{ height: "fit-content" }}>
      <Grid 
        item 
        xs={12} 
        md={6} 
        sx={{ 
          backgroundColor: 'white', 
          display: { xs: 'none', md: 'flex' }, 
          alignItems: 'center', 
          justifyContent: 'flex-start',  
          flexDirection: 'column',
          padding: 3 
        }}
      >
        <img src={jawan}alt="" style={{ width: 300, borderRadius:"20px",marginTop: 48}} />
        <Typography sx={{ fontFamily: 'cursive',textAlign: "center", fontSize: 25, marginTop: 3, marginRight: 10, marginLeft: 10 }} gutterBottom>
          WELCOME TO Hotel MANAGEMENT SYSTEM
        </Typography>
      </Grid>
      <Grid 
        item 
        xs={12} 
        md={6} 
        sx={{ 
          display: 'flex',
          backgroundColor:'whitesmoke', 
          alignItems: 'center', 
          justifyContent: 'center', 
          flexDirection: 'column', 
          padding: 3 
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '400px' }}>
          <Typography variant="h5" gutterBottom align="center">
            SIGN UP
          </Typography>

          <TextField 
            label="First Name" 
            type='text'
            variant="outlined" 
            fullWidth 
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={Boolean(error && !firstName)}
            helperText={error && !firstName ? 'First name is required' : ''}
          />

          <TextField 
            label="Last Name" 
            type='text'
            variant="outlined" 
            fullWidth 
            margin="normal" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={Boolean(error && !lastName)}
            helperText={error && !lastName ? 'Last name is required' : ''}
          />

          <TextField 
            label="Email"
            type='email'
            variant="outlined" 
            fullWidth 
            margin="normal" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(error && !email)}
            helperText={error && !email ? 'Email is required' : ''}
          />

          <TextField 
            label="Password" 
            variant="outlined" 
            type={showPassword ? 'text' : 'password'} 
            fullWidth 
            margin="normal" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(error && !password)}
            helperText={error && !password ? 'Password is required' : ''}
            InputProps={{
              endAdornment: (
                <IconButton onClick={togglePasswordVisibility}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              ),
            }}
          />

          {error && (
            <Typography color="error" align="center" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          <Button 
            style={{ marginTop: 50 , backgroundColor:"black" }}
            variant="contained" 
            color="success" 
            fullWidth 
            onClick={handleSignup}
          >
            Sign Up
          </Button>
          
          <Typography align="center" sx={{ marginTop: 2, fontSize: 20, color: 'black' }}>
            <span>Or</span> 
            <NavLink to="/login" style={{ color: 'blue', marginLeft: 5 }}>Already have a profile?</NavLink>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignupPage;