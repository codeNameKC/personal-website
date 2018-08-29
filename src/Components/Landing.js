import React from 'react';
import { CardBody, Card, CardImg,  CardTitle, CardSubtitle, } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

/* TODOS
1. Make hover events
3. Add animations as the user scrolls down the page
4. Make a picture slide gallery, which loops through different images, or a Video
   Perhaps add text to the images in photoshop.
5. Take a Picture for the website.
6. Make it Mobile Friendly.
7. When displaying a popup center page, make the background become dark.
8. Make Nav bar sections different colours and make them display: block;
9. Make sure the website works on all browsers.
*/

const Landing = (props) => {

    //Remember Style can be defined with a regular object

    if (props.language === 'English') {
        return (
            <div
               
                style={{
                alignContent: 'center',
                justifyContent: 'center'
            }}>
                <main>
                    <div className="Landing">
                        
                       <h1
                            className="title animated zoomIn" style={{
                                style: 'bold'
                            }}>
                           Web Developer
                        </h1>
                        
                        <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <p style={{fontSize: '2rem'}}> Language:  </p> 
                        <button
                        style={{
                        marginLeft: '3%',
                        marginRight: '3%',
                       
                    }}
                        onClick={props.changeLanguage}>
                        English
                    </button>
                    </div >
                        <Card className="cardImage animated zoomIn" style={{ marginTop: '1.5%'}} >
                               <CardImg top width="100%" src={require('../Resources/Images/picture-for-job-cropped.jpg')} alt="Card image cap" />
                               <CardBody>
                                 <CardTitle style= {{ fontSize: '2.5em'}}>Kacey Okafor</CardTitle>
                                 <CardSubtitle> Situated in Copenhagen</CardSubtitle>

                               </CardBody>
                             </Card>
                         <ScrollAnimation animateIn="rollIn" >
                        <h1 style={{padding: '0.8em'}} >
                            Table of Contents
                        </h1>
                        </ScrollAnimation>
                        <div style={{backgroundColor: 'grey', marginBottom: 20, borderRadius: '20px', border: '2px solid white', opacity: 0.6, width: '90%'}} >
                        <ul>
                            <a href="#About">
                                <li>
                                    About me
                                </li>
                            </a>

                            <a href="#Education">
                                <li>
                                    Education
                                </li>
                            </a>
                            <a href="#ExperienceAndSkills">
                            <li>
                                Experience and Skills
                            </li>
                            </a>
                            <a href="#WhyHireMe">
                                <li>
                                    Why Hire Me?
                                </li>
                            </a>
                        </ul>
                        </div>
                    </div>
                  
                    <nav>
                    <a href="#About" style={{width: '25%' }}><button className="nav" style={{ background: 'linear-gradient( rgb(8, 76, 99), rgb(124, 124, 194))'}}>
                           About
                        </button></a>
                        <a href="#Education" style={{width: '25%'}}> <button className="nav" style={{ background: 'linear-gradient( orange, yellow)'}}>
                           Education
                        </button></a>
                        <a href="#ExperienceAndSkills" style={{width: '25%'}}> <button className="nav" style={{ background: 'linear-gradient( red, pink)'}}>
                           Exp & Skills
                        </button></a>
                        <a href="#WhyHireMe"  style={{width: '25%'}} ><button className="nav" style={{background: 'linear-gradient( green, lightgreen)'}}>
                           Why Hire
                        </button> </a>
                    </nav>
                </main>

            </div>
        )

    } else {

        return (
            <div
                style={{
                alignContent: 'center',
                justifyContent: 'center'
            }}>
                <main>
                    <div className="Landing">
                    <h1
                            className="title animated zoomIn" style={{
                                style: 'bold'
                            }}>
                           Web Udvikler
                        </h1>
                        
                        <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <p style={{fontSize: '2rem'}}> Sprog:  </p> 
                        <button
                        style={{
                        marginLeft: '3%',
                        marginRight: '3%',
                       
                    }}
                        onClick={props.changeLanguage}>
                        Danish
                    </button>
                    </div>
                        <Card className="cardImage animated zoomIn">
                               <CardImg top width="100%" src={require('../Resources/Images/picture-for-job-cropped.jpg')} alt="Card image cap" />
                               <CardBody>
                                 <CardTitle style= {{ fontSize: '2.5em'}}> Kacey Okafor </CardTitle>
                                 <CardSubtitle>Bosat i København </CardSubtitle>

                               </CardBody>
                             </Card>
                             <ScrollAnimation animateIn="rollIn" >
                        <h1 style={{padding: '0.8em'}} className="animated zoomIn">
                            Indholds Fortegnelse
                        </h1>
                        </ScrollAnimation>
                        <div style={{backgroundColor: 'grey', marginBottom: 20, borderRadius: '20px', border: '2px solid white', opacity: 0.6, width: '90%'}}>
                        <ul>
                            <a href="#About">
                                <li>
                                    Om Mig
                                </li>
                            </a>

                            <a href="#Education">
                                <li>
                                    Uddannelse
                                </li>
                            </a>
                            <a href="#ExperienceAndSkills">
                            <li>
                                Erfaring og fagkompetencer
                            </li>
                            </a>
                            <a href="#WhyHireMe">
                                <li>
                                    Hvorfor Hyre Mig?
                                </li>
                            </a>
                        </ul>
                        </div>
                    </div>

                    <nav>
                    <a href="#About" style={{width: '25%' }}><button className="nav" style={{ background: 'linear-gradient( rgb(8, 76, 99), rgb(124, 124, 194))'}}>
                           Om Mig
                        </button></a>
                        <a href="#Education" style={{width: '25%'}}> <button className="nav" style={{ background: 'linear-gradient( orange, yellow)'}}>
                           Uddannelse
                        </button></a>
                        <a href="#ExperienceAndSkills" style={{width: '25%'}}> <button className="nav" style={{ background: 'linear-gradient( red, pink)'}}>
                           Erfaring
                        </button></a>
                        <a href="#WhyHireMe"  style={{width: '25%'}} ><button className="nav" style={{background: 'linear-gradient( green, lightgreen)'}}>
                           Hvorfor Hyre
                        </button> </a>
                    </nav>
                </main>

            </div>
        )

    };
};

export default Landing;
