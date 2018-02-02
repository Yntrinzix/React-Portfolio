import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Skills extends React.Component {



  render(){
    return(

        <div className="brand">

          <div className="fName" onClick={this.props.onClick}><AnchorLink href='#main' className="a"> JM </AnchorLink></div>
          <div className="sName"> Martinez </div>

        </div>

    );
  }
}

export default Skills;
