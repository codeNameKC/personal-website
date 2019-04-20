import React from 'react';
import { useTranslation } from 'react-i18next';

const WhyHireSection = (props) => {

    const { t } = useTranslation('common');

    return (
        <div>
        <h1 id="WhyHireMe" style={{ marginBottom: '-0.5rem' }}>
            { t('why-hire.why-hire') }
        </h1>
        <div className="WhyHireMe"  style={{
            marginBottom: 50
        }}>
        
                <p className="textBody" style={{ fontSize: '1.5rem'}}>
                { t('why-hire.line-1') } 
                { t('why-hire.line-2') } 
                { t('why-hire.lin-3') } 
                { t('why-hire.line-4') }
                </p>
   </div>
   </div>
    )
}

export default WhyHireSection;
