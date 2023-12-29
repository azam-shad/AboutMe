import React from 'react'
import { Paper, Typography, Button } from '@mui/material'

import Carousel from 'react-material-ui-carousel'
import image1 from '../../Assets/bannerImage/1.jpg'
import image2 from '../../Assets/bannerImage/2.jpg'
import image3 from '../../Assets/bannerImage/3.jpg'
import './header.scss'

const Header = () => {
  return (
    // <Carousel>
    //   <Paper >
    //     <Typography>
    //       <img alt='image1st' src={image1} className='image' />
    //     </Typography>
    //     <Button variant="outlined">Click me please!</Button>
    //   </Paper>
    //   <Paper>
    //     <Typography><img alt='image1st' src={image2} className='image' /></Typography>
    //     <Button variant="outlined">Click me please!</Button>
    //   </Paper>
    //   <Paper>
    //     <Typography><img alt='image1st' src={image3} className='image' /></Typography>
    //     <Button variant="outlined">Click me please!</Button>
    //   </Paper>
    // </Carousel>
    <div className='background-image'>
      {/* <img className='image' src={image2} alt='image2backgroungd' /> */}
      <h1>Shad Azam</h1>
    </div>
  )
}

export default Header
