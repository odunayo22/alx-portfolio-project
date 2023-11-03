import React from 'react';
import './Contact.scss';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


{/*
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
*/}
const Contact  = () =>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_c092jtb', 'template_m8w8ayp', form.current, 'Yzv51p3VhzduYumtZ')
          
        e.target.reset()
        };
    return(
        <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

         <div className="container contact__container">
            <div className="contact__options">
            {/*}   <article className='contact__option'>
                <MdOutlineEmail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>odun4code@gmail.com</h5>
                <a href="mailto:odun4code@gmail.com" target="_blank"> Send a Message</a>
                </article> 
    */}
                <article className='contact__option'>
                 <RiMessengerLine className='contact__option-icon'/>
                <h4>Messenger</h4>
                <h5>Sakirat Oketoye</h5>
                <a href="https://m.me/profile.php?id=100083366096639&sk=about" target="_blank"> Send a Message</a>
                </article> 

                <article className='contact__option'>
                <BsWhatsapp className='contact__option-icon'/>
                <h4>WhatsApp</h4>
                <h5>07033895846</h5>
                <a href="https://api.whatsapp.com/send?phone=07033895846" target="_blank"> Send a Message</a>
                </article> 
            </div>
            {/* End of contact options */}
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder='Your Full Name' required />
                <input type="email" name="email" placeholder='Your Email' required />
                <textarea name='message' rows='7' placeholder='Your Message' required />
                <button type='submit' className='btn btn-primary' href= "mailto:odun4code@gmail.com" target="_blank">Send Message</button>
            </form>
         </div>
      

        </section>
    )
}

export default Contact;