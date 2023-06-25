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

    let columns = 2;
    if (is_wide) {
        columns = 1;
    } else {
        columns = isMobile ? 2 : 3;
    }

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
        <ImageList variant = "masonry" cols = {columns} gap = {8}>
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
            <Dialog 
                open = { open } 
                onClose = { handleClose } 
                onClick = { handleClose } 
                PaperProps = {{
                    style: {
                        maxWidth: "100%",
                    }
                }}
            >
                <img src = {`${selectedImage}?w=400&fit=crop&auto=format`} alt = "" style = {{ maxWidth: "100%", maxHeight: "calc(100vh - 64px)" }}/>
            </Dialog>
        </ImageList>
    )
}

export default ImageGallery;