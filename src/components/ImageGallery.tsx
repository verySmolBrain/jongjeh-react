import PropTypes from 'prop-types';
import { ImageList, ImageListItem, useMediaQuery, useTheme } from '@mui/material';
import { Key } from 'react';

interface ImageGalleryProps {
    img: string;
    title: string | undefined;
}

function ImageGallery( { itemData }: { itemData: ImageGalleryProps[] } ) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <ImageList variant = "masonry" cols = {isMobile ? 2 : 3} gap = {8}>
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