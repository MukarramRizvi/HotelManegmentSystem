import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  Collapse,
  Button,
} from "@mui/material";
import { Inbox, Menu, ExpandLess, ExpandMore } from "@mui/icons-material";
import SchoolIcon from "@mui/icons-material/School";
import { Outlet, useNavigate } from "react-router-dom";
import images from "../../public/hotel-logo-design-service.png"


const drawerWidth = 240;

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [openStudents, setOpenStudents] = useState(false);
  const [openTeachers, setOpenTeachers] = useState(false);
  const [openSubjects, setOpenSubjects] = useState(false);
  const [openSchool, setOpenSchool] = useState(false);
  const [openSyllabus, setOpenSyllabus] = useState(false);
  const [openClass, setOpenClass] = useState(false);
  const [openFees, setOpenFees] = useState(false);
  const [openAdmission, setOpenAdmission] = useState(false);
  const [openExam, setOpenExam] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{ color: "black"}}>
        <List>
          {/* Students */}
          <ListItem button onClick={() => setOpenStudents(!openStudents)}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="User" sx={{ color: "black" }} />
            {openStudents ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openStudents} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => navigate("/student/StudentRegistration")}
              >
                <ListItemText
                  primary="User Registration"
                  sx={{ color: "black" }}
                />
              </ListItem>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => navigate("/student/StudentList")}
              >
                <ListItemText primary="User List" sx={{ color: "black" }} />
              </ListItem>
            </List>
          </Collapse>

          {/* Teachers */}
          <ListItem button onClick={() => setOpenTeachers(!openTeachers)}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Customer" sx={{ color: "black" }} />
            {openTeachers ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openTeachers} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => navigate("/Teacher/TeacherRegistration")}
              >
                <ListItemText
                  primary="Customer Registration"
                  sx={{ color: "black" }}
                />
              </ListItem>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => navigate("/Teacher/TeacherList")}
              >
                <ListItemText primary="Customer List" sx={{ color: "black" }} />
              </ListItem>
            </List>
          </Collapse>

          {/* Subjects */}
          <ListItem button onClick={() => setOpenSubjects(!openSubjects)}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Room" sx={{ color: "black" }} />
            {openSubjects ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSubjects} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => navigate("/Subject/SubjectAdd")}
              >
                <ListItemText primary="Room Registration" sx={{ color: "black" }} />
              </ListItem> */}
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => navigate("/Subject/SubjectList")}
              >
                <ListItemText primary="Room List" sx={{ color: "black" }} />
              </ListItem>
            </List>
          </Collapse>

          {/* School */}
          <ListItem button onClick={() => setOpenSchool(!openSchool)}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Booking" sx={{ color: "black" }} />
            {openSchool ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSchool} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => navigate("/Booking/BookingList")}
              >
                <ListItemText primary="Room Booking Registration" sx={{ color: "black" }} />
              </ListItem>
               <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => navigate("/Booking/BookingTittle")}
              >
                <ListItemText
                  primary="Booking List"
                  sx={{ color: "black" }}
                />
              </ListItem>
  
            </List>
          </Collapse>

          {/* Syllabus */}
          {/* <ListItem button onClick={() => setOpenSyllabus(!openSyllabus)}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Service" sx={{ color: "black" }} />
            {openSyllabus ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSyllabus} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => navigate("/Syllabus/SyllabusForm")}
              >
                <ListItemText primary="Service Form" sx={{ color: "black" }} />
              </ListItem>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => navigate("/Syllabus/SyllabusList")}
              >
                <ListItemText primary="Service List" sx={{ color: "black" }} />
              </ListItem>
            </List>
          </Collapse>

          {/* Class */}
          {/* <ListItem button onClick={() => setOpenClass(!openClass)}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Staff" sx={{ color: "black" }} />
            {openClass ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openClass} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => navigate("/Class/ClassForm")}
              >
                <ListItemText primary="Staff Form" sx={{ color: "black" }} />
              </ListItem>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => navigate("/Class/ClassList")}
              >
                <ListItemText primary="Staff List" sx={{ color: "black" }} />
              </ListItem>
            </List>
          </Collapse> */}

          {/* Fees */}
          {/* <ListItem button onClick={() => setOpenFees(!openFees)}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Payment" sx={{ color: "black" }} />
            {openFees ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openFees} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => navigate("/Fee/FeeStructure")}
              >
                <ListItemText primary="Payment Structure" sx={{ color: "black" }} />
              </ListItem>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => navigate("/Fee/FeeVoucher")}
              >
                <ListItemText primary="Payment Voucher" sx={{ color: "black" }} />
              </ListItem>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => navigate("/Fee/FeeSubmission")}
              >
                <ListItemText primary="Payment Submission" sx={{ color: "black" }} />
              </ListItem>
            </List>
          </Collapse>

          {/* Admission */}
          {/* <ListItem button onClick={() => setOpenAdmission(!openAdmission)}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Report" sx={{ color: "black" }} />
            {openAdmission ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openAdmission} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => navigate("/Addmission/AddmissionForm")}
              >
                <ListItemText primary="Report Form" sx={{ color: "black" }} />
              </ListItem>
            </List>
          </Collapse> */}

          {/* Exam */}
          {/* <ListItem button onClick={() => setOpenExam(!openExam)}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Inventory" sx={{ color: "black" }} />
            {openExam ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openExam} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => navigate("/Exam/ExamSchedule")}
              >
                <ListItemText primary="Inventory Schedule" sx={{ color: "black" }} />
              </ListItem>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => navigate("/Exam/ExamResult")}
              >
                <ListItemText primary="Inventory Result" sx={{ color: "black" }} />
              </ListItem>
            </List>
          </Collapse>  */}
        </List>
      </Box>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ background: "black", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, background: "black" }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
          >
            {/* <SchoolIcon sx={{ mr: 2 }} /> */}
            <img width="70px" src={images
            } style={{marginRight:"15px"}} />
            <Box sx={{ fontFamily: "cursive", fontSize: 18 }}>
              The Hotel Management System
            </Box>
          </Typography>
          <IconButton edge="end" sx={{ ml: "auto" }}>
            <Button
              variant="contained"
              sx={{ color: "black", backgroundColor: "white" }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          display: { xs: "none", sm: "block" },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* Main Content Goes Here */}
        <Outlet />
      </Box>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Dashboard;
