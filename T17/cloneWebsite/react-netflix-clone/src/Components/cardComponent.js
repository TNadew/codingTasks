import Stack from 'react-bootstrap/esm/Stack';
import '../Style/cardComponentStyle.css'

/** reusable functionnal componenent with header, description , imgSource and image position(left or right) */
function reusableCard(props) {
    return (
        <div>
            <div className={"reusable-" + props.imagePosition}>
                <Stack id='justifiedStack' direction='vertical'>
                    <h2 className='defaulth2'>{props.header}</h2>
                    <p className='defaultp'>{props.description}</p>
                </Stack>
                <img src={props.imgSource} alt="" />
            </div>
            <div id='separator' />
        </div>
    );
}

export default reusableCard;