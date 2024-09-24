import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../Config/firebase';
import { useNavigate } from 'react-router-dom';

const TeacherRegistration = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone:"",
    BookingDate: "",
    CustomerId:"",
    RoomId:"",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Data being submitted:", data); // Debugging line
    try {
      await addDoc(collection(database, "Teacher"), data);
      navigate('/Subject/SubjectList');
    } catch (error) {
      console.log("Error adding document:", error);
    }
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '400px',
        mx: 'auto',
        mt: 4,
      }}
    >
      <Typography variant="h5" gutterBottom>
    Room Booking Registration
      </Typography>    
        <TextField
        label="Customer ID"
        name="CustomerId"
        variant="outlined"
        type='text'
        margin="normal"
        fullWidth
        required
        value={data.CustomerId}
        onChange={handleChange}
      />
      <TextField
        label="fullName"
        name="fullName"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={data.fullName}
        onChange={handleChange}
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={data.email}
        onChange={handleChange}
      />
   
         <TextField
      label="RoomId"
      name="RoomId"
      variant="outlined"
      margin="normal"
      fullWidth
      type="text"
      required
      value={data.RoomId}
      onChange={handleChange}
    />
          <TextField
        label="BookingDate"
        name="BookingDate"
        type='date'
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={data.BookingDate}
        onChange={handleChange}
      />
      <TextField
        label="Contact Num"
        name="phone"
        variant="outlined"
        margin="normal"
        fullWidth
        type="text"
        required
        value={data.phone}
        onChange={handleChange}
      />
      {/* <FormControl component="fieldset" margin="normal" required>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          name="gender"
          value={data.gender}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            value="female"
            control={<Radio color="success" />}
            label="Female"
          />
          <FormControlLabel
            value="male"
            control={<Radio color="success" />}
            label="Male"
          />
        </RadioGroup>
      </FormControl> */}
      <Button
        type="submit"
        variant="contained"
        color="success"
        fullWidth
        sx={{ mt: 2,backgroundColor:"black" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default TeacherRegistration;