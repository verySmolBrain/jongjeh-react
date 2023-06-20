import PropTypes from 'prop-types';
import { Avatar, Box, Grid, ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import { Key } from 'react';

import jongjeh from '/jongjeh.webp'

// avatar has width and height max(width, height)

function IntroductionHeader() {
    return (
        <Grid 
            container
            justifyContent = "center"
            alignItems = "center"
        >
            <Grid xs = {4} display = "flex" justifyContent = "flex-end">
                <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <Avatar sx = {{ width: '10vw', height: '10vw' }} src = "/jongjeh.webp">
                        Jongjeh
                    </Avatar>
                </a>
            </Grid>

            <Grid xs = {4}>
                <Typography variant = "h1" align = "center" fontFamily = {"https://fonts.googleapis.com/css?family=Sofia"}>
                    Jongjeh
                </Typography>
            </Grid>

            <Grid xs = {4}>

            </Grid>
        </Grid>
    )
}

export default IntroductionHeader;