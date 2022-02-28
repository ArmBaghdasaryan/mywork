import React from 'react';
import './courseComponent.css';
import { useHistory } from "react-router-dom";


const CourseComponent = () => {
    const history = useHistory();
    const course = [
        {
            url: 'javaScript',
            id: 3,
            title: 'JAVASCRIPT',
            text: "Նրանց, ովքեր ունեն HTML / CSS /  բազային գիտելիքներ և ցանկանումեն ձեռք բերել ամենաակտուալ ծրագրաորման լեզուներից մեկը "
        },
        {
            url: 'react',
            id: 4,
            title: 'REACT JS',
            text: " Նրանց, ովքեր ունեն HTML / CSS / JavaScript բազային գիտելիքներ և ցանկանում են ձեռք բերել ավելի " +
                "խորքային գիտելիքներ ու դառնալ ավելի պահանջված ու բարձր վարձատրվող մասնագետ։ "
        },
        {
            url: 'reactNative',
            id: 5,
            title: 'React Native',
            text: "Նրանց, ովքեր ցանկանումեն ստեղծել մոբայլ հավելվածներ Ios և Android  պլատֆոռմաների համար "
        },
        {
            url: 'phyton',
            id: 6,
            title: 'PYTHON Django',
            text: "Նրանց, ովքեր ցանկանումեն դառնալ ակտուալ Backend ծրագրաորող  "
        }
    ];
    return (
        <div className='d-flex'>
            <div className='sec2-component'>
                {
                    course.map(item => {
                        return <div key={item.id} className='sec2-component-item' onClick={() => { history.push(`/${item.url}`) }}>
                            <h5>{item.title}</h5>
                            <p>{item.text}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}



export default CourseComponent;