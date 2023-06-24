import { Dialog, DialogContent, ImageList, ImageListItem, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';

interface ImageGalleryProps {
    src: string;
    title: string | undefined;
}

interface ImageGalleryParams {
    images: ImageGalleryProps[];
    is_wide: boolean;
}

function ImageGallery( { images, is_wide }: ImageGalleryParams ) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const base_columns = is_wide ? 1 : 2;

    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleClickOpen = (src: string) => {
        setSelectedImage(src);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ImageList variant = "masonry" cols = {isMobile ? base_columns : base_columns + 1} gap = {8}>
            {
                images.map((item: { src: string; title: string | undefined; }) => (
                    <ImageListItem key = {item.src}>
                        <img
                            src = {`${item.src}?w=248&fit=crop&auto=format`}
                            srcSet = {`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt = {item.title}
                            loading = "lazy"
                            onClick = { () => handleClickOpen(item.src) }
                        />
                    </ImageListItem>
                ))
            }
            <Dialog open = { open } onClose = { handleClose } onClick = { handleClose }>
                <img src = {`${selectedImage}?w=248&fit=crop&auto=format`} alt = "" style = {{ width: '100%' }}/>
            </Dialog>
        </ImageList>
    )
}

export default ImageGallery;