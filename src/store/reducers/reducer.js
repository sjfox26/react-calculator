import * as actionTypes from '../actions';

const initialState = {
    displayValue: 0
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.displayValue = state.displayValue + 1;
            return newState;
    }
    return state;
};

export default reducer;