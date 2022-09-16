import React from 'react'

export default function Contact() {
  return (
    <div className="container" >
      <div className='titleDiv'>
        <h1 className='title'>CONTACT</h1>
      </div>
      <div className="row contactDiv">
        <div className="">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt" />
              <h4>Location:</h4>
              <p>Surulere, Lagos</p>
            </div>
            <div className="email">
              <i className="bi bi-envelope" />
              <h4>Email:</h4>
              <p>rhitanene@gmail.com</p>
            </div>
            <div className="phone">
              <i className="bi bi-phone" />
              <h4>Call:</h4>
              <p>+234 802 279 5736</p>
            </div>
          </div>
        </div>
        <div className="formDiv">
          <form className="">
            <div className="row" style={{width:"100%"}}>
              <div className="form-group">
                <input type="text" name="name" className="form-control field-divided" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control field-divided" name="email" id="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="form-group form" style={{marginTop:'5px'}}>
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group form">
              <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
            </div>
            <div className="contactButton"><button type="submit">Send Message</button></div>
          </form>
        </div>
      </div>
    </div>
  )
}
