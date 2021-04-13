import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Paper, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

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
    gridPaper:{
        marginLeft: '2rem',
    },
    gridPaperAlt:{
        marginRight: '2rem',
    },
    gridPaperMobile:{
        padding: '1rem',
        margin: '1rem',
    },
    text:{
        margin: 0,
        fontFamily: "'Lato', sans-serif",
        fontWeight: '300',
        fontSize: '1rem',
        padding: '1rem'
    },
    title:{
        fontSize: '3rem',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: "'Lato', sans-serif",
        marginBottom: '2rem',
        backgroundColor: 'rgb(82,119,179)',
        color: 'white',
        margin: '2rem'
    },
    subHeadings:{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 'bold',
        fontSize: '1.2rem',
        backgroundColor: 'rgb(82,119,179)',
        color: 'white',
        padding: '1rem'
    },
    inTextHeading:{
        margin: 0,
        paddingTop: '0.3rem',
        paddingBottom: '0.3rem',
        fontWeight: 'bold',
        fontSize: '1rem'
    }
}));

function Services() {
    const isMobileSize = useMediaQuery(
        json2mq({
            maxWidth: 850
        })
    );
    
    const classes = useStyles();

    return (
        <Paper square elevation={5} className={classes.root} id="top">
            <Typography className={classes.title}>
                Our Services
            </Typography>

            <Grid container spacing={isMobileSize ? 0 : 5}>

                <Grid item xs={isMobileSize ? 12 : 6}>
                    <Paper square elevation={0} className={!isMobileSize ? classes.gridPaper : classes.gridPaperMobile}>

                        <Typography className={classes.subHeadings} id="ESaR">
                            Economic Sustainability and Resilience
                        </Typography>
                        <p className={classes.text}>
                            We understand each business is unique and there’s times when you just need support particularly with these turbulent COVID-19 impacts.  
                            We can assist with resilience management assessments and planning so that when disaster strikes you are prepared. 
                            We can help with strategic assessments, prioritisation, recovery projects, programme and change management and services tailored to suit your needs and support 
                            your business through challenging times.
                        </p>

                        <Typography className={classes.subHeadings} id="SaCTS">
                            Staffing, Coaching and Training Solutions
                        </Typography>
                        <p className={classes.text}>
                            <span className={classes.inTextHeading}>Staffing</span>
                            <p>
                                We can offer short term and long-term contract resources using the 
                                best candidates to assist you with your requirements.
                            </p>
                        </p>

                        <p className={classes.text}>
                            <span className={classes.inTextHeading}>Business Coaching/Mentorship</span>
                            <p>
                                We can assist you by partnering with you and your business 
                                and building and developing your skills and business.  We evaluate the current situation and 
                                build forward and better so that you attain your long-term strategic goals.
                            </p>
                        </p>

                        <p className={classes.text}>
                            <span className={classes.inTextHeading}>Training</span>
                            <p>
                                We can offer a range of training solutions through experienced HR Professionals, 
                                that can be customised to meet your requirements.
                            </p>
                        </p>

                        <p className={classes.text}>
                            <span className={classes.inTextHeading}>Internship</span>
                            <p>
                                We offer an engaging, mutually beneficial and supportive internship programme. 
                                We work with an internationally recognised internship placement company to obtain the best candidates.
                            </p>
                        </p>

                        <p className={classes.text}>
                            <span className={classes.inTextHeading}>Individual Mentorship Programme</span> 
                            <p>
                                We provide mentor / mentee support to promising young professionals providing 
                                opportunities to gain hands-on meaningful experience while being well supported in a professional environment. 
                                We are members of and aligned with the RIMS, the risk management society® mentorship process.
                            </p>
                        </p>

                        <Typography className={classes.subHeadings} id="NFPSaSMB">
                            Not-For-Profit Support and Small/Medium Businesses
                        </Typography>
                        <p className={classes.text}>
                            We provide tailored services for not-for-profit organisations and SME’s. 
                            We can assist with your governance, strategic and operational requirements. 
                            We can help business entrepreneurs with their personal and business growth and plans.
                        </p>
                    </Paper>
                </Grid>

                <Grid item xs={isMobileSize ? 12 : 6}>
                    <Paper square elevation={0} className={!isMobileSize ? classes.gridPaperAlt : classes.gridPaperMobile}>

                        <Typography className={classes.subHeadings} id="GRaC">
                            Governance, Risk and Compliance
                        </Typography>
                        <p className={classes.text}>
                            <span className={classes.inTextHeading}>Governance</span>
                            <p>
                                We can assess your governance environment, culture structure (working with HR organisational cultural experts) and recommend best practise. 
                                We can support with Management and Board capability assessments and professional development workshops.
                            </p>
                        </p>

                        <p className={classes.text}>
                            <span className={classes.inTextHeading}>Risk</span>
                            <p>
                            We can build, develop and/or enhance your enterprise risk management requirements and ensure it aligns to your strategic objectives. 
                            We support with expert services relating to Risk Appetite Frameworks and Statements, Risk Culture Assessments (working with HR cultural / change management experts), 
                            Risk Maturity Assessments, Strategic, Tactical or Day-to-Day Risk Management assistance, drafting Risk Management policies and procedures. 
                            We work with world class technology suppliers to ensure an integrated technology solution that is fit for purpose for your organisation.
                            </p>
                        </p>

                        <p className={classes.text}>
                            <span className={classes.inTextHeading}>Compliance</span>
                            <p>
                            We help you to navigate and meet your regulatory obligations. We support with Compliance Framework, policies and procedures drafting and implementation. 
                            Obligations Register Implementation, Ongoing Obligatory Measurement, Monitoring and Reporting, Regulatory Remediation Assessments, Reporting and Tracking. 
                            We work with world class technology suppliers to ensure an integrated technology solution that is fit for purpose for your organisation.
                            </p>
                        </p>

                        <p className={classes.text}>
                            Additionally, we can assist with the following specialist services:
                        </p>

                        <p className={classes.text}>
                            <span className={classes.inTextHeading}>Anti-Money Laundering (AML) Services</span> - We can help you with your AML strategy, risk assessment, compliance program, AML audit, KYC processing, and AML audit requirements.
                        </p>
                        <p className={classes.text}>
                            <span className={classes.inTextHeading}>Supplier / Vendor Assessments</span> – We can assist you assess your suppliers / vendors to see if they are meeting your expectations or contractual requirements?  We can help develop a strategy / roadmap for you, or help you assess your suppliers / vendors.
                        </p>
                        <p className={classes.text}>
                            <span className={classes.inTextHeading}>Privacy Reviews</span> – We can assist you with your preparation for the updated legislation requirements and provide you with an assessment of your current and future privacy process and controls. 
                        </p>
                        <p className={classes.text}>
                            <span className={classes.inTextHeading}>Controls Assessments</span>– We can help you with controls report for FMCA/FSLAA regulatory obligations or to meet your customers’ requirements?  
                                                                                                We can provide assurance by either a report or a non-opinion-based assessment, 
                                                                                                customised to your requirements to ensure that your controls and processes meet your regulatory requirements.
                        </p>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Services
