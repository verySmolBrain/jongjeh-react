import { ImageList, ImageListItem, useMediaQuery, useTheme } from '@mui/material';

interface ImageGalleryProps {
    src: string;
    title: string | undefined;
}

interface ImageGalleryParams {
    itemData: ImageGalleryProps[];
    is_wide: boolean;
}

function ImageGallery( { itemData, is_wide }: ImageGalleryParams ) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const base_columns = is_wide ? 1 : 2;

    return (
        <ImageList variant = "masonry" cols = {isMobile ? base_columns : base_columns + 1} gap = {8}>
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

export default ImageGallery;