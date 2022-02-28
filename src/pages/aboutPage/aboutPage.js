import React from 'react';
import './aboutPage.css';
import photo1 from '../../photos/photo1.svg';
import photo4 from '../../photos/photo2.svg';
import photo3 from '../../photos/photo3.svg';
import photo2 from '../../photos/photo4.svg';


const AboutPage = () => {
    return (
        <section className='about-page'>
            <div className='about-first'>
                <div>
                    <img src={photo1} />
                </div>
                <div className='about-text'>
                    <h4>Մեր մասին </h4>
                    <p>Web Magnat-ը վեբ կայքերի պատրաստման և ուսուցման կենտրոն է։
                        Մենք շուկայոմ ենք  արդեն 4 տարի  և ունենք փորձառու, շուկայի պահանջներին բավարարող առաջադեմ մասնագետներ,
                        ովքեր յուրաքանչյուրին ցուցաբերում են անհատական մոտեցում:
                    </p>
                </div>
                <div>
                    <img src={photo2} />
                </div>
            </div>
            <div className='about-last'>
                <div>
                    <img src={photo3} />
                </div>
                <div>
                    <img src={photo4} />
                </div>
            </div>
        </section>
    )
}

export default AboutPage;