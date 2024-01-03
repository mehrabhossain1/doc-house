import { Link, Outlet, useLocation } from 'react-router-dom'

export const Dashboard = () => {
  const location = useLocation()
  const isDashboard = location.pathname === '/dashboard'

  return (
    <div className='flex h-screen'>
      {/* Left Side - Navigation */}
      <div className='w-1/4 bg-gray-800 p-6'>
        <ul className='space-y-4'>
          <li className='text-white'>
            <Link to='/dashboard/all-users'>All Users</Link>
          </li>
          <li className='text-white'>
            <Link to='/dashboard/add-a-doctor'>Add a Doctor</Link>{' '}
          </li>
          <li className='text-white'>
            <Link to='/dashboard/manage-doctors'>Manage Doctors</Link>
          </li>
          <li className='text-white'>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </div>

      {/* Right Side - Cards */}
      <div className='w-3/4 p-6'>
        {!isDashboard ? (
          <Outlet />
        ) : (
          <div className='grid grid-cols-3 gap-6'>
            {/* Total Doctors Card */}
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-4'>Total Doctors</h3>
              {/* Add your content for total doctors here */}
            </div>

            {/* Total Patients Card */}
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-4'>Total Patients</h3>
              {/* Add your content for total patients here */}
            </div>

            {/* Appointments Card */}
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-4'>Appointments</h3>
              {/* Add your content for appointments here */}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
