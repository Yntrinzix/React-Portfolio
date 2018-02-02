import React from 'react';
import Card from '../1-reusable/Card'

class Projects extends React.Component {





  render(){
    return(
      <div className="content">
      <div className="divWrapper">
        <h1 className="centerTitle projGrid">I <b>enjoy</b> the process of
        <b> creation</b> and continually push myself to <b>learn</b>, these are my most recent <b>projects </b>&<b> experiments</b></h1>
        <div className='myCardHolder'>
        <div className="grid-4">
          <Card
            title="Catch You Soon"
            bg={require('../../assets/catchyousoon.png')}
            details="Is an app that allows you to exchange, create, and edit your own e-business card, you can share your e-business card to other people by scanning your QR code. you can also add and search your contact list. (You can scan this QR Code to see my e-Business card or create your own by registering)"
            links="http://catchyousoon.000webhostapp.com/"
            />

        </div>
        <div className="grid-4">
          <Card
            title="Marvel API"
            bg={require('../../assets/Marvel.png')}
            details="In this project, I experimented in using an API with React.js. I decided to use Marvel Comic's API since I am a casual fan of their comic books"
            links="https://github.com/Yntrinzix/Marvel-API-Experiment"
            />
        </div>
        <div className="grid-4">
          <Card
            title="Nexus"
            bg={require('../../assets/nexus.png')}
            details="Is an app that synchronises schedule. It gives users a year calendar where they can visually see their schedules and tasks. Managers/Supervisors assign tasks to individual users, demo users Manager: username: jmm password: jmnexus Employee username: amd password: vanyWeb"
            links="https://vjnexus.000webhostapp.com/"
            />
        </div>
        </div>
      </div>

      </div>
    );
  }
}

export default Projects;
