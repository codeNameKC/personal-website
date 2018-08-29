import React from 'react';
import {Collapse, UncontrolledCollapse, Button, CardBody, Card} from 'reactstrap';

const ExpAndSkillsSection = (props) => {

    console.log(props.collapse);

    /* const changedDisplay = () => {
        if (props.ReactPopIn.display === 'none') {
            props.ReactPopIn.popInStyle.display = 'flex'
        } else {
           props.ReactPopIn.display = 'none'
        }
    }*/

    const popIn = {
        display: props.display
    }

    if (props.language === 'English') {
    return (
        <div
            className="ExperienceAndSkills">
            <h1 id="ExperienceAndSkills">
                Experience and Skills
            </h1>
            <p className="textBody">
                I am mostly experienced with front-end development, but also have some
                experience with backend work, such as using a database (MongoDB) and setting up
                an API for the front end with Node.js and the Express framework.

                I have put theoretical knowledge to use through personal projects.
                <strong> Front-end: </strong>
                -Personal projects built with React.js:
                    -Social media website + app built with React.js and React Native respectively (not yet released)
                    -Personal website with responsive design
                    <div style={{width: '100%', height: '5px', color: 'white'}}>
                        </div>
                <strong> Back-end: </strong>
                    -Created a REST API with Express.js for a my React.js front-end.
                    -Used MongoDB to save data
                  Prior to becoming a web developer, I have worked on native Android app development, using Android Studio and Java code.
                <strong> Below is a list of Skills and how I have made use of them: </strong>
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
                        I have used HTML to create the elements on this page.
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
                        I have used CSS to style my webpage. <br/> I have used media queries and responsive
                        values such as percentages to make my page responsive. <br/> I am also familiar with
                        preprocessors such as SASS for CSS.
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
                        I have used JavaScript to write any functionality on this page.
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
                        -Mainly use React.js for my projects.  I use Redux as my state manager.
                        I have made an example below, where I follow the Redux flow of dispatching an action to a reducer which changes the state in an immutable way:
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
                        I use GitHub to have version control for my project. It's fairly recently that I've begun to use Git and GitHub, but I know what it's all about and have good notes for it. My GitHub page can be found at:
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
                        I have used React Native to work on mobile apps for both iOS and Android
                        devices.
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
    } else {
        return (
            <div
                className="ExperienceAndSkills">
                <h1 id="ExperienceAndSkills">
                    Experience and Skills
                </h1>
                <p>
                
                    
                    Jeg er mest erfaren med Front-end Development, 
                    men har også noget erfaring med Back-end arbejde, 
                    såsom at bruge en database (MongoDB) og opstillelsen af en API til min Front-end med Node.js og Express framework. 

                    Jeg har  anvendt mit teoretiske viden gennem mine selvstændige projekter. 
                    <strong> Front-end: </strong>
                    -Egne projekter bygget med React.js:
                        -Social medie hjemmeside + app bygget med React.js and React Native henholdsvis (ikke udgivet endnu)
                        -Min personlige hjemmeside lavet med Responsive Design (Denne hjemmeside)
                    <strong> Back-end: </strong>
                        -Created a REST API with Express.js for a my React.js front-end.
                        -Har lavet en REST API med Express.js framework til min React.js front-end. 
                         -Anvendt MongoDB databasen til at gemme data. 
                         Forud for at blive en Web Developer, har jeg arbejdet på native Android app udvikling, ved brug af Android Studio og Java programmering. 

                    <strong> Nedenstående er en liste af mine fagkompetencer og hvordan jeg har benyttet dem: </strong>
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
                            Jeg har anvendt HTML til at lave elementer på denne hjemmeside. 
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
                            Jeg har brugt CSS til at designe min hjemmeside. Jeg har gjordt brug af Media Queries og Responsive Design for at gøre denne side responsive over for diverse skærmstørrelser.
                            Jeg er bekendt med CCS pre-proccessors, ved at have anvendt SASS til at forkorte antal kode linjer på en smart måde, og så recompile dette til CSS med en CSS-watcher. 
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
                            Jeg har brugt JavaScript for at skrive funktionaliteterne på denne side. 
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
                            Jeg anvender hovedsageligt React.js til mine projekter. Jeg bruger Redux som min state manager. Jeg har lavet et eksempel på hvordan jeg bruger Redux:
                            , således at jeg dispatcher en action til en reducer der forandrer the state i en uforanderlig vis:
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
                            Multiplicer
                        </button>
    
                        <button
                            style={{
                            marginLeft: 2
                        }}
                            onClick={props.handleClick2}
                            title="Divide">
                            Divider
                        </button>
                    </div>
                    <br/>
                    </div>
                </Collapse>
                <p className="experience" id="GitHubToggler">
                    GitHub
                </p>
                <UncontrolledCollapse toggler="#GitHubToggler">
                    <div>
                        <p
                            style={{
    
                            textAlign: 'center'
                        }}
                        >
                            Jeg har brugt GitHub til at have version control i mine projekter. Det er fornyligt at jeg er begyndt at benytte GitHub, men jeg ved hvad det hele går ud på og har gode notater. Min GitHub side kan findes her: 
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
                            Jeg har brugt React Native til at arbejde på mobil apps til både iOS og Android enheder. 
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
}

export default ExpAndSkillsSection;
