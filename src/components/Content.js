import {Link} from 'react-router-dom'
import {useState} from 'react'
import { createBrowserHistory } from "history";
import { Label } from '@mui/icons-material';
/*This is the nav element of the app*/
import './Component.css'
function NavElement(props){
    return(
        <div className="navElement ">
            <Link className ="anchor" to={"/"+ props.link}>
                {props.name}
            </Link>
        </div>
    )
}


/*This is the main nav bar of the app*/
function Navbar(props){
    const [darkMode, setDarkMode] = useState(false)
    const [position, setPosition] = useState('start')

      
    return (
        <nav className="nav">
           
            <ul>
                {props.link.pathname === "/contact/" ? <NavElement 
                    name= "HOME"
                    link = ""
                />:
                
                <NavElement 
                    name= "CONTACT"
                    link = "contact/"
                />}
            
                
            </ul>
           { /*<p id="myname">magloire mukendi</p> */}
        </nav>
    )
}






function Footer(){
    return(
        <footer className ="footer light">
            <div>
                <a href="https://www.instagram.com/243stdio/" target="_blank">
                <span className='light'>                       
                        <i className="fa fa-instagram"></i>
                    </span>
                </a>
                <a href="https://www.linkedin.com/company/243studio" target="_blank">
                    <span className='light'>                        
                        <i className="fa fa-linkedin"></i>
                    </span>
                </a>
                <a href="https://github.com/243Studio" target="_blank">
                <span className='light'>                       
                        <i className="fa fa-github"></i>
                    </span>
                </a>
                
                <a href="https://www.facebook.com/243Studio" target="_blank">
                <span className='light'>                       
                        <i className="fa fa-facebook"></i>
                    </span>
                </a>
            </div>
                <p id="copyright" className='light'>© 243 Studio 2024 | affiliated to <a style={{color:'black'}}>wepo</a></p>
        </footer>
    )
    
}


export  {Navbar, Footer}