import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Landing from './SmallComponents/Landing';
import {connect} from 'react-redux';
import {multiplyAction, divideAction, changecolorAction} from '../Redux/actions/multiplyActions';
import WhyHireSection from './SmallComponents/WhyHireSection';
import AboutSection from './SmallComponents/AboutSection';
import EducationSection from './SmallComponents/EducationSection';
import ExpAndSkillsSection from './SmallComponents/ExpAndSkillsSection';
import '../Styles.css';

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        };
    }

    toggle = () => {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        console.log(this.props);
        const {number, handleClick, handleClick2, changeColor, changeLanguage} = this.props;

        return (
            <div>
                <Landing
                    number={number}
                    handleClick={handleClick}
                    handleClick2={handleClick2}
                    changeColor={changeColor}
                    color={this.props.color}
                    changeDisplay={this.props.changeDisplay}
                    display={this.props.display}
                    changeLanguage={changeLanguage}
                    language={this.props.language}/>
                <AboutSection {...this.props}/>
                <EducationSection {...this.props}/>
                <ExpAndSkillsSection
                    {...this.props}
                    collapse={this.state.collapse}
                    toggle={this.toggle}/>
                    <WhyHireSection {...this.props}/>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {number: state.multiplyReducer.number, color: state.renderReducer.color, display: state.renderReducer.display, language: state.renderReducer.language}
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
            dispatch({type: 'CHANGE_DISPLAY'})
        },
        changeLanguage: (event) => {
            dispatch({type: 'CHANGE_LANGUAGE'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);