import { useRef, useState  } from 'react';
import './App.css';

// components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WaitlistForm from './components/WaitlistForm';

// assets
import mockup1 from './assets/mockup-1.svg';
import mockup2 from './assets/mockup-2.svg';

// utils
import api from './utils/api';

function App() {
  const contact_ref = useRef(null);
  const form_ref = useRef(null);

  const [ loading, set_loading ] = useState(false);
  const [ error, set_error ] = useState(false)

  const handleSubmit = async (values, reset_form) => {
    set_loading(true)
    try {
      await api.submit(values)
      reset_form()

    } catch (error) {
      set_error(true)
    } finally {
      set_loading(false)
    }
  }

  const scroll_to_form = () => {
    form_ref.current.scrollIntoView({
      behaviour: "smooth"
    })
  }

  const scroll_to_ref = () => {
    contact_ref.current.scrollIntoView({
      behaviour:"smooth"
    })
  }

  return (
    <div className="__app bg-primary h-screen w-full overflow-auto">
      <Navbar handle_click={scroll_to_ref} />
      
      <section className='md:flex justify-between items-center px-8 md:px-16 md:h-screen mb-16'>

        <div className='flex-1 mb-16 md:mb-0'>
          <h1 className='text-5xl text-white font-bold text-4xl md:text-6xl mb-8'> Automate bills & payments like never before </h1>
          <div className='flex items-center bg-white w-96 p-2 rounded-xl'>
            <div className='text-center px-6 py-4 w-52 bg-primary rounded-xl cursor-pointer' onClick={scroll_to_form}>
              <p className='font-medium text-white'> Join the waitlist </p>
            </div>
            <div className='text-center px-6 py-4 w-44 cursor-pointer'>
              <p className='font-medium text-black'> About us </p>
            </div>
          </div>
        </div>

        <div className='flex-1 flex items-end relative'>
          <div className='relative z-10 md:-right-16'>
            <img src={mockup1} alt='Blinxqh app' />
          </div>
          <div className='relative -left-12 md:-left-0 bottom-2'>
            <img src={mockup2} alt='Blinxqh app' />
          </div>
        </div>
      </section>

      <section className='__formSection h-screen md:px-16 px-8 md:flex items-center justify-between' ref={form_ref}>
        <div className='__formHeading mb-16 md:mb-0 md:mr-32 md:w-[36rem]'>
          <h1 className='text-white text-4xl md:text-6xl font-bold'> Get notified <br /> when we launch </h1>
        </div>
        <div className='__form md:w-[32rem] bg-white px-8 py-10'>
          <WaitlistForm 
            handleSubmit={handleSubmit}
            loading={loading}
            error={error}
            set_error={set_error}
          />
        </div>
      </section>

      <Footer contact_ref={contact_ref} />
    </div>
  )
}

export default App;
