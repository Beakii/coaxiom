import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { HashLink } from 'react-router-hash-link';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const services = [
    {
      label: 'Economic Sustainability and Resilience',
    },
    {
      label: 'Governance Risk & Compliance',
    },
    {
      label: 'Not-For-Profit Support and Small/Medium Businesses',
    },
    {
      label: 'Staffing and Coaching/Training Solutions',
    },
  ];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '50vw',
        minHeight: '30vh',
        marginLeft: '25vw',
        marginTop: '25vh',
        marginBottom: '40vh'
    },
    mobileRoot: {
        maxWidth: '100vw',
        minHeight: 'calc(100vh - 77px)',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/landing.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    },
    paperText:{
        display: 'flex',
        minWidth: '100px',
        minHeight: '10vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '4rem',
        fontWeight: 'bold',
        color: 'white',
        paddingTop: '2.5vh'
    },
    paperTextMobile:{
        display: 'flex',
        minWidth: '100px',
        minHeight: '50vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:  '2rem',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        paddingTop: '13vh',
        marginBottom: '13vh'
    },
    paperSubText:{
      display: 'flex',
      minWidth: '100px',
      minHeight: '5vh',
      paddingBottom: '2rem',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.9rem',
      color: 'white',
      fontFamily: "'Lato', sans-serif",
      fontWeight: '300',
      textAlign: 'center'
    },
    buttonText:{
      display: 'flex',
      minWidth: '100%',
      minHeight: '10vh',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.5rem',
      color: 'white',
      margin: '0 auto',
      borderRadius: '0',
      textTransform: 'none',
      backgroundColor: 'rgba(117, 170, 255, 0.7)',
      fontFamily: "'Lato', sans-serif",
    },
    buttonTextMobile:{
      display: 'flex',
      minWidth: '100%',
      minHeight: '20vh',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.2rem',
      color: 'white',
      margin: '0 auto',
      borderRadius: '0',
      textTransform: 'none',
      backgroundColor: 'rgba(117, 170, 255, 0.8)',
    },
    paper:{
      backgroundColor: 'rgba(0,0,0,0.8)'
    },
    paperButton:{
      backgroundColor: 'rgba(0,0,0,1)'
    },
    stepper:{
      maxWidth:'100vw',
      backgroundColor: 'lightgrey'
    }
  }));

function TitleSquare() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const getRoute = (index) => {
      switch (index) {
        case 0:
          return "/Services#ESaR"
        case 1:
          return "/Services#GRaC"
        case 2:
          return "/Services#NFPSaSMB"
        case 3:
          return "/Services#SaCTS"
        default:
          return "/Services"
      }
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleStepChange = (step) => {
        setActiveStep(step);
      };

    const isMobileSize = useMediaQuery(
        json2mq({
            maxWidth: 850
        })
    );

    return (
      <div className={isMobileSize ? classes.mobileRoot : classes.root}>
      <Paper square elevation={0} className={classes.paper}>
        <Typography 
          className={isMobileSize ? classes.paperTextMobile : classes.paperText}
          style={isMobileSize ? {fontFamily: "'Lato', sans-serif",} : null}
        >
            {
              !isMobileSize
              ?
              "Co-Axiom"
              :
              "Risk Management at the 'Heart' of your Business"
            }
        </Typography>
        <Typography
          className={classes.paperSubText}
        >
            {
              !isMobileSize
              ?
              "Setting the standard in Risk Management"
              :
              null
            }
        </Typography>
      </Paper>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {services.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
                  <Paper square elevation={2} className={classes.paperButton}>
                    <HashLink to={getRoute(index)} style={{textDecoration: 'none'}}>
                      <Button 
                        variant="contained" 
                        className={isMobileSize ? classes.buttonTextMobile : classes.buttonText}
                      >
                        {services[activeStep].label}
                      </Button>
                    </HashLink>
                  </Paper>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
      <MobileStepper
        style={isMobileSize ? {display: 'flex', justifyContent: 'center'} : null}
        className={classes.stepper}
        variant="dots"
        steps={4}
        position="static"
        activeStep={activeStep}
        nextButton={
          !isMobileSize
          ?
            <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
            :
          null
        }
        backButton={
          !isMobileSize
          ?
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          :
          null
        }
      />
    </div>
    )
}

export default TitleSquare
