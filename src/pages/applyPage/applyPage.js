import React from 'react';
import ContactForm from "../../components/contactForm";
import './applyPage.css';


const ApplyPage = ()=> {
    return(
        <section  className='apply-sec'>
            <h2 className='apply-form'>Գրանցվել</h2>
            <ContactForm button={'Գրանցվել'}/>
        </section>
    )
}

export default ApplyPage;