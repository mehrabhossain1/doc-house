import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'

export const Header = () => {
  const ActiveLink = ({ to, children }) => {
    const location = useLocation()
    const isActive = location.pathname === to

    return (
      <Link
        to={to}
        className={`text-white ${
          isActive ? 'bg-[#F7A582]' : ''
        } p-2 rounded-md transition-all`}
      >
        {children}
      </Link>
    )
  }

  return (
    <div className='bg-[#07332F] w-[100%] h-[90px] text-white px-5 py-5'>
      {/* logo and nav */}
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <img src={logo} alt='' />
          <p className='text-4xl font-bold'>
            <span className='text-[#F7A582]'>Doc</span>{' '}
            <span className='text-white'>House</span>
          </p>
        </div>

        <div>
          <ul className='flex gap-6'>
            <ActiveLink to='/'>
              <li>Home</li>
            </ActiveLink>
            <ActiveLink to='/about'>
              <li>About</li>
            </ActiveLink>
            <ActiveLink to='/appointment'>
              <li>Appointment</li>
            </ActiveLink>
            <ActiveLink to='/dashboard'>
              <li>Dashboard</li>
            </ActiveLink>
            <ActiveLink to='/login'>
              <li>Login</li>
            </ActiveLink>
          </ul>
        </div>
      </div>
    </div>
  )
}
