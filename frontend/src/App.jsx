import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import NotFound from "./pages/NotFound";

import PrivateRoute from "./routes/PrivateRoute";
import RoleBasedRoute from "./routes/RoleBasedRoute";

// Admin Pages
import AdminLayout from "./pages/Admin/Layout";
import AdminDashboard from "./pages/Admin/Dashboard";
import ManageUsers from "./pages/Admin/ManageUsers";
import Analytics from "./pages/Admin/Analytics";
import AdminSettings from "./pages/Admin/Settings";

// Alumni Pages
import AlumniLayout from "./pages/Alumni/Layout";
import AlumniDashboard from "./pages/Alumni/Dashboard";
import Events from "./pages/Alumni/Events";
import Connections from "./pages/Alumni/Connections";
import AlumniProfile from "./pages/Alumni/Profile";

// Student Pages
import StudentLayout from "./pages/Student/Layout";
import StudentDashboard from "./pages/Student/Dashboard";
import Opportunities from "./pages/Student/Opportunities";
import Mentorship from "./pages/Student/Mentorship";
import StudentProfile from "./pages/Student/Profile";

// Faculty Pages
import FacultyLayout from "./pages/Faculty/Layout";
import FacultyDashboard from "./pages/Faculty/Dashboard";
import ManageSessions from "./pages/Faculty/ManageSessions";

function App() {

  return (
    <>
     <h1 className='text-2xl font-bold text-center border-4 border-red-500' >Alumni Collect Platform</h1>
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
        
        {/* Admin */}
        <Route element={<RoleBasedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Route>

        {/* Alumni */}
        <Route element={<RoleBasedRoute allowedRoles={["alumni"]} />}>
          <Route path="/alumni" element={<AlumniLayout />}>
            <Route index element={<AlumniDashboard />} />
            <Route path="events" element={<Events />} />
            <Route path="connections" element={<Connections />} />
            <Route path="profile" element={<AlumniProfile />} />
          </Route>
        </Route>

        {/* Student */}
        <Route element={<RoleBasedRoute allowedRoles={["student"]} />}>
          <Route path="/student" element={<StudentLayout />}>
            <Route index element={<StudentDashboard />} />
            <Route path="opportunities" element={<Opportunities />} />
            <Route path="mentorship" element={<Mentorship />} />
            <Route path="profile" element={<StudentProfile />} />
          </Route>
        </Route>

        {/* Faculty */}
        <Route element={<RoleBasedRoute allowedRoles={["faculty"]} />}>
          <Route path="/faculty" element={<FacultyLayout />}>
            <Route index element={<FacultyDashboard />} />
            <Route path="sessions" element={<ManageSessions />} />
          </Route>
        </Route>

      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>    
    </>
  )
}

export default App
