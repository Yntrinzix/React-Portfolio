import React from 'react';
import ProfileName from './ProfileName';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Constillation from '../1-reusable/Constillation'

class Content extends React.Component {
  constructor() {
  super();

  this.state = {
    state: ""
  }
}

  render(){
    return(
      <div>

        <section id='main'>
        <div className='content'>
          <canvas id='canvas'></canvas>
          <div className='content-inner profileLeft'>
            <img className='port-img' src={require('../../assets/portrait.png')} />
          </div>
          <ProfileName
            fNameClass={this.props.fNameClass}
            sNameClass={this.props.sNameClass}
            textName={this.props.textName}
            />
          <div className='jumpingArrow'><AnchorLink href='#projects' className="a">⇣</AnchorLink></div>
        </div>
        </section>

        <section id='projects' className={this.props.projectAnimate}>
         <div className="sideTitle">Projects</div>

         <Projects/>
        </section>

        <section id='skills' className={this.props.skillsAnimate}>

          <div className="sideTitle">Skills</div>
          <img className='skillBackground' src={require('../../assets/white.png')} />
          <Skills classes={this.props.skillsMotion}/>
        </section>

        <section id='gallery' className={this.props.galleryAnimate}>
           <div className="sideTitle">Gallery</div>
           <Gallery />
        </section>

        <section id='about'>
           <div className="sideTitle">About</div>
           <About/>
        </section>
        <section id='resume'>
          <div className="sideTitle">Contact</div>
          <Contact/>
        </section>
      </div>
    );
  }
}

export default Content;
