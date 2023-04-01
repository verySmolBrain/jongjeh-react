import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

import { ChakraProvider, Text } from '@chakra-ui/react'

import DraggableImage from './components/DraggableImage'
import { TypeAnimation } from 'react-type-animation';

import image1 from './assets/1.png'
import image2 from './assets/2.png'
import image3 from './assets/3.png'
import image4 from './assets/4.png'
import image5 from './assets/5.png'

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
                style={{ fontSize: '5em' }}
                repeat={Infinity}
            />

            <Text> PLEASE ZOOM OUT IF YOU WANT A BETTER VIEW </Text>
            <Text> RIGHT CLICK IMAGE AND SAVE IMAGE FOR BETTER VIEW </Text>
            <Text> THE IMAGES ARE DRAGGABLE AND RESIZEABLE </Text>

            <DraggableImage imageUrl = { image1 } x = { left() } y = { top() } />
            <DraggableImage imageUrl = { image2 } x = { left() } y = { top() }  />
            <DraggableImage imageUrl = { image3 } x = { left() } y = { top() }  />
            <DraggableImage imageUrl = { image4 } x = { left() } y = { top() }  />
            <DraggableImage imageUrl = { image5 } x = { left() } y = { top() }  />
        </ChakraProvider>
    )
}

export default App
