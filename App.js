import {Routes, Route} from 'react-router-dom'
import { Navbar, Footer} from './components/Content';
import {useState, useEffect} from "react"
//import logo from './logo.svg';
import './App.css';
import Contact from './Page/Contact';
import Home from './Page/Home'
import { useLocation } from 'react-router-dom';

import NotFound from './Page/Notfound'


import Studio243 from './Page/Studio243'
import {BlogDetail, BlogList, EditorElement} from './Page'




// import {Wrapper, Status} from "@googlemaps/react-wrapper"
function App() {
  //const [state, setState] = useState()
  //const key ="AIzaSyB4eDBdG6YnpHEuodh2Wcr3rBIkEJeUowg"
  //const url ="https://maps.googleapis.com/maps/api/js?key="+key

  const [showButton, setShowButton] = useState(false);
  const [fixNav, setFixNav] = useState('fixed')
  const [currentUrl, setCurrentUrl] = useState(window.location.href)
  const location = useLocation();

  function checkScroll(){
       if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScroll )
    
    return () => window.removeEventListener("scroll", checkScroll )
  }, []);


  useEffect(() => {
  }, [location]);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };


 // const url2 = "https://swapi.dev/api/people/1"

  
  

  return (
    <div className="App light">
      <Navbar link={location}/>
      <div className="content">

      <Routes >
        <Route path='' element={<Home/>}/>

        <Route path="studio" element={<Studio243/>}/>
        <Route path="blog/" element = {<BlogList/>} />
        <Route path="blog/:id" element = {<BlogDetail/>} />
        <Route path="contact" element = {<Contact/>} />
        <Route path="/*" element={<NotFound/>}/>

      </Routes>
      </div>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
      <Footer/>
    </div>
  )
}

export default App;
