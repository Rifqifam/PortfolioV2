import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Experience from './pages/experience/experience';
import Profile from './pages/profile/profile';
import LandingPage from './pages/landingpage/landingpage';
import Contact from './pages/contact/contact';
import Header from './layout/header/header';
import Footer from './layout/footer/footer';

function App() {

  return (
    <>
      <Header/>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
