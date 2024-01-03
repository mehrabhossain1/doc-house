import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div className='flex h-screen'>
      {/* Left Side - Navigation */}
      <div className='w-1/4 bg-gray-800 p-6'>
        <ul className='space-y-4'>
          <li className='text-white'>All Users</li>
          <li className='text-white'>Add a Doctor</li>
          <li className='text-white'>Manage Doctors</li>

          <li className='text-white'>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </div>

      {/* Right Side - Cards */}
      <div className='w-3/4 p-6'>
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
      </div>
    </div>
  )
}
