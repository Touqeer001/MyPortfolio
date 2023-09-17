import React from "react";
import "./Menu.css";
import {FcHome,FcAbout,FcReadingEbook,FcBiotech,FcVideoProjector,FcBusinessContact } from 'react-icons/fc'
import photo from '../../assets/images/My profile.jpeg'

const Menu=({ toggle })=> {
  return (
    <>
      {toggle ? (
        <>
        <div className="navbar-profile-pic ">
          <img
            // src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
            src={photo}
            alt="profile pic"
          />
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link"><FcHome></FcHome>Home</div>
          </div>
          <div className="nav-item">
            <div className="nav-link"> <FcAbout />About</div>
          </div>
          <div className="nav-item">
            <div className="nav-link">  <FcReadingEbook />Education</div>
          </div>
          <div className="nav-item">
            <div className="nav-link"> <FcBiotech />TechStack</div>
          </div>
          <div className="nav-item">
            <div className="nav-link">   <FcVideoProjector />Project</div>
          </div>
          <div className="nav-item">
            <div className="nav-link"> <FcBusinessContact />Contact</div>
          </div>
        
        </div>
        </>
      ) : (
       <>
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link"><FcHome title="Home"/></div>
          </div>
          <div className="nav-item">
            <div className="nav-link"> <FcAbout title="About" /></div>
          </div>
          <div className="nav-item">
            <div className="nav-link">  <FcReadingEbook title="Education"/></div>
          </div>
          <div className="nav-item">
            <div className="nav-link"> <FcBiotech  title="TechStack" /></div>
          </div>
          <div className="nav-item">
            <div className="nav-link">   <FcVideoProjector  title="Project" /></div>
          </div>
          <div className="nav-item">
            <div className="nav-link"> <FcBusinessContact title="Contact" /></div>
          </div>
        
        </div>
       
       </>
      )}
    </>
  );
}

export default Menu;
