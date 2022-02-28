import React from 'react';
import './contactPage.css';
import ContactForm from "../../components/contactForm";


const ContactPage = () => {
    return (
       <section className='count-sec'>
           <h2> Հետադարձ կապ </h2>
           <ContactForm button={'Հետադարձ կապ'}/>
       </section>
    )
}

export default ContactPage;