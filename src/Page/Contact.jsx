import React from 'react'
import "./Contact.css"
function ContactItem(props)
{
  return(
    <div className='contact-item-container'>
        <a className='contact-item' id={props.id} href={props.href}>{props.text}</a>
    </div>
  )
}
export default function Contact() {
  return (
    <div className='contact-container'>
      <h2 id="contact-title">Contactez-nous</h2>
      <ContactItem
      href='mailto:info@243studio.me'
      text="info@243studio.me"
      />
    </div>
  )
}
