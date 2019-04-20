import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import '../Styles.css';
import { useTranslation } from 'react-i18next';

const EducationSection = (props) => {
    const { t } = useTranslation('common');

    return(
        <div
            className="Education"
            style={{
            textAlign: 'center',
            justifyContent: 'space-between'
        }}>
            <h1 id="Education">
            { t('education.education') }
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
                <img className="icons" src={'https://d3n8a8pro7vhmx.cloudfront.net/rebuildthedream/pages/3622/attachments/original/1447884001/Codecademy.png?1447884001'} style={{ objectfit: 'cover', width: '60%', marginBottom: '0.8em'}}/>
                </ScrollAnimation>
                <br/>
                { t('education.completed-courses') } <strong> <br/> -HTML <br/> -CSS <br/> -Responsive Design <br/> -SASS <br/>
                    -JavaScript <br/> -React.js <br/> </strong> { t('education.on-website') } 
                    <strong> Codecademy. </strong> { t('education.courses-link') }   <br/>
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
                <img  className="icons" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'} style={{ objectfit: 'cover',  width: '45%'}}/>
                </ScrollAnimation>
                   <br/> { t('education.read-documentation') }  <br/>
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
                <img  className="icons" src={'https://cdn-images-1.medium.com/max/1200/1*QNimSWsBQxta_xt3XksQaw.png'} style={{ objectfit: 'cover', width: '20%'}}/>
                </ScrollAnimation>
                <br/> { t('education.sololearn-text') }  <br/> { t('education.html-certificate') }  <br/>
                    <a href="https://www.sololearn.com/Certificate/1014-4201001/pdf/" target="_blank">
                       https://www.sololearn.com/Certificate/1014-4201001/pdf/
                    </a> <br/> { t('education.javascript-certificate') }  <br/>   <a href="https://www.sololearn.com/Certificate/1024-4201001/pdf/" target="_blank">
                    https://www.sololearn.com/Certificate/1024-4201001/pdf/
                      </a>
                </ListGroupItem>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}>
                  <ScrollAnimation animateIn="zoomIn" >
                 <img className="icons" src={'http://pngimg.com/uploads/youtube/youtube_PNG1.png'} style={{ objectfit: 'cover',  width: '20%'}}/>
                  </ScrollAnimation>
                   <br/> { t('education.youtube-text') } 
                     <strong> thenewboston, Traversy Media </strong> { t('education.and') }  <strong> Academind. </strong>
                </ListGroupItem>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}> 
                  <ScrollAnimation animateIn="zoomIn" >
                <img className="icons" src={'https://upload.wikimedia.org/wikipedia/commons/3/3e/W3Schools_logo.png'} style={{ objectfit: 'cover', width: '65%' }}/>
                </ScrollAnimation >
                <br/> { t('education.w3schools') }<br/>
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
                <img  className="icons" src={'https://cdn.freebiesupply.com/logos/large/2x/udacity-logo-png-transparent.png'} style={{ objectfit: 'cover', width: '20%'}}/>
                 </ScrollAnimation>
                <br/> { t('education.udacity') } <br/>
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

export default EducationSection;
