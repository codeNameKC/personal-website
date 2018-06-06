import React from 'react';
import MultiplierDisplay from '../StyleComponents/MultiplierDisplay';
import {connect} from 'react-redux';
import {multiplyAction, divideAction} from '../Redux/actions/multiplyActions';

class Multiplier extends React.Component {
    render() {
        console.log(this.props);
        const { number, handleClick, handleClick2 } = this.props;
        return (
        <MultiplierDisplay number={number} handleClick={handleClick} handleClick2={handleClick2}/>
    )
    }
};

const mapStateToProps = (state) => {
    return { number: state.multiplyReducer.number}
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (event) => {
            dispatch(multiplyAction)
        },
        handleClick2: (event) => {
            dispatch(divideAction)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Multiplier);