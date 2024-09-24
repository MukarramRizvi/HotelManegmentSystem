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

const SubjectAdd = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    SubjectName: "",
    class: "",
    SelectGroup: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(database, "Subject"), data);
      navigate('/Subject/SubjectList'); // Navigate to StudentList after saving the data
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      
    </div>
    // <Box
    //   component="form"
    //   onSubmit={handleSubmit}
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     width: '100%',
    //     maxWidth: '400px',
    //     mx: 'auto',
    //     mt: 4,
    //   }}
    // >
    //   <Typography variant="h5" gutterBottom>
    //   Subject Add
    //   </Typography>
    //   <TextField
    //     label="Subject Name"
    //     name="SubjectName"
    //     variant="outlined"
    //     margin="normal"
    //     fullWidth
    //     required
    //     value={data.SubjectName}
    //     onChange={handleChange}
    //   />

    //   <TextField
    //     label="Class"
    //     name="class"
    //     variant="outlined"
    //     margin="normal"
    //     fullWidth
    //     type="number"
    //     required
    //     value={data.class}
    //     onChange={handleChange}
    //   />
    //   <FormControl component="fieldset" margin="normal" required>
    //     <FormLabel component="legend">SelectGroup</FormLabel>
    //     <RadioGroup
    //       name="SelectGroup"
    //       value={data.gender}
    //       onChange={handleChange}
    //       row
    //     >
    //       <FormControlLabel
    //         value="GeneralSciece"
    //         control={<Radio color="success" />}
    //         label="GeneralSciece"
    //       />
    //       <FormControlLabel
    //         value="Pre-Engineering"
    //         control={<Radio color="success" />}
    //         label="Pre-Engineering"
    //       />
    //     </RadioGroup>
    //   </FormControl>
    //   <Button
    //     type="submit"
    //     variant="contained"
    //     color="success"
    //     fullWidth
    //     sx={{ mt: 2,backgroundColor:"red" }}
    //   >
    //     Submit
    //   </Button>
    // </Box>
  );
};

export default SubjectAdd;