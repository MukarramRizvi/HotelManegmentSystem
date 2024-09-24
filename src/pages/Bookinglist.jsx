import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Typography,
  Checkbox,
  TablePagination,
  useMediaQuery,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../Config/firebase';
import { useNavigate } from 'react-router-dom';

const bookingTitt = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const teacherCollection = collection(database, 'Teacher');
        const teacherSnapshot = await getDocs(teacherCollection);
        const teacherList = teacherSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTeachers(teacherList);
      } catch (error) {
        console.error('Error fetching Teachers: ', error);
      }
    };

    fetchTeachers();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          backgroundColor: 'black',
          padding: 2,
          mb: 2,
          position: 'relative',
          borderRadius: 1,
          boxShadow: 2,
        }}
      >
        <Typography variant={isMobile ? 'h5' : 'h4'} component="h1" align="center" color="white">
         Room Booking List
        </Typography>
        {/* <Button
          onClick={() => navigate('/Teacher/TeacherRegistration')}
          variant="contained"
          
          startIcon={<AddIcon />}
          sx={{
            backgroundColor:"white",
            color:"black" ,
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            [theme => theme.breakpoints.down('sm')]: {
              right: 8,
              top: 'auto',
              bottom: 8,
              transform: 'none',
            },
          }}
        >
          Add
        </Button> */}
      </Box>
      <TableContainer component={Paper} sx={{ maxWidth: '100%', overflowX: 'auto' }}>
        <Table aria-label="teacher table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Booking Date</TableCell>
              <TableCell>Address</TableCell>
              {!isMobile && <TableCell>phone</TableCell>}
       
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>{teacher.CustomerId}</TableCell>
                <TableCell>{teacher.fullName}</TableCell>
                <TableCell>{teacher.email}</TableCell>
                <TableCell>{teacher.BookingDate}</TableCell>
                <TableCell>{teacher.Address}</TableCell>
                {!isMobile && <TableCell>{teacher.phone}</TableCell>}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={teachers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};
export default bookingTitt;