import React from 'react';
import './reactPage.css';
import photo from '../../photos/coursephoto.svg';
import { useHistory } from 'react-router-dom';




const ReactPage = () => {
    let history = useHistory();
    const getApply = () => {
        history.push('/apply')
    }
    return (
        <section className='react'>
            <h2>Դասընթացի ծրագիր</h2>
            <div>
                <ul>
                    <li>
                        <h4 className='react-1'> Ինչ է React-ը</h4>
                        <p>
                            Այս դասի շրջանակում կհասկանանք ինչու ստեղծվեց React-ը։ Նրա կոնցեպտները:
                            Դեկլերատիվը VS Իմպերատիվի:
                            Կոմպոնենտ արխիտեկտուրա:
                            Flux - One way data flow։
                            Ինչպես նաև կհասկանանք, թե ինչ առավելություններ ունի React գրադարանը, ։
                        </p>
                    </li>
                    <li>
                        <h4 className='react-2'> Վերջին սերնդի Javascript-ի կրկնություն </h4>
                        <p>Հասկանում ենք «let» և «const»-ը,
                            Arrow function,
                            Exports and imports,
                            Վերհիշում ենք class-ները Javascript-ում,
                            Destructuring,
                            Reference և Primitive տեսակների տարբերությունը
                        </p>

                    </li>
                    <li>
                        <h4 className='react-3'>Սովորում ենք React-ի հիմունքները` կառուցելով փոքր Web հավելված</h4>
                        <p>Միջավայրի կարգավորում:
                            Դատարկ պրոյեկտի ստեղծում՝ օգտագործելով create-react-app հրահանգը,
                            Պրոյեկտի կարգավորում,
                            Կլասսային և Ֆունկցիոնալ կոմպոնենտներ: JSX,
                            Props - Տվյալների փոխանցումը ժառանգ կոմպոնենտներին,
                            Տվյալների պահպանումն ու կառավարումը կոմպոնենտներում,
                            Տվյալների ստացում և դինամիկ փոփոխում,
                            Կոմպոնենտի կյանքի ցիկլերը
                        </p>
                    </li>
                    <li>
                        <h4 className='react-4'>Կատարելագործում ենք React-ը՝ կառուցելով  մեր ամբողջական մեծ պրոյեկտը</h4>
                        <p>
                            React forms և custom components,
                            Օգտատիրոջ գրանցում և մուտք,
                            Routing:  Դինամիկ թարմացնում ենք էջերը,
                            Տվյալների փոխանցումը ոչ ժառանգ կոմպոնենտներին – Redux,
                            Ծանոթություն Storage API-ի հետ: Redux data persistence,
                            Ասինքրոն Redux - Redux Thunk,
                            HOC pattern,
                            Container pattern
                        </p>
                    </li>
                    <li>
                        <h4 className='react-5'>Բոնուս</h4>
                        <p> Context API,
                            React պրոյեկտի օպտիմիզացում,
                            Webpack + Babel,
                            Advanced styling with Styled-components,
                            Custom hook-երի ստեղծում
                        </p>
                    </li>
                </ul>
                <div>
                    <h3>Դաընթացի տևողությունը՝ 2 ամիս </h3>
                    <h3>Դասընթացի արժեքը՝ 35,000 ՀՀ դրամ </h3>
                    <button onClick={getApply}>Գրանցվել</button>
                </div>
            </div>
            <div className='course-photo'>
                <img src={photo} align='photo' />
            </div>
        </section>
    )
}

export default ReactPage;