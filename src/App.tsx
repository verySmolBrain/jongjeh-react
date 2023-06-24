import { useEffect, useState } from 'react'
import './App.css'

import ImageGallery from './components/TallImageGallery'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme';
import red from '@mui/material/colors/red';
import IntroductionHeader from './components/IntroductionHeader';
import { Divider, List, ListItem, responsiveFontSizes } from '@mui/material';
import ImageGalleryFooter from './components/ImageGalleryFooter';
import ImageGalleryDynamic from './components/ImageGalleryDynamic';
import TallImageGallery from './components/TallImageGallery';
import WideImageGallery from './components/WideImageGallery';

let theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Indie Flower", cursive',
            '"Public Sans", sans-serif',
        ].join(','),
    },
});
theme = responsiveFontSizes(theme);

type Photo = {
    src: string
    title: string
}

function App() {
    const tall_images = import.meta.glob('./assets/tall_images/*.(jpg|webp)', { as: "url", eager: true })
    const wide_images = import.meta.glob('./assets/wide_images/*.(jpg|webp)', { as: "url", eager: true })

    async function loadImages(images: Record<string, string>) : Promise<Photo[]> {
        const imagePromises = Object.keys(images).map((url) => {
            return new Promise<Photo>((resolve) => {
                const image = new Image()
                image.src = images[url]
    
                image.onload = () => {
                    resolve({
                        src: images[url],
                        title: url.split('/').pop()?.split('.').shift() || '',
                    })
                }
            })
        })
    
        const photos = await Promise.all(imagePromises)
        return photos
    }
    
    const [wide_photos, setWidePhotos] = useState<Photo[]>([])

    useEffect(() => {
        async function fetchData() {
            const imageData = await loadImages(wide_images)
            setWidePhotos(imageData)
        }
        fetchData()
    }, [])

    const [tall_photos, setTallPhotos] = useState<Photo[]>([])

    useEffect(() => {
        async function fetchData() {
            const imageData = await loadImages(tall_images)
            setTallPhotos(imageData)
        }
        fetchData()
    }, [])

    return (
        <ThemeProvider theme = {theme}>
            <IntroductionHeader />
            <List>
                <ListItem>
                    <WideImageGallery itemData = { wide_photos }/>
                </ListItem>

                <Divider variant = "inset" component = "li" sx = {{ borderBottomWidth: 3, bgcolor: 'black' }}/>

                <ListItem>
                    <TallImageGallery itemData = { tall_photos }/>
                </ListItem>
            </List>
            <ImageGalleryFooter />
        </ThemeProvider>
    )
}

export default App
