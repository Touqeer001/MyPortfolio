import React from 'react'
import Image from '../../../assets/images/blogs.png';
import Download from '../../../assets/images/download.jpg';
import Wheather from '../../../assets/images/wether.jpg';
import './Project.css'
const Project=()=> {
  return (
 <>
  <div className="container project " id="project">
    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Top Recent Project</h2>
    <hr></hr>
    <p className="pb-3 text-center">
            👉Here is My Most Recent Project
          </p>
          {/* Card Design  */}
          <div className="row" id='ads'>
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notify-badge">Full stack</span>
                        <img src={Image} alt="Project 1"></img>
                    </div>
                    <div className="card-image-overly">
                        <span className="card-detail-badge">Node</span>
                        <span className="card-detail-badge">Express</span>
                        <span className="card-detail-badge">React</span>
                        <span className="card-detail-badge">MongoDB</span>
                    </div>
                    <div className="card-body">
                        <div className="ad-title">
                            <h5 className="text-uppercase">
                                Blog-Web Application 
                            </h5>
                        </div>
                        <a className='ad-btn' href="#">View</a>
                    </div>
                </div>
            </div>
            {/* project Section 2 */}
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notify-badge">Wether web Application</span>
                        <img src={Wheather} alt="Project 1"></img>
                    </div>
                    <div className="card-image-overly">
                        <span className="card-detail-badge">Html</span>
                        <span className="card-detail-badge">css3</span>
                        <span className="card-detail-badge">Javascript</span>
                        <span className="card-detail-badge">Api</span>
                    </div>
                    <div className="card-body">
                        <div className="ad-title">
                            <h5 className="text-uppercase">
                            Wether web Application</h5>
                        </div>
                        <a className='ad-btn' href="#">View</a>
                    </div>
                </div>
            </div>
            {/* 2 card project */}
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notify-badge">E-commerce Using MERN Stack</span>
                        <img src={Download} alt="Project 1"></img>
                    </div>
                    <div className="card-image-overly">
                        <span className="card-detail-badge">React.js</span>
                        <span className="card-detail-badge">Nodejs</span>
                        <span className="card-detail-badge">MongoDb</span>
                        <span className="card-detail-badge">Material Ui</span>
                    </div>
                    <div className="card-body">
                        <div className="ad-title">
                            <h5 className="text-uppercase">
                               E-commerce Web Application
                            </h5>
                        </div>
                        <a className='ad-btn' href="#">View</a>
                    </div>
                </div>
            </div>
          </div>
          </div>
         
         
          
 </>
  )
}

export default Project;