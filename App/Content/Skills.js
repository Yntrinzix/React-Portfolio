import React from 'react';
import ListItems from '../1-reusable/ListItems';

class Skills extends React.Component {

constructor() {
    super();

    this.state = {
      logic:['M','y','\xa0','L','0','g','1','c','a','l','\xa0','S','1','d','e'],
      creative:['M','y','\xa0','C','r','e','a','t','i','v','e','\xa0','S','i','d','e']
    }
  }

  render(){
    return(
      <div className = "skillsContent" >

        <div className="skillsSubContent">
          <div className="skillLists l">
            <ListItems myClass={this.props.classes.logic} list={this.state.logic}/>
            <div className={this.props.classes.item}>

              <img  src={require('../../assets/skills/html.png')} />
              <img  src={require('../../assets/skills/css.png')} />
              <img  src={require('../../assets/skills/js.png')} />
              <img  src={require('../../assets/skills/jq.png')} />
              <img  src={require('../../assets/skills/bootstrap.png')} />
              <img  src={require('../../assets/skills/react.png')} />
              <img  src={require('../../assets/skills/wpk.png')} />
              <img  src={require('../../assets/skills/npm.png')} />
              <img  src={require('../../assets/skills/sass.png')} />

            </div>
          </div>
          <div className="brain">
            <img className='skill-img' src={require('../../assets/l-brain.png')} />
          </div>

        </div>
        <div className="skillsSubContent">

          <div className="brain">
            <img className='skill-img' src={require('../../assets/r-brain.png')} />
          </div>
            <div className="skillLists r">
            <ListItems myClass={this.props.classes.creative} list={this.state.creative}/>
            <div className={this.props.classes.item}>
              <img  src={require('../../assets/skills/ps.png')} />
              <img  src={require('../../assets/skills/fl.png')} />
              <img  src={require('../../assets/skills/fw.png')} />
              <img  src={require('../../assets/skills/pr.png')} />
              <img  src={require('../../assets/skills/ai.png')} />
              <img  src={require('../../assets/skills/3dsmax.png')} />
              <img  src={require('../../assets/skills/maya.png')} />
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Skills;
