import React from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FeeVoucherCard = ({ className, monthlyFee, yearlyFee }) => {
  const navigate = useNavigate();
  
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 6,
        width: '100%', // Ensure the container takes full width
      }}
    >
      <Paper
        elevation={2}
        sx={{
          textAlign: 'center',
          p: 2,
          borderRadius: '8px',
          width: '100%', // Full width of the parent container
          maxWidth: 900, // Maximum width for large screens
          height: 280
        }}
      >
        <Typography style={{ fontFamily: 'fantasy', fontSize: 20 }} gutterBottom>
          Fee Voucher - {className}
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={6} style={{ textAlign: 'left', marginTop: 30 }}>
            <Typography style={{ color: "red", fontFamily: 'cursive', marginLeft: 20, fontSize: 18 }} variant="body1">
              Class
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'right', marginTop: 30 }}>
            <Typography style={{ color: "red", fontFamily: 'cursive', marginRight: 20, fontSize: 18 }} variant="body1">
              {className}
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ color: "red", fontFamily: 'cursive', marginLeft: 20, fontSize: 18 }} variant="body1">
              Monthly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ color: "red", fontFamily: 'cursive', marginRight: 20, fontSize: 18 }} variant="body1">
              {monthlyFee}
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ fontFamily: 'cursive', marginLeft: 20, fontSize: 18 }} variant="body1">
              Yearly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ fontFamily: 'cursive', marginRight: 20, fontSize: 18 }} variant="body1">
              {yearlyFee}
            </Typography>
          </Grid>
        </Grid>
        <Button onClick={()=>navigate('/Fee/FeeSubmission')}variant='contained' sx={{ backgroundColor:"red", marginTop: 2 }}>
          Pay Now
        </Button>
      </Paper>
    </Box>
  );
};

export default FeeVoucherCard;