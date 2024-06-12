import '../Style/ComponentsStyle.css';
import Stack from 'react-bootstrap/esm/Stack';
import popcorn from "../ressources/popCorn.png";

function adsBanner() {
    return (
        <div id='banner'>
            <div style={{justifyContent: "right"}}>
                <img src={popcorn} alt=""  />
            </div>
            <Stack direction='vertical' style={{alignItems:'start', width:'auto'}} >
                <p className='defaultFontS20W500H30PX'>The Netflix you love for just £4.99.</p>
                <p className='defaultFontS16H24PX'>Get the Standard with adverts plan.</p>
                <button id="learnMore" role="link" >Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="ChevronRightStandard" aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"> </path>
                    </svg>
                </button>
            </Stack>

        </div>

    );
}

export default adsBanner;