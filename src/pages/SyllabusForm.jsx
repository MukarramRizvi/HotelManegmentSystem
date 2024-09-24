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
import { useNavigate } from 'react-router-dom'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';;

const SyllabusForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    SyllabusName: "",
    class: "",
    pdf: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(database, "Syllabus"), data);
      navigate('/Syllabus/SyllabusList'); // Navigate to StudentList after saving the data
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
      Syllabus Add
      </Typography>
      <TextField
        label="Syllabus Name"
        name="SyllabusName"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={data.SyllabusName}
        onChange={handleChange}
      />

      <TextField
        label="Class"
        name="class"
        variant="outlined"
        margin="normal"
        fullWidth
        type="number"
        required
        value={data.class}
        onChange={handleChange}
      />

<Button
        type="submit"
        variant="contained"
        color="success"
        fullWidth
        sx={{ mt: 2,backgroundColor:"red" }}
      >
       <PictureAsPdfIcon/> Upload PDF
      </Button>

      <Button
        type="submit"
        variant="contained"
        color="success"
        fullWidth
        sx={{ mt: 2 ,backgroundColor:"red"}}
      >
        Submit
      </Button>
    </Box>
  );
};

export default SyllabusForm;