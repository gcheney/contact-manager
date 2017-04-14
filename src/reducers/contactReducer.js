import * as types from '../actions/actionTypes';


export default function contactReducer(state = [], action)  {
    switch (action.type) {
        case types.CREATE_CONTACT: 
            return [...state,
                Object.assign({}, action.contact)
            ];

        default:
            return state;
    }
}