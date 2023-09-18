import React from 'react'
import photo from '../../../assets/images/profilePic.jpeg'
import './About.css'
const About = ()=>{
  return (
  <>
<div className="about" id="About">
    <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12  about-img">
        <img
            // src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
            src={photo}
            alt="profile pic"
          /> </div>
           <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>Passionate Full Stack MERN Developer with a proven track record of building responsive web applications. Proficient in MongoDB, Express.js, React, and Node.js.</p>
           </div>
       
       
    </div>
</div>

  </>
  )
}

export default About;