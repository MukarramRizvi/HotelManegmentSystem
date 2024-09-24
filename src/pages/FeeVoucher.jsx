import React from 'react';
import FeeVoucherCard from '../pages/FeeVoucherCard'; // Adjust the import path as needed
import { Grid } from '@mui/material';

const feeVouchers = [
  { className: 'Class 1', monthlyFee: 'Rs 500', yearlyFee: 'Rs 6000' },
  { className: 'Class 2', monthlyFee: 'Rs 600', yearlyFee: 'Rs 7200' },
  { className: 'Class 3', monthlyFee: 'Rs 700', yearlyFee: 'Rs 8400' },
  { className: 'Class 4', monthlyFee: 'Rs 800', yearlyFee: 'Rs 9600' },
  { className: 'Class 5', monthlyFee: 'Rs 900', yearlyFee: 'Rs 10800' },
  { className: 'Class 6', monthlyFee: 'Rs 1000', yearlyFee: 'Rs 12000' },
  { className: 'Class 7', monthlyFee: 'Rs 1100', yearlyFee: 'Rs 13200' },
  { className: 'Class 8', monthlyFee: 'Rs 1200', yearlyFee: 'Rs 14400' },
  { className: 'Class 9', monthlyFee: 'Rs 1300', yearlyFee: 'Rs 15600' },
];

const FeeVouchers = () => {
  return (
    
<Grid container>
  <Grid item xs={12} sm={12} md={12} lg={12}>
  {feeVouchers.map((voucher, index) => (
        <FeeVoucherCard
          key={index}
          className={voucher.className}
          monthlyFee={voucher.monthlyFee}
          yearlyFee={voucher.yearlyFee}
        />
      ))}
  </Grid>
</Grid>
  
  );
};

export default FeeVouchers;