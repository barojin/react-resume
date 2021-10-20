import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xlowzzv', 'template_4n9kxre', form.current, 'user_DbzniXj9XaflmiaGI4Hoj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" placeholder="Your name"/>
      <label>Email</label>
      <input type="email" name="email" placeholder="Your Email Address"/>
      <label>Subject</label>
      <input type="text" name="email" placeholder="Subject"/>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
