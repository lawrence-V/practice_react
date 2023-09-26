import { useState } from 'react';
import {Link} from 'react-router-dom'
import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';



const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    // const toggleDarkmode = () => {
    //     setIsDarkMode(prevDarkMode => !prevDarkMode);
    //     document.body.classList.toggle('dark-mode');
    // }

    return ( 
        <nav className="navbar">
            <h1>The karl Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" >New Blog</Link>
                <Button 
            onClick={toggleColorMode} 
            leftIcon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            color={colorMode === 'dark' ? 'white' : 'black'}
        >
            Toggle {colorMode === "dark" ? "Light" : "Dark"} Mode
        </Button>

            </div>
        </nav>
     );
}
 
export default Navbar;