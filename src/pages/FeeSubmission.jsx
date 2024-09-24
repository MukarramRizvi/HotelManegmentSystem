import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,

} from '@mui/material';


const FeeSubmission = () => {
  

  return (
    <Box
      component="form"
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
        Payment For
      </Typography>
      <TextField
        label=" Name"
        name="Name"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        label="Class"
        name="Class"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        label="Amount"
        name="Amount"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        label="Payment Method"
        name="Payment Method"
        variant="outlined"
        margin="normal"
        fullWidth
        // type="number"
        required
      />
          <Button
        type="submit"
        variant="contained"
       
        fullWidth
        sx={{ mt: 2 ,backgroundColor:"red"}}
      >
        Submit
      </Button>
    </Box>
  );
};

export default FeeSubmission;