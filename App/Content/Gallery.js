import React from 'react';


class Gallery extends React.Component {


  render(){
    return(

      <div className="galleryContent">
        <div className="galleryWrapper">
          <div><img className='galleryPic' src={require('../../assets/axe.jpg')} /></div>
          <div><img className='galleryPic' src={require('../../assets/fall.jpg')} /></div>
          <div><img className='galleryPic' src={require('../../assets/sven.jpg')} /></div>
          <div><img className='galleryPic' src={require('../../assets/tr.jpg')} /></div>
          <div><img className='galleryPic' src={require('../../assets/sm.jpg')} /></div>
          <div><img className='galleryPic' src={require('../../assets/shark.jpg')} /></div>
          <div><img className='galleryPic' src={require('../../assets/j.jpg')} /></div>
          <div><img className='galleryPic' src={require('../../assets/surf.jpg')} /></div>
          <div><img className='galleryPic' src={require('../../assets/samurai.jpg')} /></div>
        </div>
      </div>
    );
  }
}

export default Gallery;
