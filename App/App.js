import React, { Component } from 'react';
import './0-css/styles.css';
import Header from './Header/0_Header';
import Content from './Content/0_Content';
import Screen from './Screen/0_Screen';
import Brand from './Header/Brand';

class App extends Component {

constructor() {
  super();
    this.state = {
      fNameClass: "fNameAnimate",
      sNameClass: "sNameAnimate",
      nameClass: "textAnimate",
      projectAnimate: "",
      galleryAnimate: "galleryOff",
      skillsAnimate: "skillsAnimateOff",
      skillsMotion: {}
    }
}

componentDidMount =() =>{
  window.addEventListener('scroll', this.handleScroll);
  console.log("mounted")
  document.body.scrollTop = 0; // For Chrome, Safari and Opera
  document.documentElement.scrollTop = 0; // For IE and Firefox
}

componentWillUnmount = () =>{
  window.removeEventListener('scroll', this.handleScroll);
}

handleScroll = (event) => {
  const a       =     document.getElementsByClassName('a');
  const span    =     document.getElementsByClassName('span');
  const menu    =     document.getElementById('mobilehamContainer');
  const nav     =     document.getElementById('nav');
  const projects=     document.getElementById('projects');
  const body    =     document.body;
  const dark    =     "#333";
  const dark1   =     "#282828";
  const light   =     "#f8f8f8";
  const light1   =     "#fff";
  const neoBlue =     "#0DDEFF";

  let scrollTop =     (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

  let whiteTheme = () =>{
    body.setAttribute("style", `background:${light};color:${dark};`);
    nav.setAttribute("style", `background:${light1};color:${dark};border-bottom:1px solid #f3f3f3`);
    for(var i=0; i<a.length; i++) {a[i].style.color =    '#333'};
    for(var i=0; i<span.length; i++) {span[i].style.background =    '#333'};
    menu.style.backgroundColor = `${light}`;

  }
  let darkTheme = () =>{
    body.setAttribute("style", `background:${dark};color:${light};`);
    nav.setAttribute("style", `background:${dark1};color:${light1};border-bottom:1px solid #4a4a4a`)
    for(var i=0; i<a.length; i++) {a[i].style.color =`${light1}`};
    for(var i=0; i<span.length; i++) {span[i].style.background =`${light1}`};
    menu.style.backgroundColor = `${dark}`;
  }
  let blueTheme = () =>{
    body.setAttribute("style", `background:#2c4153;color:#ffc549;`);
    nav.setAttribute("style", `background:#ffc549;color:#2c4153;border-bottom:1px solid #333`)
    for(var i=0; i<a.length; i++) {a[i].style.color =`#2c4153`};
    for(var i=0; i<span.length; i++) {span[i].style.background =`#2c4153`};
    menu.style.backgroundColor = "#ffc549";
  }
  //profileName class adder
  let profileTextOn = () =>{ this.setState({fNameClass: "fNameAnimate", sNameClass: "sNameAnimate", nameClass: "textAnimate"}) }
  let profileTextOff = () =>{ this.setState({fNameClass: "", sNameClass: "", nameClass: ""}) }

  //projects class adder
  let projectsOn = () =>{ this.setState({projectAnimate: "projectAnimate"}) }
  let projectsOff = () =>{ this.setState({projectAnimate: ""}) }

  //skills class adder
  let skillsOn = () =>{ this.setState({
    skillsAnimate: "skillsAnimateOn",
    skillsMotion: {creative:"skillCreativeAnimate",logic:"skillLogicAnimate",item:"skillItemAnimate"}
  }) }
  let skillsOff = () =>{ this.setState({
    skillsAnimate: "skillsAnimateOff",
    skillsMotion: {creative:"skillCreativeAnimate-off",logic:"skillLogicAnimate-off",item:"skillItemAnimateOff"}
  }) }
  let galleryOn = () =>{ this.setState({
    galleryAnimate: "galleryOn",

  }) }
  let galleryOff = () =>{ this.setState({
    galleryAnimate: "galleryOff",

  }) }


    if(document.getElementById("main").offsetTop==scrollTop){
      whiteTheme(); profileTextOn(); projectsOff();

    }
    else if(scrollTop>=document.getElementById("projects").offsetTop-1 && scrollTop<document.getElementById("skills").offsetTop-1){
      darkTheme(); profileTextOff(); projectsOn(); skillsOff();

    }
    else if(scrollTop>=document.getElementById("skills").offsetTop-1 && scrollTop<document.getElementById("gallery").offsetTop-1){
      whiteTheme(); projectsOff(); skillsOn(); galleryOff();

    }
    else if(scrollTop>=document.getElementById("gallery").offsetTop-1 && scrollTop<document.getElementById("about").offsetTop-1){
      darkTheme(); skillsOff(); galleryOn();

    }
    else if(scrollTop>=document.getElementById("about").offsetTop-1 && scrollTop<document.getElementById("resume").offsetTop-1){
      blueTheme(); galleryOff();

    }
    else if(scrollTop>=document.getElementById("resume").offsetTop-1){
      whiteTheme();

    }
}

  render() {
    return (

      <div>
        <Screen style/>
        <Header/>
        <Content
          fNameClass={this.state.fNameClass}
          sNameClass={this.state.sNameClass}
          textName={this.state.nameClass}
          projectAnimate={this.state.projectAnimate}
          skillsAnimate={this.state.skillsAnimate}
          skillsMotion={this.state.skillsMotion}
          galleryAnimate={this.state.galleryAnimate}
        />
      </div>
    );
  }
}

export default App;
