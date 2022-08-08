import data from "../components/data"
import {useState} from "react"
import portfolio from '../assets/img/portfolio.jpg'

/* This is a component to represent each book */


function Studio243(){
    const [book, setBook] = useState(data)

    return(
        <div className="hero">
            <div className="hero-intro">
            
            <p className="slogan"><em>Empowering Black People!</em></p>
            </div>
            <hr/>
            <img className="studio243"src={portfolio}/>

        </div>
    )
}


export default Studio243