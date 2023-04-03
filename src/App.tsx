import { useState } from 'react'
import './App.css'

import { Box, ChakraProvider, Container, Text } from '@chakra-ui/react'

import DraggableImage from './components/DraggableImage'
import { TypeAnimation } from 'react-type-animation';

import image1 from './assets/1.jpg'
import image2 from './assets/2.jpg'
import image3 from './assets/3.jpg'
import image4 from './assets/4.jpg'
import image5 from './assets/5.jpg'
import image6 from './assets/6.jpg'
import image7 from './assets/7.jpg'
import image8 from './assets/8.jpg'
import image9 from './assets/9.jpg'
import image10 from './assets/10.jpg'
import image11 from './assets/11.jpg'
import image12 from './assets/12.jpg'
import image13 from './assets/13.jpg'
import image14 from './assets/14.jpg'
import image15 from './assets/15.jpg'

function App() {
    let min_left = -250;
    let max_left = 500;

    let min_top = 0;
    let max_top = 250;

    function left() {
        return Math.random() * (max_left - min_left) + min_left;
    }

    function top() {
        return Math.random() * (max_top - min_top) + min_top;
    }

    return (
        <ChakraProvider>
            <Container w = '100%' color='green'>
                <TypeAnimation
                    sequence={[
                        // Same String at the start will only be typed once, initially
                        'Gizturd',
                        1000,
                        'Jongjeh',
                        1000,
                        'Gumjongjeh',
                        1000,
                        'Kimchi',
                        1000,
                        'Kimchi ඞ',
                        1000,
                        'Kimchi Fried Rice',
                        1000,
                        'Kimchi Pancakes',
                        1000,
                        'Cabbage',
                        1000,
                        'Cabbage Kimchi',
                        1000,
                        'Bibimbap',
                        1000
                    ]}
                    speed={50}
                    style={{ fontSize: '3em' }}
                    repeat={Infinity}
                />
            </Container>



            <Text> PLEASE ZOOM OUT IF YOU WANT A BETTER VIEW </Text>
            <Text> Click 'To Image' to access Image </Text>
            <Text> THE IMAGES ARE DRAGGABLE AND RESIZEABLE </Text>

            <DraggableImage imageUrl = { image1 } x = { left() } y = { top() } width = { 350 } height = { 494 } />
            <DraggableImage imageUrl = { image2 } x = { left() } y = { top() }  width = { 350 } height = { 494 } />
            <DraggableImage imageUrl = { image3 } x = { left() } y = { top() }  width = { 494 } height = { 350 } />
            <DraggableImage imageUrl = { image4 } x = { left() } y = { top() }  width = { 350 } height = { 494 } />
            <DraggableImage imageUrl = { image5 } x = { left() } y = { top() }  width = { 372 } height = { 350 } />
            <DraggableImage imageUrl = { image6 } x = { left() } y = { top() } width = { 494 } height = { 350 } />
            <DraggableImage imageUrl = { image7 } x = { left() } y = { top() }  width = { 350 } height = { 494 } />
            <DraggableImage imageUrl = { image8 } x = { left() } y = { top() }  width = { 350 } height = { 420 } />
            <DraggableImage imageUrl = { image9 } x = { left() } y = { top() }  width = { 494 } height = { 350 } />
            <DraggableImage imageUrl = { image10 } x = { left() } y = { top() }  width = { 350 } height = { 494 } />
            <DraggableImage imageUrl = { image11 } x = { left() } y = { top() } width = { 350 } height = { 494 } />
            <DraggableImage imageUrl = { image12 } x = { left() } y = { top() }  width = { 350 } height = { 494 } />
            <DraggableImage imageUrl = { image13 } x = { left() } y = { top() }  width = { 350 } height = { 494 } />
            <DraggableImage imageUrl = { image14 } x = { left() } y = { top() }  width = { 350 } height = { 494 } />
            <DraggableImage imageUrl = { image15 } x = { left() } y = { top() }  width = { 350 } height = { 494 } />
        </ChakraProvider>
    )
}

export default App
