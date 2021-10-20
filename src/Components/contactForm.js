import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Fade, Slide } from "react-reveal";


export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xlowzzv', 'template_4n9kxre', form.current, 'user_DbzniXj9XaflmiaGI4Hoj')
      .then((result) => {
          alert(result.text + "! Your email sent successfully");
          e.target.reset()
      }, (error) => {
          alert(error.text);
      });
  };

  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
          {/*todo To Hojin Nam */}
            <p className="lead">Email SERVICE IS UNDER CONSTRUCTION</p>
          </div>
        </div>
      </Fade>

      <div className="row">
        <Slide left duration={1000}>
          <div className="eight columns">
            <form ref={form} onSubmit={sendEmail} id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="name"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="email"
                    placeholder="Your Email Address"
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="message"
                  ></textarea>
                </div>

                <div>
                {/*TODO <button className="submit">Submit</button> */}                
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>
        </Slide>

        <Slide right duration={1000}>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <img src="images/blackgoldwhite.png" alt="Logo" width="10%"/>
            </div>

          </aside>
        </Slide>
      </div>
    </section>
  );
};
