import img1 from '../../assets/bannerImg1.jpeg'
import { Button } from '../../components/Button/Button'

export const Hero = () => {
  return (
    <div className='flex bg-[#07332F] h-[500px] justify-center items-center text-white px-40'>
      <div className='items-start space-y-10'>
        <h1 className='font-semibold text-7xl'>
          Your Best <span className='text-[#F7A582]'>Medical</span> Help Center
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
  )
}
