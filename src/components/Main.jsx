import React from 'react';
import videovg from '../assets/sunrise.mp4';

const Main = () => {
    return (
    <div className='main'>
        <video src={videovg} autoPlay loop muted/>
        <div className='content'>
            <h1>Welcome</h1><br></br>
            {/* <p><i>Small changes, big impact.</i></p> */}
        </div>
    </div>
    );
}

export default Main;