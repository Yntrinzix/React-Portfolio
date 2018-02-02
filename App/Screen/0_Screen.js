import React from 'react';
import Screen from '../../assets/screen.png'

const sectionStyle = {
  position: 'fixed',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  opacity: '.03',
  zIndex: '99',
  backgroundImage: `url(${Screen})`

};

class myScreen extends React.Component {

  render(){
    return(

        <div className='screen' style={ sectionStyle }>

        </div>

    );
  }
}

export default myScreen;
