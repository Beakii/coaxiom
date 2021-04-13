import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { HashLink } from 'react-router-hash-link';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'start',
        minWidth: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        color: 'white',
        fontFamily: "'Lato', sans-serif",
    },
    list:{
        margin:'2rem 4rem'
    },
    listButton:{
        backgroundColor: 'rgb(82,119,179)',
        marginBottom: '0.5rem',
    },
    link:{
        textDecoration: 'none',
        color: 'white',
    }
}));

function FooterLinks() {
    const isMobileSize = useMediaQuery(
        json2mq({
            maxWidth: 850
        })
    );

    const classes = useStyles();

    return (
        <Paper square elevation={0} className={classes.root} style={isMobileSize ? {justifyContent: 'space-evenly'} : null}>
            <List
                className={!isMobileSize ? classes.list : null}
                subheader={
                    <ListSubheader id="nested-list-subheader" style={{color: 'white'}}>
                        Sitemap
                    </ListSubheader>
                }
            >
                <HashLink to="/#home#top" className={classes.link}>
                    <ListItem button className={classes.listButton}>
                        Home
                    </ListItem>
                </HashLink>

                
                <HashLink to="/Services#top" className={classes.link}>
                    <ListItem button className={classes.listButton}>
                        Services
                    </ListItem>
                </HashLink>


                
                <HashLink to="/About#top" className={classes.link}>
                    <ListItem button className={classes.listButton}>
                        About
                    </ListItem>
                </HashLink>
                
                <HashLink to="/Resources#top" className={classes.link}>
                    <ListItem button className={classes.listButton}>
                        Resources
                    </ListItem>
                </HashLink>
                
                {
                    isMobileSize 
                    ?
                        <HashLink to="/Contact#top" className={classes.link}>
                            <ListItem button className={classes.listButton}>
                                Contact
                            </ListItem>
                        </HashLink>
                    :
                    <HashLink to="#contact" className={classes.link}>
                        <ListItem button className={classes.listButton}>
                            Contact
                        </ListItem>
                    </HashLink>
                }

            </List>

            <List
                className={!isMobileSize ? classes.list : null}
                subheader={
                    <ListSubheader id="nested-list-subheader" style={{color: 'white'}}>
                        Terms of Use
                    </ListSubheader>
                }
            >
                <HashLink to="/Terms#top" className={classes.link}>
                    <ListItem button className={classes.listButton}>
                        Terms & Conditions
                    </ListItem>
                </HashLink>

                <HashLink to="/Privacy#top" className={classes.link}>
                    <ListItem button className={classes.listButton}>
                        Privacy Statement
                    </ListItem>
                </HashLink>
            </List>
        </Paper>
    )
}

export default FooterLinks
