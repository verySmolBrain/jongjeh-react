import PhotoAlbum from "react-photo-album";

interface ImageGalleryDynamicProps {
    src: string
    width: number
    height: number
}

interface GalleryProps {
    photos: ImageGalleryDynamicProps[]
}

export default function Gallery( { photos }: GalleryProps) {
    return <PhotoAlbum layout = "rows" photos={ photos } />;
}

// Lightbox