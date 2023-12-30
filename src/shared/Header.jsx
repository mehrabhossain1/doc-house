import logo from '../assets/logo.svg'

export const Header = () => {
  return (
    <div className='bg-[#07332F] w-[100%] h-[800px]'>
      {/* logo */}
      <div className='flex'>
        <img src={logo} alt='' />
        <p className='text-4xl font-bold'>
          <span className='text-[#F7A582]'>Doc</span>{' '}
          <span className='text-white'>House</span>
        </p>
      </div>

      {/* nav */}
      <div>
        <ul className='text-white'>
          <li>Home</li>
          <li>About</li>
          <li>Appointment</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  )
}
