import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Outlet />
      <Footer />

      <Toaster />
    </>
  )
}

export default App;
