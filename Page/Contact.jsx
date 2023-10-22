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
      href='mailto:creative243.studio@gmail.com'
      text="creative243.studio@gmail.com"
      />
      <ContactItem
      href='https://wa.me/15145898716'
      text="+1-514-589-8716"
      />
    </div>
  )
}
