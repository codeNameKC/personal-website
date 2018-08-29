import React from 'react';
import {Link} from 'react-router-dom';
import {ListGroup, ListGroupItem} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const AboutSection = (props) => {
    if (props.language === 'English') {
    return (

        <div
            className="about"
            style={{
            justifyContent: 'space-between',
            alignContent: 'space-between'
        }}>
        
            <h1 id="About">
                About Me
            </h1>
            <p className="textBody">
                I am a very passionate web developer, who can help your company create and
                design your website, add features and improve the user experience. I can also
                help develop cross platform mobile apps with React Native. I am not afraid to
                learn new technologies if necessary.
            </p>
            <Link to="/MyStory">
            <ScrollAnimation animateIn="zoomIn" >
                <button>
                    My Developer Story
                </button>
                </ScrollAnimation>
            </Link>
            <h3 style={{marginTop: '1.8em', color: 'white'}}>
              <strong>  Basic Info: </strong>
            </h3>
            <ListGroup
                style={{
                display: 'flex',
                alignContent: 'space-around',
                marginLeft: '5%',
                marginRight: '5%',
            }}>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}>
                    <strong>
                        Occupation:
                    </strong>
                    Web Development
                </ListGroupItem>
                <br/>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}>
                    Nationality: Danish
                </ListGroupItem>
                <br/>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}>
                    Country of Residence: Denmark, Copenhagen
                </ListGroupItem>
                <br/>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}>
                    Fluent in: English, Danish
                </ListGroupItem>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}>
                    Open to relocation?: Yes
                </ListGroupItem>
                <br/>
                <ScrollAnimation animateIn="jello" >
                <h3>
                    <strong>
                        Contact information:
                    </strong>
                </h3>
                </ScrollAnimation>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}>
                    Mobile number: +45 93 85 92 36
                </ListGroupItem>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}>
                    Email Address: kaceyokafor@gmail.com
                </ListGroupItem>

            </ListGroup>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        )
    } else {
        return (
            <div
                className="about"
                style={{
                justifyContent: 'space-between',
                alignContent: 'space-between'
            }}>
                <h1 id="About">
                    Om mig
                </h1>
                <p className="textBody">
                Jeg er en meget passioneret Web Developer,
                der kan hjælpe dit firma med at desgigne jeres hjemmeside, tilføje funktioner
                og forbedre brugererfaringen. Jeg kan også hjælpe med at udvikle en multi platform mobil app med React Native.
                Jeg er ikke bange for at lære nye teknologier hvis nødvendigt.

                </p>
                <Link to="/MyStory">
                <ScrollAnimation animateIn="zoomIn" >
                    <button>
                        Min Developer historie
                    </button>
                    </ScrollAnimation>
                </Link>
                <h3 style={{marginTop: '1.8em', color: 'white'}}>
                  <strong>  Grund Informationer: </strong>
                </h3>
                <ListGroup
                    style={{
                    display: 'flex',
                    alignContent: 'space-around',
                    marginLeft: '5%',
                    marginRight: '5%',
                }}>
                    <ListGroupItem
                        style={{
                        backgroundColor: 'transparent',
                        color: 'white'
                    }}>
                        <strong>
                            Beskæftigelse:
                        </strong>
                        Web Development
                    </ListGroupItem>
                    <br/>
                    <ListGroupItem
                        style={{
                        backgroundColor: 'transparent',
                        color: 'white'
                    }}>
                        Nationalitet: Dansk
                    </ListGroupItem>
                    <br/>
                    <ListGroupItem
                        style={{
                        backgroundColor: 'transparent',
                        color: 'white'
                    }}>
                        Bopæl: Danmark, København område.
                    </ListGroupItem>
                    <br/>
                    <ListGroupItem
                        style={{
                        backgroundColor: 'transparent',
                        color: 'white'
                    }}>
                        Flyedende i: Engelsk & Dansk både mundtligt og skriftligt.
                    </ListGroupItem>
                    <ListGroupItem
                        style={{
                        backgroundColor: 'transparent',
                        color: 'white'
                    }}>
                        Åben over for udflytning?: Ja
                    </ListGroupItem>
                    <br/>
                    <ScrollAnimation animateIn="jello" >
                    <h3>
                        <strong>
                            Kontakt Informationer:
                        </strong>
                    </h3>
                    </ScrollAnimation>
                    <ListGroupItem
                        style={{
                        backgroundColor: 'transparent',
                        color: 'white'
                    }}>
                        Mobil nummer: +45 93 85 92 36
                    </ListGroupItem>
                    <ListGroupItem
                        style={{
                        backgroundColor: 'transparent',
                        color: 'white'
                    }}>
                        Email Addresse: kaceyokafor@gmail.com
                    </ListGroupItem>

                </ListGroup>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            )
    }
}

export default AboutSection;
