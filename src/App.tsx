import { useState } from 'react'
import './App.css'

import ImageGallery from './components/ImageGallery'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme';
import red from '@mui/material/colors/red';

const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
    },
  });

function App() {
    const jongjeh_pics = import.meta.glob('./assets/jongjeh_images/*.jpg')
    const image_data = Object.keys(jongjeh_pics).map((path) => {
        return {
            img: new URL(path, import.meta.url).pathname,
            title: path.split('/').pop()?.split('.')[0],
        }
    })

    console.log(jongjeh_pics)

    return (
        <ThemeProvider theme = {theme}>
            <ImageGallery itemData = { image_data }/>
        </ThemeProvider>
    )
}

export default App
