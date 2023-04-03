import PropTypes from 'prop-types';
import { Resizable } from 're-resizable'
import Draggable from 'react-draggable'
import { LinkBox, LinkOverlay, Image } from '@chakra-ui/react'

function DraggableImage({ imageUrl, x, y } : { imageUrl: string, x: number, y: number }) {

    return (
        <LinkBox>
            <LinkOverlay>
                <Draggable defaultPosition = {{ x: x, y: y }}>
                    <Resizable 
                        defaultSize={{ width: 500, height: 500 }}
                        style = {{
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            position: 'static',
                            border: '1px solid #000',
                            backgroundColor: '#fff',
                        }}
                        lockAspectRatio = { true }
                    >
                        <Image src = { imageUrl } style = {{ border: '1px solid #000' }} />
                    </Resizable>
                </Draggable>
            </LinkOverlay>
        </LinkBox>
    )
}

export default DraggableImage;