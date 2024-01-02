import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96'>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='email'
          >
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            placeholder='Email'
          />
        </div>
        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='password'
          >
            Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='********'
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
          >
            Sign In
          </button>
          <Link
            to='/signup'
            className='text-blue-500 hover:text-blue-700 text-sm'
          >
            Don't have an account? Sign Up
          </Link>
        </div>
      </form>
    </div>
  )
}
