import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../shared/Header'
import { Footer } from '../shared/Footer'

export const Main = () => {
  const location = useLocation()

  const noHeaderFooter =
    location.pathname.includes('login') || location.pathname.includes('signup')

  return (
    <div>
      {noHeaderFooter || <Header />}

      <Outlet />

      {noHeaderFooter || <Footer />}
    </div>
  )
}
