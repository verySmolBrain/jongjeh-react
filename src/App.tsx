import './App.css'

import ImageGallery from './components/ImageGallery'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import IntroductionHeader from './components/IntroductionHeader';
import { Divider, LinearProgress, List, ListItem, responsiveFontSizes } from '@mui/material';
import ImageGalleryFooter from './components/ImageGalleryFooter';
import theme from './theme/theme';
import YoutubeEmbed from './components/YoutubeEmbed';
import AnimatedDivider from './components/AnimatedDivider';

type Photo = {
    src: string
    title: string
}

function App() {
    const tall_images = import.meta.glob('./assets/tall_images/*.(jpg|webp)', { as: "url", eager: true })
    const wide_images = import.meta.glob('./assets/wide_images/*.(jpg|webp)', { as: "url", eager: true })

    function generate_images(image_data: Record<string, string>) {
        const images: Photo[] = []
        for (const url in image_data) {
            const title = url.split('/').pop()?.split('.').pop()
            images.push({
                src: image_data[url],
                title: title || ""
            })
        }
        return images
    }

    return (
        <ThemeProvider theme = { theme }>
            <IntroductionHeader />

            <YoutubeEmbed embedId = "ZL0uGxBpuxw" />
            <AnimatedDivider />
                
            <ImageGallery images = { generate_images(wide_images) } is_wide = { true }/>
            <AnimatedDivider />

            <ImageGallery images = { generate_images(tall_images) } is_wide = { false }/>
            <AnimatedDivider />

            <ImageGalleryFooter />
        </ThemeProvider>
    )
}

export default App
