import React from 'react';
import './footer.css';
import fb from '../../photos/fb.svg';
import phone from '../../photos/phone.svg';
import ln from '../../photos/linkedin.svg';
import instagram from '../../photos/instagram.svg';
import photo from '../../photos/footer.svg';
import map from '../../photos/map.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            {/* <h2> Հետադարձ կապ </h2> */}
            <div className='fot-item'>
                <ul>
                    <li>
                        <img src={phone} alt='phone' />
                        <span>+374 94 04 00 74</span>
                    </li>
                    <li>
                        <a href="https://www.google.com/maps/place/19a+%D4%BF%D5%B8%D6%80%D5%B5%D5%B8%D6%82%D5%B6%D5%AB+%D6%83%D5%B8%D5%B2%D5%B8%D6%81,+%D4%B5%D6%80%D6%87%D5%A1%D5%B6+0009/@40.1894415,44.5190589,17z/data=!4m13!1m7!3m6!1s0x406abcdfe5beeff9:0xd6be55d85e5d4255!2zMTlhINS_1bjWgNW11bjWgtW21asg1oPVuNWy1bjWgSwg1LXWgNaH1aHVtiAwMDA5!3b1!8m2!3d40.1894415!4d44.5212476!3m4!1s0x406abcdfe5beeff9:0xd6be55d85e5d4255!8m2!3d40.1894415!4d44.5212476" target='blank'>
                            <img src={map} alt='map' />
                            <span style={{ color: 'black' }}>Կորյուն 19a.0009</span>
                        </a>
                    </li>
                    <li className='fot-icon'>
                        <img src={instagram} alt='instagram' />
                        <a href="https://www.facebook.com/webmagnatllc" target='blank'>
                            <img src={fb} alt='fb' />
                        </a>

                        <img src={ln} alt='ln' />
                    </li>
                </ul>
                <div className='fot-photo'>
                    <img src={photo} alt='fot-photo' />
                </div>
            </div>
            <div className='fot-text'>
                <p>Web Magnat / Web Development and Training Company LLC</p>
            </div>
        </footer>
    )
}

export default Footer;