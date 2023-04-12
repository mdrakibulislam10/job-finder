import './App.css'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { Toaster } from 'react-hot-toast';

function App() {

  const navigation = useNavigation();

  return (
    <>

      {
        navigation.state === "loading"
          ? <span className='absolute top-32 md:top-40 -mt-2 text-lg left-2/4 -ms-12'>Loading...</span>
          : ""
      }

      <Outlet />
      <Footer />

      <Toaster />
    </>
  )
}

export default App;
