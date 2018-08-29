import React from 'react';

const WhyHireSection = (props) => {
    if (props.language === 'English') {
    return (
        <div className="WhyHireMe"  style={{
            marginBottom: 50
        }}>
        
        <h1 id="WhyHireMe" style={{ top: 0, marginTop: '-7.3%'}}>
        Why Hire Me?
    </h1>
                <p className="textBody" style={{ fontSize: '2em'}}>
                    My job is my 1st priority. I arrive on time and do my best to finish the job on
                    time, even if it requires some of my free time. I am very passionate about
                    programming. For that reason I won't mind learning new technologies at home and I can be flexible, if
                    necessary. I will gladly become part of your team. I look forward to working for your company
                    if you are looking for a passionate web developer who can help make your website or mobile app come to life,
                    with the latest web technologies such as React.js.
                </p>
   </div>
    )
}
    else {
        return (
            <div className="WhyHireMe"  style={{
            marginBottom: 50
        }}>
            <h1 id="WhyHireMe" style={{ top: 0, marginTop: '-6.5%' }}>
                Hvorfor Hyre Mig?
            </h1>
                <p className="textBody" style={{ fontSize: '2em', marginTop: '2%'}}>
                    Mit job er min første prioritet. Jeg ankommer til tiden og gør mit bedste til at færdiggøre arbejdet til tide,
                     selv hvis det kræver lidt af min fritid. Jeg er meget passioneret om programmering.
                     Af denne grund har jeg ikke noget imod at lære nye teknologier derhjemme og kan være fleksibel,  hvis det er nødvendigt.
                     Jeg vil med glæde blive en del af et hold. Jeg ser frem til at arbejde for dit firma,
                      hvis du leder efter en passioneret Web Developer der kan hjælpe med at få lavet din hjemmeside eller mobil app til livs,
                     med de nyeste web development teknologier såsom React.js.
                </p>

            </div>

        )
    }
}

export default WhyHireSection;
