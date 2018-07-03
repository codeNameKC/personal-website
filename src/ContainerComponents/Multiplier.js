import React from 'react';
import MultiplierDisplay from '../StyleComponents/MultiplierDisplay';
import {connect} from 'react-redux';
import {multiplyAction, divideAction, changecolorAction} from '../Redux/actions/multiplyActions';

class Multiplier extends React.Component {

   

    render() {
        console.log(this.props);
        const { number, handleClick, handleClick2, changeColor, changeLanguage } = this.props;
            
 
        return (
        <div> <MultiplierDisplay number={number} handleClick={handleClick} handleClick2={handleClick2}
        changeColor={changeColor} color={this.props.color} changeDisplay={this.props.changeDisplay} 
        display={this.props.display} changeLanguage={changeLanguage} language={this.props.language}/>
        </div>
    )
    }
};

const mapStateToProps = (state) => {
    return { 
        number: state.multiplyReducer.number,
        color: state.renderReducer.color,
        display: state.renderReducer.display,
        language: state.renderReducer.language,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (event) => {
            dispatch(multiplyAction)
        },
        handleClick2: (event) => {
            dispatch(divideAction)
        },
        changeColor: (event) => {
            dispatch(changecolorAction)
        },
        changeDisplay: (event) => {
            dispatch({ type: 'CHANGE_DISPLAY'})
        },
        changeLanguage: (event) => {
            dispatch({ type: 'CHANGE_LANGUAGE'})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Multiplier);