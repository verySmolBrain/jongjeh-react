import PropTypes from 'prop-types';
import { ImageList, ImageListItem } from '@mui/material';
import { Key } from 'react';

import image1 from '../assets/jongjeh_images/1.jpg'

interface ImageGalleryProps {
    img: string;
    title: string | undefined;
}

function ImageGallery( { itemData }: { itemData: ImageGalleryProps[] } ) {
    return (
        <ImageList variant = "masonry" cols = {3} gap = {8}>
            {
                itemData.map((item: { img: string; title: string | undefined; }) => (
                    <ImageListItem key = {item.img}>
                        <img
                            src = {`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet = {`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt = {item.title}
                            loading = "lazy"
                        />
                    </ImageListItem>
                ))
            }
        </ImageList>
    )
}

export default ImageGallery;