import React from 'react'
import "./Contact.css"
import {PopupButton} from 'react-calendly'

function ContactItem(props)
{
  return(
    <div className='contact-item-container'>
        <a className='contact-item' id={props.id} href={props.href}><h2 id="contact-title">Contactez-nous</h2> {props.text}</a>
    </div>
  )
}

function CalendlyWidget()
{
  return(
    <div id="calendly-button">
      <PopupButton
          className='popo'
          url="https://calendly.com/243studio/consultation-clone?hide_gdpr_banner=1"
          rootElement={document.getElementById("root")}
          text="Book consultation (FREE)"
          textColor="#ffffff"
          color="#007FFF"
          branding= "true"
          border="solid 10px black"
          styles={{
            height: '50px', 
            width: '300px', 
            borderRadius: '5px',
            border: 'solid 10pxblack', 
            fontSize: '15px', 
            fontWeight: 'bold', 
            color:'white', 
            backgroundColor:'#007FFF'
          }}
      />
    </div>
  )
}
export default function Contact() {
  return (
    <div className='gen-container' >
      <CalendlyWidget/>
        <h4>or</h4>
      <div className='contact-container'>
        
        <ContactItem
        href='mailto:info@243studio.me'
        text="info@243studio.me"
        />
      </div>
    </div>
  )
}
