import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {

    return (

        <Box>
            <img width='100%' height='500px' src="https://th.bing.com/th/id/R.3abd6dea76b1aba1347d87e4429e6fdf?rik=v31dkhUBJmVWcw&pid=ImgRaw&r=0" alt="" />

            <Box sx={{ display: 'flex', mt: -10, justifyContent: 'right', mx: 5 }}>
                <NavLink style={{ textDecoration: 'none' }} to='allProducts'>  <Button sx={{ width: '220px' }} variant='contained'> All Products</Button></NavLink>
            </Box>
        </Box>


    );
};

export default Banner;