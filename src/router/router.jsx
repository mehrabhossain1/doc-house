import { createBrowserRouter } from 'react-router-dom'
import { Main } from '../layout/Main'
import { Home } from '../pages/Home/Home'
import { Dashboard } from '../layout/Dashboard'
import { About } from '../pages/About/About'
import { Appointment } from '../pages/Appointment/Appointment'
import { Login } from '../pages/Login/Login'
import { Signup } from '../pages/Signup/Signup'

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
  },
])
