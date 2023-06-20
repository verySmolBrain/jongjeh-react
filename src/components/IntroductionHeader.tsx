import PropTypes from 'prop-types';
import { Avatar, Box, Grid, ImageList, ImageListItem, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Key } from 'react';

import jongjeh from '/jongjeh.webp'

// avatar has width and height max(width, height)

function IntroductionHeader() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid 
            container
            justifyContent = "center"
            alignItems = "center"
        >
            <Grid xs = {4} display = "flex" justifyContent = "flex-end">
                <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <Avatar sx = {{ 
                            width: isSmallScreen ? '15vw' : '10vw', 
                            height: isSmallScreen ? '15vw' : '10vw', 
                        }} src = "/jongjeh.webp"
                    >
                        Jongjeh
                    </Avatar>
                </a>
            </Grid>

            <Grid xs = {4}>
                <Typography variant = "h1" align = "center" fontFamily = {'"Indie Flower", cursive'}>
                    Jongjeh
                </Typography>
            </Grid>

            <Grid xs = {4}>

            </Grid>
        </Grid>
    )
}

export default IntroductionHeader;