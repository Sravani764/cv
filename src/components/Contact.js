import React from 'react';
import './../styles/Contact.css'; 
const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">Contact Me</h2>
      <p className="contact-description">
        If you have any questions or concerns, please don't hesitate to contact me.
        I am open to any work opportunities that align with my skills and interests.
      </p>
      <div className="contact-details">
        <p><strong>Email:</strong> <a href="mailto:sravanikarri764@gmail.com">sravanikarri764@gmail.com</a></p>
        <p><strong>Phone Number:</strong> <a href="tel:+91 9441765293">9441765293</a></p>
      </div>
    </section>
  );
};

export default Contact;
