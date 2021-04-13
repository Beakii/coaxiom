import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth:'50%',
        maxWidth: '50%',
    },
    topRow:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        padding: '0 2rem',
        justifyContent: 'start',
        alignItems: 'center',
        marginBottom: '1.5rem',
        marginTop: '1.5rem',
    },
    personRow:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        padding: '0 2rem',
    },
    icon:{
        marginRight: '1rem',
        fontSize: '2.5rem',
        color: 'rgb(82,119,179)'
    },
    text:{
        fontSize: '1.5rem',
        fontFamily: "'Lato', sans-serif",
        fontWeight: '300'
    },
    email:{
        '&:hover':{
            color: 'rgb(82,119,179)'
        },
        color: 'black',
        textDecoration: 'none'
    }
}));

function FooterList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.iconBox}>
                <div className={classes.topRow}>
                    <EmailIcon className={classes.icon}/>
                    <Typography className={classes.text}><a className={classes.email} href="mailto:info@co-axiom.com">info@co-axiom.com</a></Typography>
                </div>

                <br></br>
                <br></br>

                <div className={classes.personRow}>
                    <PersonIcon className={classes.icon}/>
                    <Typography className={classes.text}>John Stewart</Typography>
                </div>
                <div className={classes.personRow}>
                    <PhoneIcon className={classes.icon}/>
                    <Typography className={classes.text}>+64 (0)21 220 8703</Typography>
                </div>

                <br></br>
                <br></br>
                <br></br>

                <div className={classes.personRow}>
                    <PersonIcon className={classes.icon}/>
                    <Typography className={classes.text}>Avasha Singh</Typography>
                </div>
                <div className={classes.personRow}>
                    <PhoneIcon className={classes.icon}/>
                    <Typography className={classes.text}>+64 (0)21 843 611</Typography>
                </div>
            </div>
        </div>
    )
}

export default FooterList
