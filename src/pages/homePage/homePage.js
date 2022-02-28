import React from 'react';
import home from '../../photos/home.svg';
import './homePage.css';
import CourseComponent from "../../components/courseComponent";

const HomePage = () => {

    return (
        <div>
            <section className='sec1'>
                <div className='sec1-text'>
                    <h2> WEB MAGNAT </h2>
                    <p>Web Magnat-ը վեբ կայքերի պատրաստման և ուսուցման կենտրոն է։ Մենք շուկայոմ ենք  արդեն 4 տարի  և ունենք փորձառու, շուկայի պահանջներին բավարարող առաջադեմ մասնագետներ, ովքեր յուրաքանչյուրին ցուցաբերում են անհատական մոտեցում: </p>
                </div>
                <div className='sec1-photo'>
                    <img src={home} alt='home' />
                </div>
            </section>
            <section className='sec2'>
                <h2> Դասընթացներ </h2>

                <CourseComponent />

            </section>
        </div>
    )
}
export default HomePage;