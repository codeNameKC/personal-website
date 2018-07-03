import React from 'react';
import { Link } from 'react-router-dom'; 
import './MyStoryStyles.css';


const MyStoryDisplay = (props) => {
        return (
            <div className="MyStory">
               <Link to="/"> 
               <button className="MyStory"> Back 
              </button>
              </Link>
            <h1 className="MyStory"> My Story </h1>
            <p className="MyStory">
             I started pursueing my passion as a software engineer at 15 years old. 
             I was always curious about what went on behind the scenes. It is a tough industry to get into. 
             That didn't turn me off. I immersed myself as much as I could; listening to talks about the industry, 
             about what programming languages were in. 
            </p>
            
            </div>
        )
}

export default MyStoryDisplay;