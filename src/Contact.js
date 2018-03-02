import React from 'react';
import './css/contact.css'

let Contact = props => {
  return(
    <div className="contact-page">
      <h1>Contact</h1>
      <p>Phone: 308-380-6503</p>
      <p>e-mail: rogene@ro-onthego.com</p>
      {/* <form className="contact-form" onSubmit="submit">
      <label className="contact-form-label">
        name:
        <input className="contact-form-field" type="text" name="name"/>
      </label>
      <label className="contact-form-label">
        email:
        <input className="contact-form-field" type="email" name="email" />
      </label>
      <label className="contact-form-label">
        note:
        <textarea className="contact-form-field" type="text" name="note" />
      </label>
      <button className="contact-form-button" type="submit">Submit</button>
    </form> */}
    </div>
  )
}

export default Contact
