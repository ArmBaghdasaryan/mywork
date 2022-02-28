import React from 'react';
import './javaScript.css';
import photo from '../../photos/coursephoto.svg';
import { useHistory } from 'react-router-dom';


const JavaScriptPage = () => {
    let history = useHistory();
    const getApply = () => {
        history.push('/apply')
    }
    return (
        <section className='java-script'>
            <h2>Դասընթացի ծրագիր</h2>
            <div>
                <ul>
                    <li>
                        <h4 className='java-script-1'>Ինչ է JavaScript-ը</h4>
                        <p>JS-ի պատմություն, Ecmascript, Վերսիաներ, Աշխատանք DOM-ի հետ</p>
                    </li>
                    <li>
                        <h4 className='java-script-2'>Variables</h4>
                        <p> Variable Declaration, Var, Hoisting, Let, Const, Operators</p>
                    </li>
                    <li>
                        <h4 className='java-script-3'>Primitive Types</h4>
                        <p>Numbers, Strings, Booleans, Arrays</p>
                    </li>
                    <li>
                        <h4 className='java-script-4'>Conditions</h4>
                        <p>if/else, ternary, operator, switch</p>
                    </li>
                    <li>
                        <h4 className='java-script-5'>Loops</h4>
                        <p>For, While, Do While</p>
                    </li>
                    <li>
                        <h4 className='java-script-6'>Functions</h4>
                        <p>Function declaration | Function expression | Arrow function, Closure function | Callback function</p>
                    </li>
                    <li>
                        <h4 className='java-script-7'>Մեթոդներ</h4>
                        <p>Math օբյեկտ | String մեթոդներ | Զանգվածների մեթհոդները</p>
                    </li>
                    <li>
                        <h4 className='java-script-8'>Events</h4>
                        <p>setTimeout() | setInterval() | Event Loop</p>
                    </li>
                    <li>
                        <h4 className='java-script-9'>AJAX | API </h4>
                        <p>Promise | try-catch() | AJAX | API | async-await </p>
                    </li>
                </ul>
                <div>
                    <h3>Դաընթացի տևողությունը՝ 2 ամիս </h3>
                    <h3>Դասընթացի արժեքը՝ 35,000 դրամ  </h3>
                    <button onClick={getApply}>Գրանցվել</button>
                </div>

            </div>
            <div className='course-photo'>
                <img src={photo} align='photo' />
            </div>


        </section>
    )
}

export default JavaScriptPage;