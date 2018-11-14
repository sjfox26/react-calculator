import * as actionTypes from '../actions';

const initialState = {
    displayValue: 0
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.displayValue = state.displayValue + action.payload;
            return newState;
    }
    return state;
};

export default reducer;