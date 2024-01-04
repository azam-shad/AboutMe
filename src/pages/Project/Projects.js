import React from 'react'
import './project.scss';
import image1 from '../../Assets/bannerImage/Meesho.webp'


const Projects = ({ id }) => {
    return (
        <div id={id} className='projectBody'>
            <div className="container">
                <div className="card">
                    <div className="face">
                        <div className='face1'>
                            <div className="content">
                                <img src={image1} />
                                <h3>Meesho-Colone</h3>
                            </div>
                        </div>
                    </div>
                    <div className="face">
                        <div className='face2'>
                            <div className="content">
                                <p style={{ marginTop: '2px' }}>This project is an Meesho Clone Website developed as part of the Newton School SkillBuild.
                                </p>
                                <a href="https://github.com/shadazam08/meesho-colone/blob/master/README.md" target='_blank'>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="card">
                    <div className="face">
                        <div className='face1'>
                            <div className="content">
                                <img src={image1} />
                                <h3>Code</h3>
                            </div>
                        </div>
                    </div>
                    <div className="face">
                        <div className='face2'>
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="card">
                    <div className="face">
                        <div className='face1'>
                            <div className="content">
                                <img src={image1} />
                                <h3>Launch</h3>
                            </div>
                        </div>

                    </div>
                    <div className="face">
                        <div className='face2'>
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Projects
