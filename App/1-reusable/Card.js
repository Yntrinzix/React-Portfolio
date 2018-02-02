import React from 'react';
import Button from './CircleSquareButton';

var Cards = React.createClass({

   render: function() {
      let divStyle = {
        paddingTop: '15%'

      };
     return (

       <div className="containerCard" >
          <div className="card">

            <div className="front side">
              <img src={this.props.bg} />
              <h3>{this.props.title}</h3>
            </div>

            <div className="back side">
              <img src={require('../../assets/cardbg.png')} />
              <div className="backDiv">

                <h3 className="backTitle">{this.props.title}</h3>
                <h5 className="backDetails">{this.props.details}</h5>
                <div style={divStyle}><a href={this.props.links}><Button bg='#333' color="#f8f8f8"/></a></div>
              </div>
            </div>

        </div>

      </div>
     )
   }
 });

 export default Cards
