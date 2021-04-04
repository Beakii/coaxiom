import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Paper, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import EuropeanComplianceProgramme from './pdf/EUROPEAN COMPLIANCE PROGRAMMES Five Data-Driven Insights for 2021.pdf'
import ComplianceAndRegulations from './pdf/1.-Compliance-and-Regulatory-Action-Framework.pdf'
import ComplianceNoticeGuidelines from './pdf/2.-Compliance-Notice-Guidelines.pdf'
import ComplianceRiskManagement from './pdf/Compliance-Risk-Management-Applying-the-COSO-ERM-Framework.pdf'
import EDPFGuideLines from './pdf/edpb_guidelines_202101_databreachnotificationexamples_v1_en.pdf'
import GIARiskManagement from './pdf/gia-risk-mgt-policyprocess_7_november_2017.pdf'
import WEFGlobalRisks from './pdf/WEF_The_Global_Risks_Report_2021.pdf'

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
    gridItem:{
        textAlign: 'center'
    }
}));

function Resources() {
    const isMobileSize = useMediaQuery(
        json2mq({
            maxWidth: 850
        })
    );
    
    const classes = useStyles();

    return (
        <Paper square elevation={5} className={classes.root} id="top">
            <Typography className={classes.title}>
                Resources
            </Typography>

            <Grid container space={3}>

            <Grid item xs={12} sm={4} className={classes.gridItem}>
                <Link onClick={() => window.open(EuropeanComplianceProgramme)}>European Compliance Programme</Link>
            </Grid>

            <Grid item xs={12} sm={4} className={classes.gridItem}>
                <Link onClick={() => window.open(ComplianceAndRegulations)}>Compliance and Regulations</Link>
            </Grid>

            <Grid item xs={12} sm={4} className={classes.gridItem}>
                <Link onClick={() => window.open(ComplianceNoticeGuidelines)}>Compliance Notice Guidelines</Link>
            </Grid>

            <Grid item xs={12} sm={4} className={classes.gridItem}>
                <Link onClick={() => window.open(ComplianceRiskManagement)}>Compliance Risk Management</Link>
            </Grid>

            <Grid item xs={12} sm={4} className={classes.gridItem}>
                <Link onClick={() => window.open(EDPFGuideLines)}>EDPF Guidelines</Link>
            </Grid>

            <Grid item xs={12} sm={4} className={classes.gridItem}>
                <Link onClick={() => window.open(GIARiskManagement)}>GIA Risk Management</Link>
            </Grid>

            <Grid item xs={12} sm={4} className={classes.gridItem}>
                <Link onClick={() => window.open(WEFGlobalRisks)}>WEF Global Risks</Link>
            </Grid>

            </Grid>
        </Paper>
    )
}

export default Resources
