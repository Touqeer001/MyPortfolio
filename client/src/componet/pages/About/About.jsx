import React from 'react'
import photo from '../../../assets/images/My profile.jpeg'
import './About.css'
const About = ()=>{
  return (
  <>
<div className="about">
    <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12  about-img">
        <img
            // src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
            src={photo}
            alt="profile pic"
          /> </div>
           <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam veritatis sunt ipsam corporis totam, vel, sequi repellendus ut nostrum quos beatae porro! Ullam, quidem quibusdam asperiores error vitae possimus quod?</p>
           </div>
       
       
    </div>
</div>

  </>
  )
}

export default About;