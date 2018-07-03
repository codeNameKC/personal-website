import React from 'react';
import logo from '../logo.svg';
import './MultiplierStyles.css';
import {Dropdown, Message} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
//import '../semantic/dist/semantic.min.css';

/* TODOS
1. Make hover events
3. Add animations as the user scrolls down the page
4. Make a picture slide gallery, which loops through different images, or a Video
   Perhaps add text to the images in photoshop.
5. Take a Picture for the website.
6. Make it Mobile Friendly.
7. When displaying a popup center page, make the background become dark.
8. Make Nav bar sections different colours and make them display: block;
*/

const MultiplierDisplay = (props) => {

    //Remember Style can be defined with a regular object

    console.log(props.color)

    const popIn = {
        display: props.display
    }

    if (props.language === 'English') {
        return (
            <div
                className="grid"
                style={{
                alignContent: 'center',
                justifyContent: 'center'
            }}>
                <div className="Pictures"></div>
                <header>
                    <img
                        src={logo}
                        className="App-logo"
                        alt="logo"
                        style={{
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}/>
                    <h1
                        className="App-title"
                        style={{
                        color: 'white',
                        fontSize: '1.7em',
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}>
                        Made with React.js
                    </h1>
                    <button
                        style={{
                        width: '20%',
                        marginLeft: '5%',
                        marginRight: '5%',
                    }}
                        onClick={props.changeLanguage}>
                        Danish
                    </button>
                </header>
                <main>
                    <div className="Landing">
                        <p
                            className="title"
                            style={{
                            style: 'bold'
                        }}>
                            Front-end Developer for hire!
                        </p>
                        <video className="backgroundVideo" loop="true" autoPlay="true"
                        src={'https://www.videvo.net/videvo_files/converted/2015_01/preview/Shimmering_Particles.mov84952.webm'}
                     > </video>

                        <h2
                            style={{
                            color: 'white'
                        }}>
                            Kacey Okafor
                        </h2>
                        <img className="profilePic" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBgNJh0ECSnZ4DGhPZZ0k_1LQyIaQm7mw4OzGcIIhhyC7cPeE'}
                       />
                        <h3
                            style={{
                            color: 'white'
                        }}>
                            Situtated in Copenhagen
                        </h3>
                        <h1>
                            Table of Contents
                        </h1>
                        <div style={{backgroundColor: 'grey', marginBottom: 20, borderRadius: '20px', border: '2px solid white', opacity: 0.6, width: '90%'}}>
                        <ul>
                            <a href="#About">
                                <li>
                                    About me
                                </li>
                            </a>
                            <a href="#WhyHireMe">
                                <li>
                                    Why Hire Me?
                                </li>
                            </a>
                            <a href="#EducationAndExperience">
                                <li>
                                    Education and Experience
                                </li>
                            </a>
                            <a href="#ContactInformation">
                                <li>
                                    Contact Information
                                </li>
                            </a>
                        </ul>
                        </div>
                    </div>
                    <h1 id="WhyHireMe">
                        Why Hire Me?
                    </h1>
                    <div className="WhyHireMe">
                        <p className="textBody">
                            My job is my 1st priority. I arrive on time and do my best to finish the job on
                            time, even if it requires some of my free time. I am very passionate about programming. For that reason I won't mind learning new technologies at home if necessary.  
                        </p>
                        <h2
                            className="textBody"
                            style={{
                            borderRadius: '10px',
                            color: 'white'
                        }}>
                            Multiplier
                        </h2>
                        <p
                            style={{
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
                    <br/>
                    <h1 id="About">
                        About
                    </h1>
                    <div className="about">
                        <Link
                            to="/MyStory"
                            style={{
                            width: '60%'
                        }}>
                            <button>
                                My Story
                            </button>
                        </Link>
                        <p className="textBody">
                            I am very passionate about front end development.
                        </p>
                        <p>
                            Basic Info:
                        </p>
                        <ul>
                            <li>
                                Name: Kacey Okafor
                            </li>
                            <br/>
                            <li>
                                Nationality: Danish
                            </li>
                            <br/>
                            <li>
                                Country of Residence: Denmark, Copenhagen
                            </li>
                            <br/>
                            <li>
                                Fluent in: English, Danish
                            </li>
                        </ul>
                    </div>
                    <h1 id="EducationAndExperience">
                        Education and Experience
                    </h1>
                    <div className="experience" style={{textAlign: 'center'}}>


                       <ul> <li> I have completed courses on the following: HTML, CSS, Responsive Design, SASS, JavaScript, React.js on the website <strong>Codecademy:</strong> <a href="https://www.codecademy.com/boardSurfer56508" target="_blank"> https://www.codecademy.com/boardSurfer56508 </a> </li> 
                        <li>Completed a Udemy course on GitHub </li>
                        <li> Read parts of the official React and React Native documention + other </li>
                        <li> Coding tutorials on Youtube and articles have also taught me a lot  </li>
                        </ul>
                        
                       <p>
                        I am mostly experienced with front-end development, but also have some experience with backend work, such as using a database (MongoDB) and setting up an API for the front end with Node.js and the Express framework.     
                        </p>

                        <p className="experience" style={{marginTop: 50}} onClick={props.changeDisplay}>
                            HTML
                        </p>

                        <div className="popIn" style={popIn}>
                            <p
                                style={{
                                zIndex: 11,
                                textAlign: 'center'
                            }}
                                onClick={props.changeDisplay}>
                                I have used HTML to create the elements on this page.
                            </p>
                        </div>

                        <p
                            className="experience"
                            style={{
                            color: props.color
                        }}
                            onClick={props.changeColor} onClick={props.changeDisplay}>
                            CSS
                        </p>
                        <div className="popIn" style={popIn}>
                            <p
                                style={{
                                zIndex: 11,
                                textAlign: 'center'
                            }}
                                onClick={props.changeDisplay}>
                                -I have used CSS to style my webpage. 
                                -I have used media queries and responsive values such as percentages to make my page responsive. I am also familiar with preprocessors such as SASS for CSS. 
                            </p>
                        </div>
                        <p className="experience" onClick={props.changeDisplay}>
                            JavaScript
                        </p>
                        <div className="popIn" style={popIn}>
                            <p
                                style={{
                                zIndex: 11,
                                textAlign: 'center'
                            }}
                                onClick={props.changeDisplay}>
                                I have used JavaScript to write any functionality on this page.
                            </p>
                        </div>
                        <p className="experience" onClick={props.changeDisplay}>
                            React.js
                        </p>
                        <div className="popIn" style={popIn}>
                            <p
                                style={{
                                zIndex: 11,
                                textAlign: 'center'
                            }}
                                onClick={props.changeDisplay}>
                                -Mainly use React.js for my projects. 
                                -Use Redux as my state manager. 
                            </p>

                        </div>
                        <p className="experience" onClick={props.changeDisplay}>
                            Github
                        </p>
                        <div className="popIn" style={popIn}>
                            <p
                                style={{
                                zIndex: 11,
                                textAlign: 'center'
                            }}
                                onClick={props.changeDisplay}>
                                I use GitHub to have version control for my project.
                            </p>

                        </div>
                        <p className="experience" onClick={props.changeDisplay} style={{marginBottom: 20}}>
                            React Native
                        </p>
                        <div className="popIn" style={popIn}>
                            <p
                                style={{
                                zIndex: 11,
                                textAlign: 'center',
                                marginBottom: 50
                            }}
                                onClick={props.changeDisplay}>
                                I have used React Native to work on mobile apps for both iOS and Android
                                devices.
                            </p>

                        </div>
                    </div>
                    <nav>
                    <a href="#About" style={{width: '25%', background: 'linear-gradient( rgb(8, 76, 99), rgb(124, 124, 194))'}}><p style={{  }}className="nav" >
                            About
                        </p></a>
                        <a href="#WhyHireMe" style={{width: '25%', background: 'linear-gradient( green, lightgreen)'}}><p className="nav">
                            Why Hire
                        </p> </a>
                        <a href="#EducationAndExperience" style={{width: '25%', background: 'linear-gradient( orange, yellow)'}}> <p className="nav"> 
                            Skills
                        </p></a>
                        <a href="#ContactInformation" style={{width: '25%', background: 'linear-gradient( purple, pink)'}}><p className="nav">
                                    Contact Information
                             </p>
                        </a>
                    </nav>
                </main>
                <footer id="ContactInformation">
                    <p
                        style={{
                        marginLeft: 20,
                        fontWeight: 'bold',
                        color: 'black'
                    }}>
                        Contact information:
                    </p>
                    <ul
                        style={{
                        color: 'black',
                        borderWidth: 0,
                        marginBottom: 45, 
                    }}>
                        <li>
                            Mobile number: +45 93 85 92 36
                        </li>
                        <li>
                            Email Address: kaceyokafor@gmail.com
                        </li>
                    </ul>
                </footer>
            </div>
        )

    } else {






        
        return (
            <div
                className="grid"
                style={{
                alignContent: 'center',
                justifyContent: 'center'
            }}>
                <header>
                    <img
                        src={logo}
                        className="App-logo"
                        alt="logo"
                        style={{
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}/>
                    <h1
                        className="App-title"
                        style={{
                        color: 'white',
                        fontSize: '1.7em',
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}>
                        Lavet med React.js
                    </h1>
                    <button
                        style={{
                        width: '10%',
                        marginLeft: '5%'
                    }}
                        onClick={props.changeLanguage}>
                        English
                    </button>

                </header>
                <main>
                    <div className="boxAnimation"></div>
                    <p
                        className="title"
                        style={{
                        style: 'bold'
                    }}>
                        Front-end Developer til hyre!
                    </p>
                    <img
                        className="picture"
                        src={require('../Resources/Images/fall-suit-instagram.jpg')}
                        style={{
                        width: '94%',
                        height: '24%',
                        objectFit: 'contain'
                    }}/>
                    <h2>
                        Kacey Okafor
                    </h2>
                    <h3 style={{
                        marginTop: '-2.7%'
                    }}>
                        Bosat i København
                    </h3>
                    <h1>
                        Om mig
                    </h1>
                    <Link
                        to="/MyStory"
                        style={{
                        width: '60%'
                    }}>
                        <button>
                            Min baghistorie
                        </button>
                    </Link>
                    <p className="textBody">
                        Jeg går højt op i front-end development.
                    </p>
                    <h1>
                        Hvad du kan forvente
                    </h1>
                    <p className="textBody">
                        Mit job er min første prioritet. I arrive on time and do my best to finish the
                        job on time, even if it requires some of my free time.
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
                        Tæller: {props.number}
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
                </main>
                <aside className="left">
                    <p>
                        Erfaren med:
                    </p>

                    <ul
                        style={{
                        textDecoration: 'underline'
                    }}>
                        <li id="htmlText" onClick={props.changeDisplay}>
                            HTML
                        </li>
                        <br/>
                        <li
                            style={{
                            color: props.color
                        }}
                            onClick={props.changeColor}>
                            CSS
                        </li>
                        <br/>
                        <li>
                            JavaScript
                        </li>
                        <br/>
                        <li>
                            React.js
                        </li>
                        <br/>
                        <li>
                            Github
                        </li>
                        <br/>
                        <li>
                            React Native
                        </li>
                    </ul>
                </aside>
                <aside className="right">
                    <p>
                        Oplysninger:
                    </p>
                    <ul>
                        <li>
                            Navn: Kacey Okafor
                        </li>
                        <br/>
                        <li>
                            Nationality: Danish
                        </li>
                        <br/>
                        <li>
                            Country of Residence: Denmark, Copenhagen
                        </li>
                        <br/>
                        <li>
                            Fluent in: English, Danish
                        </li>
                    </ul>
                </aside>
                <footer>
                    <p
                        style={{
                        marginLeft: 20,
                        fontWeight: 'bold'
                    }}>
                        Kontakt information:
                    </p>
                    <ul>
                        <li>
                            Mobile number: +45 93 85 92 36
                        </li>
                        <li>
                            Email Addresse: kaceyokafor@gmail.com
                        </li>
                    </ul>
                </footer>
                <div style={popIn}>
                    <p
                        style={{
                        zIndex: 11,
                        textAlign: 'center'
                    }}
                        onClick={props.changeDisplay}>
                        I have used HTML to create the elements on this page.
                    </p>
                </div>
            </div>
        );
    };
};

export default MultiplierDisplay;
