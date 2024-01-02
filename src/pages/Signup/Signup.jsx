import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { createUser } = useContext(AuthContext)

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user
      console.log(loggedUser)
    })
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <form
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Name
          </label>
          <input
            {...register('name', {
              required: 'Name is required',
              maxLength: { value: 50, message: 'Name is too long' },
            })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? 'border-red-500' : ''
            }`}
          />
          {errors.name && (
            <p className='text-red-500 text-xs italic'>{errors.name.message}</p>
          )}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Email
          </label>
          <input
            type='email'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? 'border-red-500' : ''
            }`}
          />
          {errors.email && (
            <p className='text-red-500 text-xs italic'>
              {errors.email.message}
            </p>
          )}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='password'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Password
          </label>
          <input
            type='password'
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password ? 'border-red-500' : ''
            }`}
          />
          {errors.password && (
            <p className='text-red-500 text-xs italic'>
              {errors.password.message}
            </p>
          )}
        </div>
        <div className='mb-6'>
          <input
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer'
          />
          <Link
            to='/login'
            className='text-blue-500 hover:text-blue-700 text-sm'
          >
            Already have an account? Login
          </Link>
        </div>
      </form>
    </div>
  )
}
