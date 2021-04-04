import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Button from '@material-ui/core/Button';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: 'black',
        opacity: '1',
    },
    appbarWrapper: {
        width: '90%',
        margin: '0 auto',
        opacity: '1'
    },
    appbarTitle: {
        flexGrow: '1',
        textDecoration: 'none',
        color: 'white',
        '&:hover':{
            color: 'rgb(82,119,179)'
        }
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
        '&:hover':{
            color: 'rgb(82,119,179)'
        }
    },
    button:{
        margin: '0.2rem',
        color: 'white',
        backgroundColor: 'rgb(82,119,179)',
        '&:hover':{
            color: 'black'
        }
    },
    outline:{
        margin: '0.2rem',
        color: "white",
        borderColor: "white",
        '&:hover':{
            borderColor: 'rgb(82,119,179)',
            backgroundColor: 'rgb(82,119,179)',
        }
    }
}));

function Header({toggleDrawer}) {

    const toggleOpenClose = () => {
        toggleDrawer();
    }

    const isMobileSize = useMediaQuery(
        json2mq({
            maxWidth: 850
        })
    );

    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.appbar}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}><Link to="/" className={classes.appbarTitle}>Co-Axiom</Link></h1>
                    {
                        !isMobileSize ? 
                        <Link to="/Services" style={{textDecoration: 'none'}}>
                            <Button
                                className={classes.outline}
                                variant="outlined"
                            >
                                Services
                            </Button>
                        </Link>
                        :
                        null
                    }

                    {
                        !isMobileSize ?
                        <HashLink to="#contact" style={{textDecoration: 'none', scrollBehavior: 'smooth'}}>
                            <Button
                                className={classes.button}
                                variant="contained"
                            >
                                Contact Us
                            </Button>
                        </HashLink>
                        :
                        null
                    }


                    <IconButton
                        onClick={toggleOpenClose}
                    >
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header

