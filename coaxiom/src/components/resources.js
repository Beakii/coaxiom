import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid } from '@material-ui/core';


import EuropeanComplianceProgramme from './pdf/EUROPEAN COMPLIANCE PROGRAMMES Five Data-Driven Insights for 2021.pdf'
import ComplianceAndRegulations from './pdf/1.-Compliance-and-Regulatory-Action-Framework.pdf'
import ComplianceNoticeGuidelines from './pdf/2.-Compliance-Notice-Guidelines.pdf'
import ComplianceRiskManagement from './pdf/Compliance-Risk-Management-Applying-the-COSO-ERM-Framework.pdf'
import EDPFGuideLines from './pdf/edpb_guidelines_202101_databreachnotificationexamples_v1_en.pdf'
import GIARiskManagement from './pdf/gia-risk-mgt-policyprocess_7_november_2017.pdf'
import WEFGlobalRisks from './pdf/WEF_The_Global_Risks_Report_2021.pdf'
import FinancialMarketConduct from './pdf/The-Financial-Markets-Conduct-Act-2013-A-Roadmap-for-the-regime-post-FSLAA.pdf'

import ResourceCard from './resources/ResourceCard';


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
}));

function Resources() {
    const classes = useStyles();

    return (
        <Paper square elevation={5} className={classes.root} id="top">
            <Typography className={classes.title}>
                Resources
            </Typography>

            <Grid container space={3}>

                <ResourceCard
                    title="Compliance 1"
                    documentName="EUROPEAN COMPLIANCE PROGRAMMES- Five Data-Driven Insights for 2021"
                    description="Based on insights from primary research undertaken by NAVEX Global, who questioned 130 ethics
                    and compliance professionals in Europe, here are five essential programme insights that European
                    businesses need to be aware of in 2021:"
                    link={() => window.open(EuropeanComplianceProgramme)}
                />

                <ResourceCard
                    title="Compliance 2"
                    documentName="COMPLIANCE RISK MANAGEMENT: APPLYING THE COSO ERM FRAMEWORK"
                    description="This COSO publication aims to provide guidance on the application of the COSO ERM framework to
                    the identification, assessment, and management of compliance risks by aligning it with the C&E
                    program framework, creating a powerful tool that integrates the concepts underlying each of these
                    valuable frameworks."
                    link={() => window.open(ComplianceRiskManagement)}
                />
                
                <ResourceCard
                    title="Compliance 3"
                    documentName="The Financial Markets Conduct Act (FMCA) Roadmap Financial Advice (FSLAA) effective 15 March 2021"
                    description="MinterEllisonRuddWatts has released the 14th edition of its popular Roadmap guide to the Financial 
                    Markets Conduct Act 2013 (FMCA) and the Financial Markets Conduct Regulations 2014. It is an excellent resource 
                    for everyone to use including directors and C-suite of financial service providers, capital markets participants, 
                    and internal legal counsel on this radical overhaul of New Zealand securities law."
                    link={() => window.open(FinancialMarketConduct)}
                />

                <ResourceCard
                    title="Risk Management 1"
                    documentName="World Economic Forum (WEF)The Global Risks Report 2021 16th Edition"
                    description="In 2020, the risk of a global pandemic became reality. As governments, businesses and societies
                    survey the damage inflicted over the last year, strengthening strategic foresight is now more
                    important than ever. With the world more attuned to risk, there is an opportunity to leverage
                    attention and find more effective ways to identify and communicate risk to decision-makers. It is in
                    this context that we publish the 16th edition of the World Economic Forum’s Global Risks Report."
                    link={() => window.open(WEFGlobalRisks)}
                />

                <ResourceCard
                    title="Risk Management 2"
                    documentName="Governance Institute of Australia Ltd- Risk Management Policy (A practical example)"
                    description="Risk management is a key element of effective corporate governance.
                    In view of this, Governance Institute of Australia Ltd (Governance Institute) has developed a Risk
                    Management Policy and Process not to completely avoid risk, but to identify and manage risk to
                    assist in achieving desired outcomes in a properly informed way."
                    link={() => window.open(GIARiskManagement)}
                />

                <ResourceCard
                    title="Privacy 1"
                    documentName="Office of the NZ Privacy Commissioner Compliance and Regulatory Action Framework for the
                    Privacy Act 2020"
                    description="Good privacy outcomes are best achieved when everyone understands their rights and
                    responsibilities and is motivated to act on them. Decisions about how we intervene to promote and
                    protect privacy must be predictable, rational, and defensible. We will use the right tool for the right
                    situation. Our aim in publishing this Framework is to make our regulatory approach as transparent as
                    possible. Our goal is high levels of voluntary compliance."
                    link={() => window.open(ComplianceAndRegulations)}
                />

                <ResourceCard
                    title="Privacy 2"
                    documentName="Office of the NZ Privacy Commissioner - Compliance Notice Guidelines Privacy Act 2020"
                    description="The Privacy Commissioner monitors compliance with the Privacy Act from a variety of channels
                    including public enquiries to OPC, media reports, privacy complaints, Commissioner initiated
                    inquiries and investigations, the exercise of the Commissioner’s oversight and monitoring functions,
                    privacy breach reporting to OPC, and referrals to OPC from other regulators, both within New
                    Zealand and internationally. The Privacy Commissioner also monitors compliance with the Privacy
                    Act codes of practice and with other specific codes and statutory provisions within the
                    Commissioner’s oversight."
                    link={() => window.open(ComplianceNoticeGuidelines)}
                />

                <ResourceCard
                    title="Privacy 3"
                    documentName="European Data Protection Board (EDPB) - Guidelines on Examples regarding Data Breach
                    Notifications"
                    description="The GDPR introduces the requirement for a personal data breach to be notified to the competent
                    national supervisory authority (hereinafter “SA”) and, in certain cases, to communicate the breach
                    to the individuals whose personal data have been affected by the breach (Articles 33 and 34)."
                    link={() => window.open(EDPFGuideLines)}
                />
            </Grid>
        </Paper>
    )
}

export default Resources
