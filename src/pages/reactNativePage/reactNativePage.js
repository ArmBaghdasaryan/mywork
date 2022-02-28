import React from 'react';
import './reactNativePage.css';
import photo from '../../photos/coursephoto.svg';
import { useHistory } from 'react-router-dom';



const ReactNativePage = () => {
    let history = useHistory();
    const getApply = () => {
        history.push('/apply')
    }
    return (
        <section className='react-native'>
            <h2>Դասընթացի ծրագիր</h2>
            <div>
                <ul>

                    <li>
                        <h4 className='react-native-1'> Ինչ է React-ը,
                            React Native-ը</h4>
                        <p>
                            React Native-ի տեխնոլոգիաները, դրա արդիականությունը,
                        </p>
                    </li>
                    <li>
                        <h4 className='react-native-2'> React Native-ի աշխատանքի հիմնական սկզբունքները</h4>
                        <p>
                            պրոյեկտների կառուցվածքը, React vs React Native,
                            նոր կոմպոննետների ստեղծում  JSX-ի միջոցով,
                        </p>
                    </li>
                    <li>
                        <h4 className='react-native-3'> React Native Նավիգացիա </h4>
                        <p>
                            React Native-ի համար օգտագործվող  նավիգացիայի տեսակները
                            (Drawer,Button,Custom)

                        </p>
                    </li>
                    <li>
                        <h4 className='react-native-4'>Տվյալների հետ աշխատանք</h4>
                        <p>
                            HTTP, կոմպոնենտի կյանքի ցիկլեր, տվյալների ստացում, կոմպոնենտի ներկա վիճակը,
                            հարցումներ դեպի սերվեր, սերվերից պատասխանի ստացում
                        </p>
                    </li>
                    <li>
                        <h4 className='react-native-5'>Redux</h4>
                        <p>
                            ֆունկցիոնալ ծրագրավորման հիմունքեր, FLUX,  Redux-ի օգտագործման սկզբունքները,
                            Reducer, Redux-Thunk
                        </p>
                    </li>
                    <li>
                        <h4 className='react-native-6'>React-Hook</h4>
                        <p>
                            useState, useEffect, useReducer, useSelector, useDispatch, useMemo, useCallback
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

export default ReactNativePage;