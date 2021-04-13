import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    root:{
        padding: '1rem 2rem'
    },
    cardRoot: {
        minWidth: 275,
        maxHeight: 275
    },
    mobileCardRoot:{
        minWidth: 275,
        maxHeight: 475
    },
    title: {
        fontSize: 14,
    },
    button:{
        backgroundColor:'rgb(82,119,179)',
        color: 'white',
        padding: '0.5rem',
        borderRadius: 0,
        marginLeft: '0.5rem',
    }
}));

function ResourceCard({title, documentName, description, link}) {
    const isMobileSize = useMediaQuery(
        json2mq({
            maxWidth: 1100
        })
    );

    const classes = useStyles();
    const maxlimit = 200;
    return (
        <Grid item xs={12} sm={6} className={classes.root}>
            <Card square elevation={1} className={isMobileSize ? classes.mobileCardRoot : classes.cardRoot}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="h6" component="h6">
                        {documentName}
                    </Typography>
                    <br/>
                    <Typography variant="body2" component="p">
                    { 
                        ((description).length > maxlimit) 
                        ? (((description).substring(0, maxlimit-3)) + '...') 
                        : description 
                    }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"
                        className={classes.button}
                        onClick={link}
                    >View PDF</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ResourceCard
