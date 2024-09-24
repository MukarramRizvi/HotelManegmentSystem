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

const AddmissionForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    Qualification:"",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(database, "Class"), data);
      navigate('/Class/ClassList'); // Navigate to StudentList after saving the data
    } catch (error) {
      console.log(error);
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
        ADDMISSION FORM
      </Typography>
      <TextField
        label="First Name"
        name="firstName"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={data.firstName}
        onChange={handleChange}
      />
      <TextField
        label="Last Name"
        name="lastName"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={data.lastName}
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
        label="phonenumber"
        name="phonenumber"
        variant="outlined"
        margin="normal"
        fullWidth
        type="number"
        required
        value={data.class}
        onChange={handleChange}
      />

<TextField
        // label="Date of birth"
        name="date"
        type="date"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={data.date}
        onChange={handleChange}
      />
            <TextField
        label="Qualification"
        name="Qualification"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={data.Qualification}
        onChange={handleChange}
      />
      <FormControl component="fieldset" margin="normal" required>
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
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="success"
        fullWidth
        sx={{ mt: 2, backgroundColor:"red"}}

      >
        Submit
      </Button>
    </Box>
  );
};

export default AddmissionForm;