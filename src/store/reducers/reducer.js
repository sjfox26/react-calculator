import * as actionTypes from '../actions';

const initialState = {
    displayValue: "0",
    operation: '',
    firstNumber: '',

};

function isNumber (item) {
    return /[0-9]+/.test(item);
}

function calculateAnswer(firstNum, op, secondNum) {
    switch (op) {
        case "+":
            return parseFloat(firstNum) + parseFloat(secondNum);
        case "-":
            return parseFloat(firstNum) - parseFloat(secondNum);
        case "*":
            return parseFloat(firstNum) * parseFloat(secondNum);
        case "/":
            return parseFloat(firstNum) / parseFloat(secondNum);
        default:
            return "ERROR";
    }
}

//PSEUDOCODE

//If the button is a number AND there is no operation, add it to display
//If the button is an operation, save the display string of numbers, save the operation, **and have the display number flash once
//If the button is another operation, replace the previously held operation (**display number flashes once)
//If operation is saved and another number is pressed, add that to display

//If "=" is pressed, calculate answer by:
    //Converting first number string to a number,
    //replacing operation string with corresponding math operation
    //Converting second number string to a number
    //Calculating the answer
    //Display the answer
    //Save the answer as firstNumber

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.TO_DISPLAY:
            const newState = Object.assign({}, state);

            //first number typed replaces 0 on display
            if ( state.displayValue === "0" && isNumber(action.payload) ){
                newState.displayValue = action.payload;
                //operation typed before number is ignored
            } else if ( state.displayValue === "0" && !isNumber(action.payload) ) {
                return newState;
                //operation typed while another operation is already present replaces prev operation
            } else if ( state.operation && !isNumber(action.payload) ) {
                if ( action.payload === "=") {
                    //if invalid, ignore
                    if (!state.firstNumber) {
                        return newState;
                    } else {
                        console.log("calling calcuateAnswer...");
                        let answer = calculateAnswer(state.firstNumber, state.operation, state.displayValue);
                        newState.displayValue = answer.toString();
                        newState.firstNumber = answer.toString();
                        newState.operation = '';
                    }
                } else {
                    newState.operation = action.payload;
                }
                //number typed with operation saved,
            } else if ( state.operation && isNumber(action.payload) ) {
                //first number typed after operation goes to display
                if ( state.firstNumber === state.displayValue) {
                    newState.displayValue = action.payload;
                } else {
                    //displayValue gets longer
                    newState.displayValue = state.displayValue + action.payload;
                }
                //operation typed with no previous operation present- save the display value, save the operation
            } else if ( !state.operation && !isNumber(action.payload) ) {
                newState.firstNumber = state.displayValue;
                newState.operation = action.payload;
            } else {
                //displayValue getting longer
                newState.displayValue = state.displayValue + action.payload;
            }
            return newState;
    }
    return state;
};

export default reducer;