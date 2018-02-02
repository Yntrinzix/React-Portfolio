import React from 'react';

class About extends React.Component {


  render(){
    return(
      <div className = "aboutContent" >
        <div className='aboutSubContent'>
          <div className='a-title'><i className="fa fa-question-circle-o" aria-hidden="true"></i>&nbsp;Who am I</div>
          <div className='a-desc'>
            <p>Hi, my name is John Mark Martinez,
            I previously finished my course at EDENZ College
            taking the Software development to further develop my skills
            </p>
          </div>
        </div>
        <div className='aboutSubContent'>
          <div className='a-title'><i className="fa fa-rocket" aria-hidden="true"></i>&nbsp;What I do</div>
          <div className='a-desc'>
            <p>
              I am a Front-End web developer by profession, I Conceptualize,
              Create and maintain web sites. I started my career
              at Jupiter Innovations a small Company in Singapore way back 2010.
              We develop e-Learning websites, company webcast sites for
              their Townhall meetings and repository tutorials for government websites
            </p>
          </div>
        </div>
        <div className='aboutSubContent'>
          <div className='a-title'><i className="fa fa-smile-o" aria-hidden="true"></i>&nbsp;My Interest</div>
          <div className='a-desc'>
            <p>
              Painting, Playing Piano, Playing PC-Games, Hiking, Swimming, Reading, Watching Coding Tutorials
            </p>
          </div>
        </div>

      </div>
    );
  }
}

export default About;
