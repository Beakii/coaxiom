import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '77px',
        minHeight: '100vh',
        backgroundColor: 'rgba(117, 170, 255, 0.2)',
        
    },
    paperBig:{
        minWidth: '25vw',
        maxWidth: '50vw',
        marginTop: '10vh',
        marginLeft: '25vw'
    },
    paperSmall:{
        minWidth: '75vw',
        maxWidth: '100vw',
        minHeight: 'calc(100vh - 77px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '1rem',
        width: '100%',
        height: '100%'
    },
    textField:{
        width: '90vw',
        margin: '0.5rem',
    },
    textArea:{
        width: '90vw',
        margin: '0.5rem'
    },
    button:{
        flexGrow: 1,
        backgroundColor: 'rgb(82,119,179)',
    },
    buttonRow:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: '1',
        padding: '1rem',
    },
    select:{
        width: '90vw',
        margin: '0.5rem',
        borderColor: 'rgb(196,196,196)',
        color: 'rgb(119,119,119)',
        borderRadius: '5px',
        minHeight: '56px',
        paddingLeft: '0.5rem',
        fontSize: '1rem',
        opacity: '0.9',
        backgroundColor: 'white'
    },
    titleText:{
        paddingTop:'1.5rem',
        fontSize: '1.5rem'
    }
}));

function Contact() {
    const [isValid, setIsValid] = useState(false);

    const isMobileSize = useMediaQuery(
        json2mq({
            maxWidth: 850
        })
    );

    function submitForm(){
        console.log("success");
    }

    function onChange(value) {
        setIsValid(true);
    }
    
    const classes = useStyles();

    return (
        <div className={classes.root} id="top">
            <Paper square className={isMobileSize ? classes.paperSmall : classes.paperBig}>
                <Typography className={classes.titleText}>
                    Send us a message
                </Typography>
                <form 
                    className={classes.form} 
                    name="Co-Axiom Contact Form"
                    method="POST"
                >
                    <input type="hidden" name="form-name" value="Co-Axiom Contact Form"/>
                    <TextField
                        name="name"
                        type="text"
                        className={classes.textField}
                        required
                        id="outlined-required"
                        label="Full Name"
                        variant="outlined"
                    />
                    <TextField
                        name="number"
                        type="number"
                        className={classes.textField}
                        required
                        id="outlined-required"
                        label="Contact Number"
                        variant="outlined"
                    />
                    <TextField
                        name="organisation"
                        type="text"
                        className={classes.textField}
                        required
                        id="outlined-required"
                        label="Organisation"
                        variant="outlined"
                    />
                    <TextField
                        name="email"
                        type="email"
                        className={classes.textField}
                        required
                        id="outlined-required"
                        label="Email"
                        variant="outlined"
                    />
                    <select
                        name="service"
                        className={classes.select}
                    >
                        <option value="Economic Sustainability and Resilience">Economic Sustainability and Resilience</option>
                        <option value="Governance Risk & Compliance">Governance Risk & Compliance</option>
                        <option value="Not-For-Profit Support and Small/Medium Businesses">Not-For-Profit Support and Small/Medium Businesses</option>
                        <option value="Staffing and Coaching/Training Solutions">Staffing and Coaching/Training Solutions</option>
                        <option value="Other">Other</option>
                    </select>
                    <TextField
                        name="messsage"
                        type="text"
                        className={classes.textArea}
                        required
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={5}
                        variant="outlined"
                    />

                    <div className={classes.buttonRow}>
                        <Button
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            className={classes.button}
                            onClick={() => submitForm()}
                        >
                            Send message
                        </Button>
                    </div>
                </form>
            </Paper>
        </div>
    )
}

export default Contact
