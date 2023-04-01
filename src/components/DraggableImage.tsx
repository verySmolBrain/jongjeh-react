import PropTypes from 'prop-types';
import { Resizable } from 're-resizable'
import Draggable from 'react-draggable'

function DraggableImage({ imageUrl, x, y } : { imageUrl: string, x: number, y: number }) {

    return (
        <Draggable defaultPosition = {{ x: x, y: y }}>
            <Resizable 
                defaultSize={{ width: 500, height: 500 }}
                style = {{
                    background: `url(${imageUrl})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    border: '1px solid #000',
                    backgroundColor: '#fff',
                }}
                lockAspectRatio = { true }
            >
            </Resizable>
        </Draggable>
    )
}

export default DraggableImage;