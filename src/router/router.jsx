import { createBrowserRouter } from 'react-router-dom'
import { Main } from '../layout/Main'
import { Home } from '../pages/Home/Home'
import { Dashboard } from '../layout/Dashboard'
import { About } from '../pages/About/About'
import { Appointment } from '../pages/Appointment/Appointment'
import { Login } from '../pages/Login/Login'
import { Signup } from '../pages/Signup/Signup'
import AllUsers from '../pages/Dashboard/AllUsers'
import ManageDoctors from '../pages/Dashboard/ManageDoctors'
import AddADoctor from '../pages/Dashboard/AddADoctor'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/appointment',
        element: <Appointment />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard/all-users',
        element: <AllUsers />,
      },
      {
        path: '/dashboard/add-a-doctor',
        element: <AddADoctor />,
      },
      {
        path: '/dashboard/manage-doctors',
        element: <ManageDoctors />,
      },
    ],
  },
])
