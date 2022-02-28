
import { sendContact } from "../api";

import { REGISTR, LOADING, } from "./utils";

let initialState = {
    isauth: false,
    loading: false


};

const RegistReducer = (state = initialState, action) => {

    switch (action.type) {
        case REGISTR:
            return {
                ...state,
                isauth: action.isauth,

            }
        case LOADING:
            return {
                ...state,
                loading: action.loading
            }


        default: return state
    };


};

export let RegistCreator = (act) => {
    return {
        type: REGISTR,
        isauth: act
    }
};

export let LoadingCreator = (klyuch) => {
    return {
        type: LOADING,
        loading: klyuch
    }
};




export const Thunkbmw = (firstName, lastName, phone) =>

    async (dispatch) => {

        try {

            dispatch(LoadingCreator(true))
            let response = await sendContact(firstName, lastName, phone)
            dispatch(LoadingCreator(false))
            dispatch(RegistCreator(true))


        }
        catch (e) {


            alert('Դուք ճիշտ չեք մուտքագրում ձեր Անունը կամ Ազգանունը')

        }
    }



export default RegistReducer


