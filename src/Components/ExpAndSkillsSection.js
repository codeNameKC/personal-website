import React from 'react';
import {Collapse, UncontrolledCollapse, Button, CardBody, Card} from 'reactstrap';
import { useTranslation } from 'react-i18next';

const ExpAndSkillsSection = (props) => {

    console.log(props.collapse);

    /* const changedDisplay = () => {
        if (props.ReactPopIn.display === 'none') {
            props.ReactPopIn.popInStyle.display = 'flex'
        } else {
           props.ReactPopIn.display = 'none'
        }
    }*/

    const { t } = useTranslation('common');

    const popIn = {
        display: props.display
    }

    return (
        <div
            className="ExperienceAndSkills">
            <h1 id="ExperienceAndSkills">
            { t('exp-and-skills.exp-and-skills') }
            </h1>
            <p className="textBody">
            { t('exp-and-skills.experience-text.line-1') }
            { t('exp-and-skills.experience-text.line-2') }
               
                <strong> { t('exp-and-skills.list-of-skills') } </strong>
            </p>

            <p
                className="experience"
                id="HTMLtoggler"
                style={{
                marginTop: 50
            }}>
                HTML
            </p>
            <UncontrolledCollapse toggler="#HTMLtoggler">
                <div>
                    <p
                        style={{
                        zIndex: 11,
                        textAlign: 'center'
                    }}
                        onClick={props.changeDisplay}>
                       { t('exp-and-skills.html') }
                    </p>
                </div>
            </UncontrolledCollapse>
            <p
                className="experience"
                id="CSStoggler"
                style={{
                color: props.color
            }}
                onClick={props.changeColor}>
                CSS
            </p>
            <UncontrolledCollapse toggler="#CSStoggler">
                <div>
                    <p
                        style={{
                        zIndex: 11,
                        textAlign: 'center'
                    }}
                        onClick={props.changeDisplay}>
                        { t('exp-and-skills.css.line-1') } 
                        { t('exp-and-skills.css.line-2') }
                    </p>
                </div>
            </UncontrolledCollapse>
            <p className="experience" id="JavaScriptToggler">
                JavaScript
            </p>
            <UncontrolledCollapse toggler="#JavaScriptToggler">
                <div>
                    <p
                        style={{
                        zIndex: 11,
                        textAlign: 'center'
                    }}
                        onClick={props.changeDisplay}>
                       { t('exp-and-skills.javascript') }
                    </p>
                </div>
            </UncontrolledCollapse>
            <p className="experience" onClick={props.toggle}>
                React.js
            </p>
            <Collapse isOpen={props.collapse}>
                <div style={{
                  display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifyItems: 'center',
                }}>
                    <p style={{
                        textAlign: 'center'
                    }}>
                        { t('exp-and-skills.react.line-1') }
                        { t('exp-and-skills.react.line-2') }
                    </p>
                    <h2
                    className="textBody"
                    style={{
                    borderRadius: '10px',
                    color: 'white'
                }}>
                    Multiplier
                </h2>
                <p style={{
                    fontSize: '1.4em'
                }}>
                    Count: {props.number}
                </p>
                <div
                    className="multiplier"
                    style={{
                    width: '40%',
                    color: 'blue'
                }}>

                    <button
                        style={{
                        marginRight: 2,
                        marginBot: 4
                    }}
                        onClick={props.handleClick}
                        title="Multiply">
                        Multiply
                    </button>

                    <button
                        style={{
                        marginLeft: 2
                    }}
                        onClick={props.handleClick2}
                        title="Divide">
                        Divide
                    </button>
                </div>
                <br/>
                </div>
            </Collapse>
            <p className="experience" id="GitHubToggler">
                Github
            </p>
            <UncontrolledCollapse toggler="#GitHubToggler">
                <div>
                    <p
                        style={{

                        textAlign: 'center'
                    }}
                    >
                        { t('exp-and-skills.github-text') }
                         <a href="https://github.com/codeNameKC?tab=repositories"> https://github.com/codeNameKC?tab=repositories</a>
                    </p>

                </div>
            </UncontrolledCollapse>
            <p
                className="experience"
                id="ReactNativeToggler"
               >
                React Native
            </p>
            <UncontrolledCollapse toggler="#ReactNativeToggler">
                <div>
                    <p
                        style={{
                        zIndex: 11,
                        textAlign: 'center',
                        marginBottom: 50
                    }}
                        >
                        { t('exp-and-skills.react-native-text') }
                    </p>

                </div>
            </UncontrolledCollapse>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        )
}

export default ExpAndSkillsSection;
