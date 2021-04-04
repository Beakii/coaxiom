import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '77px',
        paddingTop:'2rem',
        minHeight: 'calc(100vh - 77px)',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1200px',
        margin: '0 auto',
    },

/////////////////////////////////////THE COMPANY
    theCompany:{
        maxWidth: '1000px',
        margin: '0 auto',
        minHeight: '45vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem',
        fontFamily: "'Lato', sans-serif",
        fontWeight: '300',
        fontSize: '1.2rem',
        textAlign: 'justify',
        lineHeight: '1.5rem'
    },
    theCompanyMobile:{
        maxWidth: '100vw',
        minHeight: '45vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        fontFamily: "'Lato', sans-serif",
        fontWeight: '300',
        fontSize: '1.2rem',
        textAlign: 'left',
    },
    aboutUsText:{
        fontSize: '3rem',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: "'Lato', sans-serif",
        backgroundColor: 'rgb(82,119,179)',
        color: 'white',
        margin: '2rem',
    },
    inTextHeading:{
        fontWeight: 'bold',
        fontSize: '1.05rem'
    },
/////////////////////////////////////////

////////////////////////////////////THE TEAM
    theTeam:{
        display: 'flex',
        flexDirection: 'row',
        margin: '0 auto',
        padding: '2rem',
        maxWidth: '1000px'
    },
    theTeamMobile:{
        display: 'flex',
        flexDirection: 'column',
    },
    topInfo:{
        minHeight: '50vh',
        width: '100vw',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
    },
    bottomInfo:{
        minHeight: '50vh',
        width: '100vw',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
    },
    info:{
        minHeight: '50vh',
        maxWidth: '35vw',
        minWidth: '50%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        textAlign:'justify'
    },
    profilePictures:{
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        marginBottom: '1rem'
    },
    employeeName:{
        fontSize: '1.5rem',
        fontWeight: '500',
        fontFamily: "'Lato', sans-serif",
    },
    employeeAbout:{
        fontSize: '1rem',
        fontWeight: '300',
        fontFamily: "'Lato', sans-serif",
    }
/////////////////////////////////////////
}));

function About() {
    const isMobileSize = useMediaQuery(
        json2mq({
            maxWidth: 850
        })
    );
    
    const classes = useStyles();

    return (
        <Paper square square elevation={5} className={classes.root} id="top">
                            <Typography className={classes.aboutUsText}>
                    About Us
                </Typography>
            <Paper 
                square 
                elevation={0} 
                className={isMobileSize ? classes.theCompanyMobile : classes.theCompany} 
            >
                <p>
                    <span className={classes.inTextHeading}>Co-Axiom Associates</span> is a newly established consulting company founded by experienced financial services professionals. We specialise in the provision of professional and trustworthy services in the areas of Corporate Governance, Risk and Compliance, Project and Change Management, Internal Audit and Controls Assurance and Economic Sustainability. Co-Axiom’s ethos focuses on the human element and creates an environment that allows our team and clients to flourish and reach their full potential. 
                </p>
                <p>
                    <span className={classes.inTextHeading}>Co-Axiom</span> is defined as "A statement or proposition which is regarded as being established, accepted, or self-evidently true that is co-created with the client and us". 
                </p>
                <p>
                    We seek to deliver truthful insights, aligned to our <span className={classes.inTextHeading}>TRUTH</span> values: 
                </p>
                <p>
                    <span className={classes.inTextHeading}>T – Team</span> – We believe in people so we find the best and we work together as one team.  
                    <br></br>
                    <span className={classes.inTextHeading}>R – Respect</span> – We respect and value the uniqueness of each individual and business.  
                    <br></br>
                    <span className={classes.inTextHeading}>U – Understand</span> – We seek first to understand and then deliver high quality solutions.
                    <br></br>
                    <span className={classes.inTextHeading}>T – Think Differently</span> – We think outside the box and deliver value and excellence to exceed expectations.  
                    <br></br>
                    <span className={classes.inTextHeading}>H – Honesty</span> - We are honest, open, fair, ethical and genuine. People trust us, we lead with integrity.  
                </p>
            </Paper>
            <Paper square square elevation={0} className={isMobileSize ? classes.theTeamMobile : classes.theTeam}>
                <Paper square elevation={0} className={isMobileSize ? classes.topInfo : classes.info}>
                    <img className={classes.profilePictures} src={"john.jfif"}></img>
                    <Typography className={classes.employeeName}>
                        John Stewart
                    </Typography>
                    <p className={classes.employeeAbout}>
                        John is a sort after financial services expert with over 35 years New Zealand and international experience working for large  multinational, 
                        SME’s and NGO’s in the areas of Corporate Governance, Risk & Compliance, Internal Audit, Programme Management and Accounting. 
                    </p>
                    <p className={classes.employeeAbout}>
                        John has played pivotal roles in implementing leading Governance, Risk & Compliance and Assurance solutions. 
                        John’s experience and strong analytical ability allows him to review   complex issues with ease and identify challenges and provide tailored solutions. 
                        John will provide strategic leadership and direction whilst delivering practical and pragmatic operational solutions that are based on ethical principles and requirements. 
                    </p>
                    <p className={classes.employeeAbout}>
                        John is passionate about giving back to the community and enjoys mentoring promising young professionals in the risk profession. 
                        John has served and continues to serve on multiple Boards. For relaxation John enjoys spending time with his family, and walking his dog. 
                        John has travelled extensively and enjoys experiencing  different cultures.
                    </p>
                </Paper>
                <Paper square elevation={0} className={isMobileSize ? classes.bottomInfo : classes.info}>
                    <img className={classes.profilePictures} src={"avasha.jfif"}></img>
                    <Typography className={classes.employeeName}>
                        Avasha Singh
                    </Typography>
                    <p className={classes.employeeAbout}>
                        Avasha is a highly experienced professional with more than 13 years experience in Internal Audit, Assurance, Risk & Compliance, Project & Change Management and Governance 
                        grounded in her Chartered Accounting background. Avasha’s friendly nature, curiosity, enthusiasm, ‘can do’ attitude and collaborative leadership qualities combined with 
                        her natural resilience and relationship building skills makes her someone you want on your team. 
                    </p>
                    <p className={classes.employeeAbout}>
                        Avasha’s ability to negotiate and influence at all levels ensures she delivers practical, pragmatic and strategic solutions whilst developing and coaching so that others can 
                        achieve their goals and aspirations. Avasha has strong ethical principles. Avasha works with and is a member of various Boards. Avasha is motivated by a challenge and finds great 
                        fulfilment in making a positive difference in communities and is an avid volunteer for a number of not-for-profit organisations locally and globally. Avasha loves cooking, baking and 
                        spending time with friends and family.   
                    </p>
                </Paper>
            </Paper>
        </Paper>
    )
}

export default About
