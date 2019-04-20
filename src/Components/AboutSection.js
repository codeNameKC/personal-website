import React from 'react';
import {Link} from 'react-router-dom';
import {ListGroup, ListGroupItem} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';

const AboutSection = (props) => {

    const { t } = useTranslation('common');

    return (

        <div
            className="about"
            style={{
            justifyContent: 'space-between',
            alignContent: 'space-between'
        }}>
        
            <h1 id="About">
            { t('about-me.about-me') }
            </h1>
            <p className="textBody">
            { t('about-me.about-me-text.line-1') }
            { t('about-me.about-me-text.line-2') }
            { t('about-me.about-me-text.line-3') }
            { t('about-me.about-me-text.line-4') }
            </p>
            <Link to="/MyStory">
            <ScrollAnimation animateIn="zoomIn" >
                <button>
                { t('about-me.story') }
                </button>
                </ScrollAnimation>
            </Link>
            <h3 style={{marginTop: '1.8em', color: 'white'}}>
              <strong>    { t('about-me.basic-info') } </strong>
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
                    { t('about-me.occupation') }
                    </strong>
                    { t('about-me.job-title') }
                </ListGroupItem>
                <br/>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}>
                     { t('about-me.nationality') }
                </ListGroupItem>
                <br/>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}>
                    { t('about-me.residence') }
                </ListGroupItem>
                <br/>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}>
                    { t('about-me.fluent-in') }
                </ListGroupItem>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}>
                   { t('about-me.relocation') }
                </ListGroupItem>
                <br/>
                <ScrollAnimation animateIn="jello" >
                <h3>
                    <strong>
                    { t('about-me.contact-info') }
                    </strong>
                </h3>
                </ScrollAnimation>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}>
                    { t('about-me.phone-nr') }
                </ListGroupItem>
                <ListGroupItem
                    style={{
                    backgroundColor: 'transparent',
                    color: 'white'
                }}>
                   { t('about-me.email') }
                </ListGroupItem>

            </ListGroup>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        )
};

export default AboutSection;
