import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../Config/firebase';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useNavigate } from 'react-router-dom';

const SyllabusList = () => {
  const [syllabusData, setSyllabusData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, 'Syllabus'));
        const syllabusList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSyllabusData(syllabusList);
      } catch (error) {
        console.error('Error fetching syllabus data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ mt: 4, width: '90%', mx: 'auto' }}>
      <Typography variant="h4" gutterBottom align="center">
        Syllabus List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Syllabus Name</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>PDF Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {syllabusData.map((syllabus) => (
              <TableRow key={syllabus.id}>
                <TableCell>{syllabus.SyllabusName}</TableCell>
                <TableCell>{syllabus.class}</TableCell>
                <TableCell>
                  <a href={syllabus.pdf} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<PictureAsPdfIcon />}
                    >
                      View PDF
                    </Button>
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SyllabusList;