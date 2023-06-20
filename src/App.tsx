import { useState } from 'react'
import './App.css'

import ImageGallery from './components/ImageGallery'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme';
import red from '@mui/material/colors/red';
import IntroductionHeader from './components/IntroductionHeader';
import { responsiveFontSizes } from '@mui/material';

let theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
});
theme = responsiveFontSizes(theme);

function App() {
    const jongjeh_pics = import.meta.glob('./assets/jongjeh_images/*.(jpg|webp)', { as: "url", eager: true })
    const image_data = Object.keys(jongjeh_pics).map((url) => {
        const title = url.split('/').pop()?.split('.').pop()
        return {
            img: jongjeh_pics[url],
            title: title
        }
    })

    return (
        <ThemeProvider theme = {theme}>
            <IntroductionHeader />
            <ImageGallery itemData = { image_data }/>
        </ThemeProvider>
    )
}

export default App
