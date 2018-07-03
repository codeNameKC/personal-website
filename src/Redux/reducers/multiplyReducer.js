const multiplyReducer = (state = {
    number: 1,
    name: 'Kacey'
}, action) => {
    
    switch (action.type) {
        case 'MULTIPLY':
            //Update the store in an immutable way by creating a new state like below:
            return state = {
                ...state,
                //The below property overwrites the old state value, because it is further down.
                number: state.number * action.payload
            };
            break; 
        case 'DIVIDE':
            return state = {
                ...state,
                number: state.number / action.payload
            };
            break; 
        default:
            return state;
    }
}

export default multiplyReducer;
