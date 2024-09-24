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

const ClassList = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const classCollection = collection(database, 'Class');
        const classSnapshot = await getDocs(classCollection);
        const classList = classSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setClasses(classList);
      } catch (error) {
        console.error('Error fetching Classes: ', error);
      }
    };

    fetchClasses();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
      backgroundColor:"red",
          padding: 2,
          mb: 2,
          position: 'relative'
        }}
      >
        <Typography variant={isMobile ? 'h5' : 'h4'} component="h1" align="center" color="white">
          Class List
        </Typography>
        <Button
          onClick={() => navigate('/Class/ClassForm')} // Adjust route if needed
          variant="contained"
        
          startIcon={<AddIcon />}
          sx={{
            position: 'absolute',
            backgroundColor:"red",
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)'
          }}
        >
          Add
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="class table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Qualification</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {classes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((classItem) => (
              <TableRow key={classItem.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>{classItem.id}</TableCell>
                <TableCell>{classItem.firstName}</TableCell>
                <TableCell>{classItem.lastName}</TableCell>
                <TableCell>{classItem.email}</TableCell>
                <TableCell>{classItem.date}</TableCell>
                <TableCell>{classItem.Qualification}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={classes.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default ClassList;