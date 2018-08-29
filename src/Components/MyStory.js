import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class MyStory extends React.Component {
    render() {
        if (this.props.language === 'English') {

        return (
            <div className="MyStory">
                <Link to="/">
                    <button className="MyStory">
                        Back
                    </button>
                </Link>
                <h1 className="MyStory">
                    My Story
                </h1>
                <p className="MyStory">
                    I started pursueing my passion as a software engineer at 15 years old. I was
                    always curious about what went on behind the scenes. It is a tough industry to
                    get into. That didn't turn me off. I immersed myself as much as I could;
                    listening to talks about the industry, about what programming is and what languages + frameworks were popular. 
                    I started courses mainly on Codecademy to gain theoretical knowledge about JavaScript and everything that it encomposes. 
                    I put this theoretical knowledge to the test, through personal projects. 
                </p>

            </div>
        )
    } else {
        return (
            <div className="MyStory">
                <Link to="/">
                    <button className="MyStory">
                        Tilbage
                    </button>
                </Link>
                <h1 className="MyStory">
                    Min Historie
                </h1>
                <p className="MyStory">
                    Jeg begyndte at forfølge min passion som software inginiør som 15 årig.
                    Jeg har altid undret mig over hvordan computer software blev lavet. Det er en svær industry at komme ind i. 
                    Det skræmte mig ikke. Jeg indlevede mig så meget som muligt; jeg lyttede til taler om Software Development industrien
                    , og om hvad programmering gik ud på, samt hvilke programmeringssprog + frameworks var populære. Jeg begyndte kurser på hovedsageligt Codecademy for at opbygge teoretisk viden om JavaScript og alt der høre med.
                    Denne viden afprøvede jeg gennem personlige projekter. 
                </p>

            </div>
        )
        }
    }
}

const mapStateToProps = (state) => {
    return { language: state.renderReducer.language }
};

export default connect(mapStateToProps)(MyStory);