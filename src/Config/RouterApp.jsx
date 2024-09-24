import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LoginPage from '../Components/LoginPage'
import SignupPage from '../Components/SignupPage'
import Dashboard from '../Components/Dashboard'
import StudentRegisteration from '../pages/StudentRegisteration'
import Studentlist from '../pages/Studentlist'

import TeacherRegistration from '../pages/TeacherRegistration'
import TeacherList from '../pages/TeacherList'
import SubjectAdd from '../pages/SubjectAdd'
import SubjectList from '../pages/SubjectList'
import SyllabusForm from '../pages/SyllabusForm'
import SyllabusList from '../pages/Syllabuslist'
import ClassForm from '../pages/ClassForm'
import ClassList from '../pages/ClassList'
import FeeStructure from '../pages/FeeStructure'
import FeeVoucher from '../pages/FeeVoucher'
import FeeSubmission from '../pages/FeeSubmission'
import AddmissionForm from '../pages/AddmisionForm'
import ExamResult from '../pages/ExamResult'
import ExamSchedule from '../pages/Examschedule'
import Public_Routes from './Public_Routes'
import Private_Routes from './Private_Routes'
import Booking from '../pages/Booking'
import Bookinglist from '../pages/Bookinglist'





const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Public_Routes />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        </Route>
        <Route element={<Private_Routes />}>
        <Route path='/' element={<Dashboard />}>
          <Route path='/student/StudentList' element={<Studentlist />} />
          <Route path='/student/StudentRegistration' element={<StudentRegisteration />} />
          <Route path='/Teacher/TeacherRegistration' element={<TeacherRegistration />} />
          <Route path='/Teacher/TeacherList' element={<TeacherList />} />
          <Route path='/Subject/SubjectAdd' element={<SubjectAdd />} />
          <Route path='/Subject/SubjectList' element={<SubjectList/>} />
          <Route path='/Schoole/StudentRegistration' element={<StudentRegisteration />} />
          <Route path='/Schoole/TeacherRegistration' element={<TeacherRegistration />} />
          <Route path='/Syllabus/SyllabusForm' element={<SyllabusForm />} />
          <Route path='/Syllabus/SyllabusList' element={<SyllabusList />} />
          <Route path='/Class/ClassForm' element={<ClassForm />} />
          <Route path='/Class/ClassList' element={<ClassList />} />
          <Route path='/Fee/FeeStructure' element={<FeeStructure />} />
          <Route path='/Fee/FeeVoucher' element={<FeeVoucher />} />
          <Route path='/Fee/FeeSubmission' element={<FeeSubmission />} />
          <Route path='/Addmission/AddmissionForm' element={<AddmissionForm />} />
          <Route path='/Exam/ExamSchedule' element={<ExamSchedule />} />
          <Route path='/Exam/ExamResult' element={<ExamResult />} />
          <Route path='/Booking/BookingList' element={<Booking/>} />
          <Route path='/Booking/BookingTittle' element={<Bookinglist/>} />















        </Route>
        </Route>
      </Route>
    )
  )
const RouterApp = () => {
  return <RouterProvider router={router} />
}

export default RouterApp