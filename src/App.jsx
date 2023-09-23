import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AdminLayout from './components/layout/AdminLayout'
import DashboardPage from './pages/DashboardPage'
// import LoginPage from './pages/LoginPage'
import StudentPage from './pages/StudentPage'
import TeacherPage from './pages/TeacherPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<DashboardPage />} /> */}
        {/* <Route path='login' element={<LoginPage />} /> */}
        <Route path='/' element={<AdminLayout />}>
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path='teachers' element={<TeacherPage />} />
          <Route path='students' element={<StudentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
