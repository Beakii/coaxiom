import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ContactFooter from './ContactFooter';
import FooterList from './contactInfo';
import Copyright from './Copyright';
import Paper from '@material-ui/core/Paper';
import FooterLinks from './FooterLinks';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
    },
    mobileRoot:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    desktop:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
}));

function Footer() {
    const isMobileSize = useMediaQuery(
        json2mq({
            maxWidth: 850
        })
    );

    const classes = useStyles();

    return (
        <Paper square elevation={5} className={isMobileSize ? classes.mobileRoot : classes.root} id="contact" style={{borderTop: '20px solid black'}}>
            {
                !isMobileSize 
                ?
                <div className={classes.desktop}>
                    <ContactFooter/>
                    <FooterList/>
                </div>
                :
                null
            }
            <FooterLinks/>
            <Copyright/>
        </Paper>
    )
}

export default Footer
