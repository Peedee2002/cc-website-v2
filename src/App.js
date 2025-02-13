import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs';
import Resources from './pages/Resources';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='body'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/events' element={<Events />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/resources' element={<Resources />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
