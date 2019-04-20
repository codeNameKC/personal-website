import React from 'react';
import { CardBody, Card, CardImg,  CardTitle, CardSubtitle, } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { useTranslation } from 'react-i18next';



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
    const { t, i18n } = useTranslation('common');

        return (
            <div
               
                style={{
                alignContent: 'center',
                justifyContent: 'center'
            }}>
                <main>
                    <div className="Landing">
                            <h1
                                className="title animated zoomIn">
                            { t('landing.job-title') }
                            </h1>
                        
                        <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <p style={{fontSize: '2rem'}}> Language:  </p> 
                        <button
                        style={{
                        marginLeft: '3%',
                        marginRight: '3%',
                       
                    }}
                        onClick={() => i18n.changeLanguage('da')}>
                        Danish
                    </button>
                    <button
                        style={{
                        marginLeft: '3%',
                        marginRight: '3%',
                       
                    }}
                        onClick={() => i18n.changeLanguage('en')}>
                        English
                    </button>
                    </div >
                        <Card className="cardImage animated zoomIn" style={{ marginTop: '1.5%'}} >
                               <CardImg top width="100%" src={require('../Resources/Images/Office.jpg')} alt="Card image cap" />
                               <CardBody>
                                 <CardTitle style= {{ fontSize: '2.5em'}}>Kacey Okafor</CardTitle>
                                 <CardSubtitle> { t('landing.situated') }</CardSubtitle>

                               </CardBody>
                             </Card>
                         <ScrollAnimation animateIn="rollIn" >
                        <h1 style={{padding: '0.8em'}} >
                        { t('landing.contents') }
                        </h1>
                        </ScrollAnimation>
                        <div style={{backgroundColor: 'grey', marginBottom: 20, borderRadius: '20px', border: '2px solid white', opacity: 0.6, width: '90%'}} >
                        <ul>
                            <a href="#About">
                                <li>
                                { t('landing.about-me') }
                                </li>
                            </a>

                            <a href="#Education">
                                <li>
                                { t('landing.education') }
                                </li>
                            </a>
                            <a href="#ExperienceAndSkills">
                            <li>
                            { t('landing.experience') }
                            </li>
                            </a>
                            <a href="#WhyHireMe">
                                <li>
                                { t('landing.why-hire') }
                                </li>
                            </a>
                        </ul>
                        </div>
                    </div>
                  
                    <nav>
                    <a href="#About" style={{width: '25%', textAlign: 'center' }}><button>
                    { t('landing.about-me') }
                        </button></a>
                        <a href="#Education" style={{width: '25%'}}> <button>
                        { t('landing.education') }
                        </button></a>
                        <a href="#ExperienceAndSkills" style={{width: '25%' }}> <button>
                        { t('landing.experience') }
                        </button></a>
                        <a href="#WhyHireMe"  style={{width: '25%'}} ><button style={{ textAlign: 'center' }}>
                        { t('landing.why-hire') }
                        </button> </a>
                    </nav>
                </main>

            </div>
        )
};

export default Landing;
