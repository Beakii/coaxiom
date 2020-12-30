import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: '#000',
        opacity: '1',
    },
    appbarWrapper: {
        width: '90%',
        margin: '0 auto',
        opacity: '1'
    },
    appbarTitle: {
        flexGrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem'
    }
}));

function Header() {
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.appbar}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>Co-Axiom</h1>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header

