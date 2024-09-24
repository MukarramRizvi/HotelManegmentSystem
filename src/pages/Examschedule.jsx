import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Examschedule = () => {
  const examData = [
    {
      className: 'Class 1 - Mathematics',
      date: '2024-08-15',
      startTime: '09:00 AM',
      endTime: '12:00 PM',
    },
    {
      className: 'Class 1 - English',
      date: '2024-08-16',
      startTime: '10:00 AM',
      endTime: '01:00 PM',
    },
    {
      className: 'Class 2 - Science',
      date: '2024-08-17',
      startTime: '09:30 AM',
      endTime: '12:30 PM',
    },
    {
      className: 'Class 2 - History',
      date: '2024-08-18',
      startTime: '11:00 AM',
      endTime: '02:00 PM',
    },
    {
      className: 'Class 3 - Geography',
      date: '2024-08-19',
      startTime: '01:00 PM',
      endTime: '04:00 PM',
    },
    {
      className: 'Class 3 - Physics',
      date: '2024-08-20',
      startTime: '02:00 PM',
      endTime: '05:00 PM',
    },
    {
      className: 'Class 4 - Chemistry',
      date: '2024-08-21',
      startTime: '03:00 PM',
      endTime: '06:00 PM',
    },
    {
      className: 'Class 5 - Mathematics',
      date: '2024-08-22',
      startTime: '09:00 AM',
      endTime: '12:00 PM',
    },
    {
      className: 'Class 5 - English',
      date: '2024-08-23',
      startTime: '10:00 AM',
      endTime: '01:00 PM',
    },
    {
      className: 'Class 6 - Science',
      date: '2024-08-24',
      startTime: '09:30 AM',
      endTime: '12:30 PM',
    },
    {
      className: 'Class 6 - History',
      date: '2024-08-25',
      startTime: '11:00 AM',
      endTime: '02:00 PM',
    },
    {
      className: 'Class 7 - Geography',
      date: '2024-08-26',
      startTime: '01:00 PM',
      endTime: '04:00 PM',
    },
    {
      className: 'Class 7 - Physics',
      date: '2024-08-27',
      startTime: '02:00 PM',
      endTime: '05:00 PM',
    },
    {
      className: 'Class 8 - Chemistry',
      date: '2024-08-28',
      startTime: '03:00 PM',
      endTime: '06:00 PM',
    },
    {
      className: 'Class 9 - Mathematics',
      date: '2024-08-29',
      startTime: '09:00 AM',
      endTime: '12:00 PM',
    },
    {
      className: 'Class 9 - English',
      date: '2024-08-30',
      startTime: '10:00 AM',
      endTime: '01:00 PM',
    },
    {
      className: 'Class 10 - Physics',
      date: '2024-08-31',
      startTime: '11:00 AM',
      endTime: '02:00 PM',
    },
    {
      className: 'Class 10 - Chemistry',
      date: '2024-09-01',
      startTime: '01:00 PM',
      endTime: '04:00 PM',
    },
    {
      className: 'Class 10 - Mathematics',
      date: '2024-09-02',
      startTime: '09:00 AM',
      endTime: '12:00 PM',
    },

  ];

  return (
    <Box sx={{ padding: 2, width: { xs: '100%', sm: '90%', md: '80%' }, margin: '0 auto' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Exam Schedule
      </Typography>
      
      {examData.map((exam, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 2,
          }}
        >
          <Paper
            elevation={10}
            sx={{
              textAlign: 'center',
              p: 2,
              borderRadius: '8px',
              width: { xs: '100%', sm: '90%', md: '80%' }, // Responsive width
              maxWidth: 800,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ textAlign: 'left' }}>
                <Typography sx={{ fontFamily: 'fantasy', ml: 2 }} variant="body1">
                  {exam.className}
                </Typography>
                <Typography sx={{ ml: 2, mt: 1, fontSize: 20, color: 'gray' }} variant="body1">
                  Date: {exam.date}
                </Typography>
                <Typography sx={{ ml: 2, mt: 1, fontSize: 20, color: 'gray' }} variant="body1">
                  Start Time: {exam.startTime} | End Time: {exam.endTime}
                </Typography>
                <Button
                  sx={{
                  backgroundColor:"red",
                    border: 'none',
                    height: 30,
                    width: 120,
                    borderRadius: 3,
                    color: 'white',
                    mt: 2,
                    '&:hover': {
                      backgroundColor:"red"
                    },
                  }}
                >
                  View Details
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

export default Examschedule;