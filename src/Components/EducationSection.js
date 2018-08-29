import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import '../Styles.css';

const EducationSection = (props) => {
    if (props.language === 'English') {
     return (
        <div
            className="Education"
            style={{
            textAlign: 'center',
            justifyContent: 'space-between'
        }}>
            <h1 id="Education">
                Education
            </h1>

            <ListGroup
                style={{
                display: 'flex',
                alignContent: 'space-around',
                marginLeft: '5%',
                marginRight: '5%'
            }}>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}> 
                <ScrollAnimation animateIn="zoomIn" >
                <img className="iconsMan" src={'https://d3n8a8pro7vhmx.cloudfront.net/rebuildthedream/pages/3622/attachments/original/1447884001/Codecademy.png?1447884001'} style={{ objectfit: 'cover', width: '60%', marginBottom: '0.8em'}}/>
                </ScrollAnimation>
                <br/>
                    Completed courses on the following: <strong> <br/> -HTML <br/> -CSS <br/> -Responsive Design <br/> -SASS <br/>
                    -JavaScript <br/> -React.js <br/> </strong> on the website
                    <strong> Codecademy. </strong> Completed courses and activity on Codecademy can be seen on the following link:  <br/>
                    <a href="https://www.codecademy.com/boardSurfer56508" target="_blank">
                          https://www.codecademy.com/boardSurfer56508
                    </a>
                </ListGroupItem>

                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}> 
                  <ScrollAnimation animateIn="zoomIn" >
                <img  className="iconsMan" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'} style={{ objectfit: 'cover',  width: '45%'}}/>
                </ScrollAnimation>
                   <br/> Read the official React and React Native documention + other documentation: <br/>
                    <a href="https://reactjs.org/docs/hello-world.html" target="_blank">
                         https://reactjs.org/docs/hello-world.html
                    </a>
                </ListGroupItem>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}>
                  <ScrollAnimation animateIn="zoomIn" >
                <img  className="iconsMan" src={'https://cdn-images-1.medium.com/max/1200/1*QNimSWsBQxta_xt3XksQaw.png'} style={{ objectfit: 'cover', width: '20%'}}/>
                </ScrollAnimation>
                <br/> Earned a certificate on HTML and JavaScript on SoloLearn. <br/> HTML certificate: <br/>
                    <a href="https://www.sololearn.com/Certificate/1014-4201001/pdf/" target="_blank">
                       https://www.sololearn.com/Certificate/1014-4201001/pdf/
                    </a> <br/> JavaScript certificate: <br/>   <a href="https://www.sololearn.com/Certificate/1024-4201001/pdf/" target="_blank">
                    https://www.sololearn.com/Certificate/1024-4201001/pdf/
                      </a>
                </ListGroupItem>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}>
                  <ScrollAnimation animateIn="zoomIn" >
                 <img className="iconsMan" src={'http://pngimg.com/uploads/youtube/youtube_PNG1.png'} style={{ objectfit: 'cover',  width: '20%'}}/>
                  </ScrollAnimation>
                   <br/> Watched countless Coding Tutorials on Youtube, made by people with many years of experience such as:
                     <strong> thenewboston, Traversy Media </strong> and <strong> Academind. </strong>
                </ListGroupItem>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}> 
                  <ScrollAnimation animateIn="zoomIn" >
                <img className="iconsMan" src={'https://upload.wikimedia.org/wikipedia/commons/3/3e/W3Schools_logo.png'} style={{ objectfit: 'cover', width: '65%' }}/>
                </ScrollAnimation >
                <br/> W3schools has indepth and simple to understand documentation, which I have used to learn how to use various HTML elements, CSS properties and vanilla JavaSript.<br/>
                <a href="https://www.w3schools.com/" target="_blank">
                    https://www.w3schools.com/
                    </a>
                </ListGroupItem>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}>
                  <ScrollAnimation animateIn="zoomIn" >
                <img  className="iconsMan" src={'https://cdn.freebiesupply.com/logos/large/2x/udacity-logo-png-transparent.png'} style={{ objectfit: 'cover', width: '20%'}}/>
                 </ScrollAnimation>
                <br/> Completed a Udacity course about how to use GitHub: <br/>
                    <a href="https://eu.udacity.com/" target="_blank">
                         https://eu.udacity.com/
                    </a>
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
                className="Education"
                style={{
                textAlign: 'center',
                justifyContent: 'space-between'
            }}>
                <h1 id="Education">
                    Uddannelse
                </h1>

                <ListGroup
                    style={{
                    display: 'flex',
                    alignContent: 'space-around',
                    marginLeft: '5%',
                    marginRight: '5%'
                }}>
                    <ListGroupItem
                        style={{
                        backgroundColor: 'transparent',
                        color: 'white'
                    }}>
                      <ScrollAnimation animateIn="zoomIn" >
                     <img className="iconsMan" src={'https://d3n8a8pro7vhmx.cloudfront.net/rebuildthedream/pages/3622/attachments/original/1447884001/Codecademy.png?1447884001'} style={{ objectfit: 'cover', width: '60%', marginBottom: '0.8em'}}/>
                     </ScrollAnimation>
                    <br/>

                        Jeg har fuldført kurser om de følgende: <strong> HTML, CSS, Responsive Design, SASS, JavaScript, React.js </strong> på hjemmesiden:
                        <strong> Codecademy </strong> Fuldførte kurser og aktivitet på Codecademy kan ses på linket:
                         <br/>
                        <a href="https://www.codecademy.com/boardSurfer56508" target="_blank">
                              https://www.codecademy.com/boardSurfer56508
                        </a>
                    </ListGroupItem>

                    <ListGroupItem
                        style={{
                        backgroundColor: 'transparent',
                        color: 'white'
                    }}>
                     <ScrollAnimation animateIn="zoomIn" >
                     <img  className="iconsMan" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'} style={{ objectfit: 'cover',  width: '45%'}}/>
                      </ScrollAnimation>
                       <br/> Læst den officiele React og React Native Documentation + andet dokumentation:
                       <br/>
                        <a href="https://reactjs.org/docs/hello-world.html" target="_blank">
                             https://reactjs.org/docs/hello-world.html
                        </a>
                    </ListGroupItem>
                    <ListGroupItem
                        style={{
                        backgroundColor: 'transparent',
                        color: 'white'
                    }}>
                     <ScrollAnimation animateIn="zoomIn" >
                    <img  className="iconsMan" src={'https://cdn-images-1.medium.com/max/1200/1*QNimSWsBQxta_xt3XksQaw.png'} style={{ objectfit: 'cover', width: '20%'}}/>
                    </ScrollAnimation>
                    <br/> Har opnået et certifikat på HTML og JavaScript på SoloLearn. <br/> HTML certifikat: <br/>
                        <a href="https://www.sololearn.com/Certificate/1014-4201001/pdf/" target="_blank">
                           https://www.sololearn.com/Certificate/1014-4201001/pdf/
                        </a> <br/> JavaScript certifikat: <br/>   <a href="https://www.sololearn.com/Certificate/1024-4201001/pdf/" target="_blank">
                        https://www.sololearn.com/Certificate/1024-4201001/pdf/
                          </a>
                    </ListGroupItem>
                    <ListGroupItem
                        style={{
                        backgroundColor: 'transparent',
                        color: 'white'
                    }}>
                     <ScrollAnimation animateIn="zoomIn" >
                     <img className="iconsMan" src={'http://pngimg.com/uploads/youtube/youtube_PNG1.png'} style={{ objectfit: 'cover',  width: '20%'}}/>
                       </ScrollAnimation>
                       <br/> Set utallige Kode Tutorials på Youtube, lavet af personer med mange års erfaring,
                        f.eks: <strong> thenewboston, Traversy Media og Academind. </strong>

                    </ListGroupItem>
                    <ListGroupItem
                        style={{
                        backgroundColor: 'transparent',
                        color: 'white'
                    }}> 
                     <ScrollAnimation animateIn="zoomIn">
                    <img className="iconsMan" src={'https://upload.wikimedia.org/wikipedia/commons/3/3e/W3Schools_logo.png'} style={{ objectfit: 'cover', width: '65%' }}/>
                    </ScrollAnimation>
                    <br/>
                    W3schools har detaljeret og let forstålig dokumentation, hvilket jeg har benyttet mig af for at lære brugen af diverse HTML elementer,
                     CSS egenskaber, og vanilla JavaScript.
                    <br/>
                    <a href="https://www.w3schools.com/" target="_blank">
                        https://www.w3schools.com/
                        </a>
                    </ListGroupItem>
                    <ListGroupItem
                        style={{
                        backgroundColor: 'transparent',
                        color: 'white'
                    }}>
                     <ScrollAnimation animateIn="zoomIn">
                    <img  className="iconsMan" src={'https://cdn.freebiesupply.com/logos/large/2x/udacity-logo-png-transparent.png'} style={{ objectfit: 'cover', width: '20%'}}/>
                    </ScrollAnimation>
                    <br/> Fuldført et Udacity kursus om brugen af Git og GitHub: <br/>
                        <a href="https://eu.udacity.com/" target="_blank">
                             https://eu.udacity.com/
                        </a>
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

export default EducationSection;
