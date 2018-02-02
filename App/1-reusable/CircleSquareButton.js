import React from 'react';

var CircleSquareButton = React.createClass({

   render: function() {
       var divStyle = {
         background: this.props.bg,
         color: this.props.color


       };
     return (

       <div className="circle center" style={divStyle}>
          <div className="text">View</div>
          <div className="test"><i className="fa fa-eye" aria-hidden="true"></i></div>
        </div>
     )
   }
 });

 export default CircleSquareButton
