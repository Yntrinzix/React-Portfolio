import React from 'react';
import ListItems from '../1-reusable/ListItems';
import Brand from './Brand';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Header extends React.Component {

  constructor() {
    super();
      this.state = {
        hamClass: "hamburger",
        hamSelect: "hamSelectionOff"
      }
  }

closing = () => {
  this.setState({
    hamClass:'hamburger',
    hamSelect:'hamSelectionOff'
  });
}


  hamburger =() =>{
    if (this.state.hamClass==='hamburger') {
      this.setState({
        hamClass:'hamburgerOff',
        hamSelect: 'hamSelection'
      })}
    else if (this.state.hamClass==='hamburgerOff') {
      this.closing()};
  }

  render(){
    return(
      <div>
        <nav id='nav'>
          <div className='innerNav'>
            <Brand onClick={this.closing}/>
            <div className='links'>
              <ul>
                <li><AnchorLink href='#projects' className="a">Projects</AnchorLink></li>
                <li><AnchorLink href='#skills' className="a">Skills</AnchorLink></li>
                <li><AnchorLink href='#gallery' className="a">Gallery</AnchorLink></li>
                <li><AnchorLink href='#about' className="a">About</AnchorLink></li>
                <li><AnchorLink href='#resume' className="a">Contact</AnchorLink></li>
              </ul>
              <div className={this.state.hamClass} onClick={this.hamburger}>
                <div className='hamMenu'>MENU</div>
                <span className='span top'></span>
                <span className='span mid'></span>
                <span className='span bot'></span>
              </div>
            </div>


          </div>
        </nav>
        <div className={this.state.hamSelect}>
          <div id='mobilehamContainer'>
          <div className="mobileham" onClick={this.hamburger}><AnchorLink href='#projects' className="a">Projects</AnchorLink></div>
          <div className="mobileham" onClick={this.hamburger}><AnchorLink href='#skills' className="a">Skills</AnchorLink></div>
          <div className="mobileham" onClick={this.hamburger}><AnchorLink href='#gallery' className="a">Gallery</AnchorLink></div>
          <div className="mobileham" onClick={this.hamburger}><AnchorLink href='#about' className="a">About</AnchorLink></div>
          <div className="mobileham" onClick={this.hamburger}><AnchorLink href='#resume' className="a">Contact</AnchorLink></div>
        </div>

        </div>
      </div>

    );
  }
}

export default Header;
