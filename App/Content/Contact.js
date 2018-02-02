import React from 'react';

class About extends React.Component {


  render(){
    return(
      <div className = "contactContent" >
        <div className='contactSubContent'>
          <div className='c-title'>0225733153</div>
          <div className='c-desc'>
            <p><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;Phone Number
            </p>
          </div>
        </div>
        <div className='contactSubContent'>
          <div className='c-title'>johnmark7772003@yahoo.com</div>
          <div className='c-desc'>
            <p>
              <i className="fa fa-envelope-open-o" aria-hidden="true"></i>&nbsp;e-mail
            </p>
          </div>
        </div>
        <div className='contactSubContent'>
          <div className='c-title'>
            <a href='https://yntrinzix.deviantart.com/'><i className="fa fa-deviantart" aria-hidden="true"></i></a>&nbsp;
            <a href='https://www.facebook.com/johnmark.m.martinez'><i className="fa fa-facebook" aria-hidden="true"></i></a>&nbsp;
            <a href='https://github.com/Yntrinzix'><i className="fa fa-github" aria-hidden="true"></i></a>&nbsp;
            <a href='https://www.linkedin.com/in/jm-martinez/'><i className="fa fa-linkedin" aria-hidden="true"></i></a>
          </div>
          <div className='c-desc'>
            <p>
              links
            </p>
          </div>
        </div>

      </div>
    );
  }
}

export default About;
