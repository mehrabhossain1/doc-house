import logo from '../assets/logo.svg'
import img1 from '../assets/bannerImg1.jpeg'
import { Button } from '../components/Button/Button'
// import img2 from '../assets/bannerImg2.jpeg'
// import img3 from '../assets/bannerImg3.jpeg'

export const Header = () => {
  return (
    <div className='bg-[#07332F] w-[100%] h-[80vh]'>
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
            <li>Home</li>
            <li>About</li>
            <li>Appointment</li>
            <li>Login</li>
          </ul>
        </div>
      </div>

      {/* heading & image */}
      <div className='flex mt-10'>
        <div className='items-start'>
          <h1 className='font-semibold text-7xl'>
            Your Best Medical Help Center
          </h1>
          <p className='text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ipsum perferendis non, nihil incidunt magnam nisi sint mollitia, hic
            corrupti quibusdam dignissimos rerum inventore natus rem numquam ut
            beatae at.
          </p>
          <Button name='All Services' />
        </div>

        <div className='w-2/4'>
          <img className='h-64 w-64' src={img1} alt='' />
          {/* <img className='h-64 w-64' src={img2} alt='' />
          <img className='h-64 w-64' src={img3} alt='' /> */}
        </div>
      </div>
    </div>
  )
}
