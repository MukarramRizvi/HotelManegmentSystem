import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

const FeeStructure = () => {
  const classes = [
    { name: 'Class 1', monthlyFees: 'Rs 500', yearlyFees: 'Rs 6000' },
    { name: 'Class 2', monthlyFees: 'Rs 600', yearlyFees: 'Rs 7200' },
    { name: 'Class 3', monthlyFees: 'Rs 700', yearlyFees: 'Rs 8400' },
    { name: 'Class 4', monthlyFees: 'Rs 800', yearlyFees: 'Rs 9600' },
    { name: 'Class 5', monthlyFees: 'Rs 900', yearlyFees: 'Rs 10800' },
    { name: 'Class 6', monthlyFees: 'Rs 1000', yearlyFees: 'Rs 12000' },
    { name: 'Class 7', monthlyFees: 'Rs 1100', yearlyFees: 'Rs 13200' },
    { name: 'Class 8', monthlyFees: 'Rs 1200', yearlyFees: 'Rs 14400' },
    { name: 'Class 9', monthlyFees: 'Rs 1300', yearlyFees: 'Rs 15600' },
    { name: 'Class 10', monthlyFees: 'Rs 1400', yearlyFees: 'Rs 16800' },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', fontSize: 35, marginBottom: 4 }}>
        Fee Structure
      </Box>
      <Grid container spacing={2} justifyContent="center">
        {classes.map((cls, index) => (
          <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
            <Paper
              elevation={2}
              sx={{
                textAlign: 'center',
                p: 2,
                borderRadius: '8px',
                width: '100%',
              }}
            >
              <Typography style={{ fontFamily: 'revert' }} variant="h5" gutterBottom>
                {cls.name}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6} style={{ textAlign: 'left' }}>
                  <Typography style={{ color: "red", fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
                    Monthly Fees
                  </Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: 'right' }}>
                  <Typography style={{ color: "red", fontFamily: 'cursive', marginRight: 20 }} variant="body1">
                    {cls.monthlyFees}
                  </Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: 'left' }}>
                  <Typography style={{ fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
                    Yearly Fees
                  </Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: 'right' }}>
                  <Typography style={{ fontFamily: 'cursive', marginRight: 20 }} variant="body1">
                    {cls.yearlyFees}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FeeStructure;