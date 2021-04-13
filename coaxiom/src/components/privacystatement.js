import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { HashLink } from 'react-router-hash-link';

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
        margin: '0 2rem',
        fontFamily: "'Lato', sans-serif",
        fontWeight: '300',
        fontSize: '1rem',
        padding: '1rem',
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
        padding: '1rem',
        margin: '2rem',
        minWidth: '25%',
    },
    inTextHeading:{
        margin: 0,
        paddingTop: '0.3rem',
        paddingBottom: '0.3rem',
        fontWeight: 'bold',
        fontSize: '1rem'
    },
    list:{
        fontFamily: "'Lato', sans-serif",
        fontWeight: '300',
        fontSize: '1rem',
        padding: '0 4rem',
    }
}));


function PrivacyStatement() {   
    const classes = useStyles();

    return (
        <Paper square elevation={5} className={classes.root} id="top">
            <Typography className={classes.title}>
                Co-Axiom Associates Ltd Privacy Statement
            </Typography>

            <p className={classes.text}>
                We respect your right to privacy and your right to view and update the personal information we hold about you. We are committed to protecting your privacy when you visit our site or contact us in any way.
            </p>

            <Typography className={classes.subHeadings}>
                INTRODUCTION
            </Typography>
            <p className={classes.text}>
                Co-Axiom Associates Ltd (Co-Axiom) complies with the New Zealand Privacy Act 2020 (the Act) when dealing with personal information.  Personal information is information about an identifiable individual (a natural person).
            </p>

            <p className={classes.text}>
                This statement sets out how we will collect, use, disclose and protect your personal information. This statement does not limit or exclude any of your rights under the Act.  If you wish to seek further information on the Act, see <a href="https://www.privacy.org.nz" rel="noreferrer" target="_blank">www.privacy.org.nz</a>. By submitting your details on this website, you consent to our using your personal information in accordance with this privacy statement.
            </p>

            <Typography className={classes.subHeadings}>
                This policy covers the following topics:
            </Typography>

            <ul className={classes.list}>
                <li>What Information we collect?</li>
                <li>How we use your information?</li>
                <li>Who do we share your personal information with?</li>
                <li>Where do we store, retain and protect your information?</li>
                <li>What are my rights?</li>
                <li>How to get in touch with us?</li>
            </ul>

            <Typography className={classes.subHeadings}>
                What information we collect?
            </Typography>
            <p className={classes.text}>
                Co-Axiom may collect personal information about you, either directly from you or from other parties and we may generate information about you when we carry out our business.
            </p>
            <p className={classes.text}>
                The types of personal information we collect about you may include your:
            </p>
            <ul className={classes.list}>
                <li>Name and contact information</li>
                <li>Services requested and preferences</li>
                <li>Interactions with us</li>
                <li>Billing or purchase information</li>
            </ul>
            <p className={classes.text}>
                We also collect general user technical information when you visit our website. This might
                include your internet protocol address, browser type etc. We use this information to
                administer and understand how visitors use our website. The technical information we collect
                in this way is not considered personal information – because it does not include any
                personal identifiable information    
            </p>

            <Typography className={classes.subHeadings}>
                How do we use your information?
            </Typography>
            <p className={classes.text}>
                We collect and use your personal information to provide the information and services that
                you request from us, and to provide you with further information about other services.
            </p>

            <ul className={classes.list}>
                <li>When necessary, we may use your information to:</li>
                <li>Comply with our legal and regulatory obligations</li>
                <li>Defend or enforce our rights - For example, to collect money owed to us.</li>
            </ul>

            <Typography className={classes.subHeadings}>
                Who do we share your information with?
            </Typography>
            <p className={classes.text}>
                Besides our staff, we may share this information with third parties, such as contractors and
                service providers who enable us to provide you with our services.
            </p>
            <p className={classes.text}>
                We will only share your personal information with third parties where it is necessary to help
                us do what we collected your information for, where it is required by law or where you give
                us authority to.
            </p>
            <p className={classes.text}>
                We require these third parties to adhere to our strict confidentiality requirements for handling
                personal information and we seek to ensure that they comply with the Privacy Act 2020.
            </p>


            <Typography className={classes.subHeadings}>
                Where do we store, retain and protect your information?
            </Typography>
            <p className={classes.text}>
                We use third party cloud service providers (Microsoft Outlook and Netlify) to store and
                process the information we collect. The relevant cloud servers are located in New Zealand
                and overseas as per the service providers requirements. We are satisfied that Microsoft and
                Netlify is subject to appropriate security and information handling arrangements and that the
                information stored by them remains subject to confidentiality obligations.
            </p>
            <p className={classes.text}>
                We may also hold a hard copy of your information. Wherever the storage medium, we take
                all reasonable steps to protect personal information that is held by us from loss, misuse,
                unauthorised access, disclosure, alteration, or destruction. We will retain your personal
                information as long as we maintain a business relationship with you and for any regulatory
                period of time afterwards needed to retain it.
            </p>

            <Typography className={classes.subHeadings}>
                What are my rights?
            </Typography>
            <p className={classes.text}>
                You do not have to provide information to us. If you choose not to provide necessary
                personal information when requested, we may be unable to provide certain information or
                services to you.
            </p>
            <p className={classes.text}>
                Individuals may request access to, and correct, personal information that Co-Axiom holds.
            </p>

            <Typography className={classes.subHeadings}>
                How to get in touch with us?
            </Typography>
            <p className={classes.text}>
                If you have any questions about this privacy statement, improvement suggestions,
                complaints, or would like to access, correct and/or change the information collected at any
                time, please contact us at info@co-axiom.com
            </p>
            <p className={classes.text}>
                This statement is subject to and should be read in conjunction with (where applicable) our
                service’s Terms and Conditions and any other terms and conditions you agree to when using
                any of our services <HashLink to="/Terms#top">(Terms and Conditions)</HashLink>
            </p>
        </Paper>
    )
}

export default PrivacyStatement
