import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TitleSquare from './landing/titleSquare';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '77px',
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/landing.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    },
    mobileRoot:{
        paddingTop: '77px',
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/landing.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    }
}));

function Landing() {
    const isMobileSize = useMediaQuery(
        json2mq({
            maxWidth: 850
        })
    );
    
    const classes = useStyles();

    return (
        <div className={isMobileSize ? classes.mobileRoot : classes.root} id="top">
            <TitleSquare/>
        </div>
    )
}

export default Landing
