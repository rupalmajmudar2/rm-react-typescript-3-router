//Functional component
import React from 'react';
import './modal.css';

const About = () => {
    return (
        <div>
            <div className='modal'>
                <div className='modal-content'>
                    <h3>I am a modal</h3>
                </div>
            </div>
            <div 
                className='ui raise very padded text container segment'
                style = {{marginTop : '80px'}}
            >
                <h3 className='ui header'>
                    About
                </h3>
                <p>dhslk dskl</p>
            </div>
        </div>
    )
}

export default About;