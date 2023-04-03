import PropTypes from 'prop-types';
import { Resizable } from 're-resizable'
import Draggable from 'react-draggable'
import { LinkBox, LinkOverlay, Image, Link } from '@chakra-ui/react'

function DraggableImage({ imageUrl, x, y } : { imageUrl: string, x: number, y: number }) {

    return (
        <LinkBox>
            <LinkOverlay>
                <Draggable defaultPosition = {{ x: x, y: y }}>
                    <Resizable 
                        defaultSize={{ width: 500, height: 349 }}
                        style = {{
                            background: `url(${imageUrl})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            position: 'static',
                            border: '1px solid #000',
                            backgroundColor: '#fff',
                        }}
                        lockAspectRatio = { true }
                    >
                    <Link href = { imageUrl } target = "_blank" rel = "noopener noreferrer" >
                        To Image
                    </Link>
                    </Resizable>
                </Draggable>
            </LinkOverlay>
        </LinkBox>
    )
}

export default DraggableImage;