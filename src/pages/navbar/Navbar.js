import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DevicesIcon from '@mui/icons-material/Devices';
import './navbar.css';
import logo from '../../Assets/logo.png'
import image from '../../Assets/shadazam.jpg';
import { pages } from '../../Assets/data/navbarData';



const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const location = useLocation()
    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#FAFAFA', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px ' }}>
            {/* // <AppBar position="static"> */}
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <DevicesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 1,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 800,
                            // letterSpacing: '.1rem',
                            color: '#083f0b',
                            textDecoration: 'none',
                        }}
                    >
                        <img alt='myOwnLogo' className='logos' src={logo} />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="#4B4B96"
                        >
                            <MenuIcon sx={{ color: "inherit" }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    component={Link}  // Change here
                                    to={`/${page.toLowerCase()}`}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* <DevicesIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: '#083f0b' }} /> */}
                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        to="/"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            // letterSpacing: '.3rem',
                            color: '#083f0b',
                            textDecoration: 'none',
                        }}
                    >
                        <img alt='myOwnLogo' className='logos' src={logo} />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                component={Link}  // Change here
                                to={`/${page.toLowerCase()}`}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    fontSize: 'calc(2px + 2vmin)',
                                    fontWeight: 600,
                                    color: location.pathname === `/${page.toLowerCase()}` ? '#000020' : '#083f0b',
                                    backgroundColor: location.pathname === `/${page.toLowerCase()}` ? '#2CBC63' : 'inherit',
                                    display: 'block',
                                    '&:hover': {
                                        border: '1px solid black',
                                        backgroundColor: '#97f19c',
                                    },
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip>
                            <Avatar alt="Shad Azam" src={image} />
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar