
const initialState = {
    color: "yellow",
   display: "none",
   language: 'English',
}

const renderReducer = (state = initialState, action, event) => {
    
    switch (action.type) {
        case 'CHANGE_COLOR':
            //Update the store in an immutable way by creating a new state like below:
            if ( state.color === "blue") {
                color: state.color = "green"
              } else {
                  color: state.color = "blue"
              }
            return state = {
                ...state,
                //The below property overwrites the old state value, because it is further down.
               
            };
        case 'CHANGE_DISPLAY':
            if ( state.display === "none") {
            display: state.display = "flex"
            } else {
              display: state.display = "none"
            }
             return state = {
            ...state,
             };
             
        case 'CHANGE_LANGUAGE':
            if ( state.language === 'English') {
            language: state.language = 'Danish';
            } else {
              language: state.language = 'English';
            }
             return state = {
            ...state,
             };
        default:
            return state;
    }
}

export default renderReducer;