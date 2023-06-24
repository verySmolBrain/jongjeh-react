import { ImageList, ImageListItem, useMediaQuery, useTheme } from '@mui/material';

interface ImageGalleryProps {
    src: string;
    title: string | undefined;
}

function WideImageGallery( { itemData }: { itemData: ImageGalleryProps[] } ) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <ImageList variant = "masonry" cols = {isMobile ? 1 : 2} gap = {8}>
            {
                itemData.map((item: { src: string; title: string | undefined; }) => (
                    <ImageListItem key = {item.src}>
                        <img
                            src = {`${item.src}?w=248&fit=crop&auto=format`}
                            srcSet = {`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt = {item.title}
                            loading = "lazy"
                        />
                    </ImageListItem>
                ))
            }
        </ImageList>
    )
}

export default WideImageGallery;