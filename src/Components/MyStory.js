import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { useTranslation } from 'react-i18next';

const MyStory = (props) => {
    
        const { t, i18n } = useTranslation('common');

        return (
            <div className="MyStory">
                <Link to="/">
                    <button className="MyStory">
                    { t('my-story.back') }
                    </button>
                </Link>
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
                <h1 className="MyStory">
                { t('my-story.my-story') }
                </h1>
                <p className="MyStory">
                { t('my-story.line-1') } 
                { t('my-story.line-2') }
                { t('my-story.line-3') }
                { t('my-story.line-4') }
                </p>

            </div>
        )
}

export default MyStory;