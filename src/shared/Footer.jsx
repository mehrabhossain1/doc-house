export const Footer = () => {
  return (
    <footer className='bg-[#F3F3F3] text-black p-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row md:justify-between'>
          {/* Left Section */}
          <div className='mb-4 md:mb-0'>
            <h3 className='text-2xl font-semibold mb-2'>Doctor House</h3>
            <p className='text-sm'>Your trusted healthcare provider</p>
          </div>

          {/* Right Section */}
          <div className='flex space-x-4'>
            <div>
              <h4 className='text-lg font-semibold mb-2'>Contact Us</h4>
              <p className='text-sm'>123 Medical Street</p>
              <p className='text-sm'>City, Country</p>
              <p className='text-sm'>info@doctorhouse.com</p>
            </div>
            <div>
              <h4 className='text-lg font-semibold mb-2'>Follow Us</h4>
              <div className='flex space-x-2'>
                <a href='#' className='text-sm hover:text-gray-500 transition'>
                  Facebook
                </a>
                <a href='#' className='text-sm hover:text-gray-500 transition'>
                  Twitter
                </a>
                <a href='#' className='text-sm hover:text-gray-500 transition'>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
