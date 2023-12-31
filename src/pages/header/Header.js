import React from 'react'
// import { Paper, Typography, Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

// import Carousel from 'react-material-ui-carousel'
// import image1 from '../../Assets/bannerImage/1.jpg'
// import image2 from '../../Assets/bannerImage/2.jpg'
// import image3 from '../../Assets/bannerImage/3.jpg'
import './header.scss'

const Header = () => {
  return (

    <div className='background-image'>

      <h1>I'm Shad Azam</h1>
      <h3><span><a href="https://bazaar247.in/">Software Engineer @ Bazaar 247 Mcommerce Pvt Ltd</a></span>
      </h3>
      <hr />
      <ul className="social">
        <li><a href="https://www.facebook.com/shad.azam.94" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
        <li><a href="https://twitter.com/MShad_Azam" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href="https://github.com/shadazam08" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a href="https://www.linkedin.com/in/shad-azam-ab9107244/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
      </ul>
      <Link to='/about' className='link-style'>About Me</Link>
    </div>
  )
}

export default Header
