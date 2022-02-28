import React, { useState } from 'react';
import './contacForm.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { RegistCreator, Thunkbmw } from '../../Reducer/RegistrReducer';

const ContactForm = () => {
    const [phone, setPhone] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    let dispatch = useDispatch()
    let Authorization = () => {
        dispatch(Thunkbmw(name, email, phone))

    }
    const isauth = useSelector(state => state.RegistrPage.isauth)
    const loading = useSelector(state => state.RegistrPage.loading)
    return (

        <>
            {loading && <div style={{ color: 'burlywood', fontSize: 20 }}> Ձեր հարցումը կատարվւմ է ․․․</div>}
            {isauth && <div style={{ color: '#51cee0', fontSize: 20 }}>
                Դուք հաջողությամբ գրանցվել եք, մեր աշխատակիցները շուտով կկապնվեն Ձեզ հետ
                <div className='file-send6'>

                    <button type={'button'}
                        onClick={() => { dispatch(RegistCreator(false)) }}
                        style={{ fontSize: 20 }}
                    >
                        ok
                    </button>
                </div>

            </div>}

            <form className='count-form'>

                <div className='count-form-input1'>
                    <div className='count-form-input'>
                        <input type={'text'} placeholder='Անուն' name={'firstName'}
                            onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className='count-form-input'>
                        <input type={'text'} placeholder='Ազգանուն' name={'lastName'}
                            onChange={(event) => { setEmail(event.target.value) }} />
                    </div>
                    <div className='count-form-input'>
                        <PhoneInput
                            international
                            initialValueFormat='national'
                            value={phone}

                            defaultCountry='AM'
                            onChange={setPhone}
                            name='phone'
                        />
                    </div>
                </div>
                <div className='file-send6'>
                    <button onClick={Authorization} type={'button'} >Գրանցվել</button>
                </div>
            </form>
        </>
    )
}


export default ContactForm;