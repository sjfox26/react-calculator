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

function inverseOrPercentage(op, displayVal) {
    switch (op) {
        case "+/-":
            return -parseFloat(displayVal);
        case "%":
            return parseFloat(displayVal)/100;
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
//add    +/-   .

//add % and logic
//add styles
//refactor possibly

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.TO_DISPLAY:
            const newState = Object.assign({}, state);

            //C button clears input and all state
            if (action.payload === "C") {
                newState.displayValue = "0";
                newState.operation = '';
                newState.firstNumber = '';
                //handles +/- and % buttons
            } else if ( action.payload === "+/-" || action.payload === "%") {
                if (state.displayValue === "0") {
                    return newState;
                } else {
                    let invOrPer = inverseOrPercentage(action.payload, state.displayValue);
                    newState.displayValue = invOrPer.toString();
                } //first number typed replaces 0 on display
            } else if ( state.displayValue === "0" && isNumber(action.payload) ){
                newState.displayValue = action.payload;
                //operation typed before number is ignored
            } else if (action.payload === ".") {
                    // ignore "." if the display value already has one
                    if ( state.displayValue.includes(".") && state.displayValue !== state.firstNumber ) {
                        return newState;
                    } else if ( state.displayValue === "0" || state.displayValue === state.firstNumber ) {
                        newState.displayValue = "0.";
                    } else {
                        newState.displayValue = newState.displayValue + ".";
                    }
            } else if ( state.displayValue === "0" && !isNumber(action.payload) ) {
                return newState;
                //operation is typed while another operation already present...
            } else if ( state.operation && !isNumber(action.payload) ) {
                //operation is "="
                if ( action.payload === "=") {
                    //if invalid, ignore
                    if (!state.firstNumber) {
                        return newState;
                    } else {
                        let answer = calculateAnswer(state.firstNumber, state.operation, state.displayValue);
                        newState.displayValue = answer.toString();
                        newState.firstNumber = answer.toString();
                        newState.operation = '';
                    }
                } else {
                    //operation not "=" so it replaces previous operation
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