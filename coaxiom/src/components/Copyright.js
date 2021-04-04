import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Copyright() {

    const isMobileSize = useMediaQuery(
        json2mq({
            maxWidth: 850
        })
    );

    return (
        <div style={{backgroundColor: 'black', color:'white', minWidth:"100%", textAlign: 'center' }}>
            <p>
                Co-Axiom Associates Limited © 2021
            </p>
            <p style={{opacity:'0.7', display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
                Development and Design by James Stewart
                <div style={{padding:'0.5rem 0.5rem'}}>
                    <a href="https://github.com/beakii" style={{padding:'0.5rem 0.5rem', textDecoration: 'none', color: 'white', opacity: '0.7',}}>
                        <GitHubIcon/>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/james-stewart-developer/" style={{textDecoration: 'none', color: 'white', opacity: '0.7'}}>
                        <LinkedInIcon/>
                    </a>
                </div>
            </p>
        </div>
    )
}

export default Copyright
