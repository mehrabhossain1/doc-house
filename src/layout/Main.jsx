import { Outlet } from 'react-router-dom'
import { Header } from '../shared/Header'
import { Footer } from '../shared/Footer'

export const Main = () => {
  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}
