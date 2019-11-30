import { createStore } from 'redux';

const initialState = {
    auth: { loggedIn: false }
}

const store = createStore((state = initialState, action) => {
    console.log("Action",action);

    switch(action.type){

        case 'LOG_IN':
            return { ...state, auth: { loggedIn: true } };
            break;
        
        case 'LOG_OUT':
            return { ...state, auth: { loggedIn: false } };
            break;
        default:
            return state;
            break;
    }

});

export default store;