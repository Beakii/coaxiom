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
        listStyle: 'none',
        fontWeight: '300',
        fontSize: '1rem',
        padding: '0 3rem',
    }
}));


function Terms() {    
    const classes = useStyles();

    return (
        <Paper square elevation={5} className={classes.root} id="top">
            <Typography className={classes.title}>
                Co-Axiom Associates Ltd Website Terms and Conditions of Use Statement
            </Typography>

            <Typography className={classes.subHeadings}>
                OVERVIEW
            </Typography>
            <p className={classes.text}>
                This website is operated by Co-Axiom Associates Ltd. Throughout the site, the terms “we”, “us” and “our” refer to Co-Axiom Associates Ltd. Co-Axiom Associates Ltd offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
            </p>

            <p className={classes.text}>
                Please read these Terms carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms are considered an offer, acceptance is expressly limited to these Terms.
            </p>

            <p className={classes.text}>
                We reserve the right to update, change or replace any part of these Terms by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.            
            </p>

            <Typography className={classes.subHeadings}>
                SECTION 1 - GENERAL CONDITIONS
            </Typography>
            <p className={classes.text}>
                You understand that your content may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. 
            </p>
            <p className={classes.text}>
                You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.            
            </p>
            <p className={classes.text}>
                The information on this website is just that, general information, and is not legal or financial advice.  If you have any legal concerns or issues, you should not rely on the information as advice, and instead seek specific legal advice. We reserve the right to refuse service to anyone for any reason at any time.
            </p>
            <p className={classes.text}>
                The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.
            </p>

            <Typography className={classes.subHeadings}>
                SECTION 2 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION
            </Typography>
            <p className={classes.text}>
                We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.
            </p>
            <p className={classes.text}>
                This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.
            </p>
            <p className={classes.text}>
                Continuous access: We do our best to keep this website running smoothly. However, we do not guarantee that access to the website will be uninterrupted. We accept no liability for any loss caused by the website being temporarily unavailable either during its planned maintenance or due to technical or other issues beyond our control.
            </p>

            <Typography className={classes.subHeadings}>
                SECTION 3 - OPTIONAL TOOLS
            </Typography>
            <p className={classes.text}>
                We may provide you with access or recommendation to third-party tools over which we neither monitor nor have any control nor input.
            </p>
            <p className={classes.text}>
                You acknowledge and agree that we provide access or recommendation to such tools” as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.
            </p>
            <p className={classes.text}>
                Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).
            </p>
            <p className={classes.text}>
                We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of use.
            </p>
            <p className={classes.text}>
                Although our service providers regularly update their cybersecurity and virus protection software, we do not guarantee that our website will be free from viruses or other malicious interference (such as spyware, malware, adware, ransomware and worms) that can damage your computer system and access your data. You acknowledge that it is your responsibility to implement sufficient procedures and virus checks (including anti-virus and other security checks) to satisfy your particular requirements for the correct display and/or presentation of any material contained on this website
            </p>

            <Typography className={classes.subHeadings}>
                SECTION 4 - THIRD-PARTY LINKS
            </Typography>
            <p className={classes.text}>
                Certain content, products and services available via our Service may include materials from third-parties.
            </p>
            <p className={classes.text}>
                Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.
            </p>
            <p className={classes.text}>
                We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.
            </p>
            <p className={classes.text}>
                Third-party websites: This website may contain links to other websites which are not under our control. Co-Axiom Associates has no knowledge of or control over the content, and availability of those websites, or of their privacy practices. We do not sponsor, recommend, or endorse the content of other websites linked to, or referenced from, this website.
            </p>

            <Typography className={classes.subHeadings}>
                SECTION 5 - PERSONAL INFORMATION
            </Typography>
            <p className={classes.text}>
                Your submission of personal information through the website is governed by our Privacy Statement. To view our Privacy Statement please click <HashLink to="/Privacy#top">here</HashLink>
            </p>

            <Typography className={classes.subHeadings}>
                SECTION 6 - ERRORS, INACCURACIES AND OMISSIONS
            </Typography>
            <p className={classes.text}>
                Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product / services descriptions. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice.
            </p>
            <p className={classes.text}>
                We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.
            </p>
            <p className={classes.text}>
                Unless otherwise indicated, all information on this website is the property of Co-Axiom Associates Ltd and is protected by copyright and intellectual property laws. Unless stated otherwise, you may access and download the materials located on this website only for personal, or agreed upon commercial use. Before using any material on this website that is identified as being subject to copyright of a third party, you must obtain authorisation to use or reproduce the material from that third party.
            </p>

            <Typography className={classes.subHeadings}>
                SECTION 7 - PROHIBITED USES
            </Typography>
            <p className={classes.text}>
                In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: 
            </p>

            <ul className={classes.list}>
                <li>(a) for any unlawful purpose; </li>
                <li>(b) to solicit others to perform or participate in any unlawful acts; </li>
                <li>(c) to violate any international, or New Zealand regulations, rules, laws, or local ordinances; </li>
                <li>(d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; </li>
                <li>(e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; </li>
                <li>(f) to submit false or misleading information; </li>
                <li>(g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet;  </li>
                <li>(h) to collect or track the personal information of others; </li>
                <li>(i) to spam, phish, pharm, pretext, spider, crawl, or scrape;  </li>
                <li>(j) for any obscene or immoral purpose; or </li>
                <li>(k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. </li>
            </ul>

            <p className={classes.text}>
                We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.
            </p>

            <Typography className={classes.subHeadings}>
                SECTION 8 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
            </Typography>
            <p className={classes.text}>
                We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.
            </p>
            <p className={classes.text}>
                We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.
            </p>
            <p className={classes.text}>
                You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.
                You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.
            </p>
            <p className={classes.text}>
                In no case shall Co-Axiom Associates Ltd, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such jurisdictions, our liability shall be limited to the maximum extent permitted by law.
            </p>
            <p className={classes.text}>
                This does not prejudice your statutory rights.
            </p>

            <Typography className={classes.subHeadings}>
                SECTION 9 - INDEMNIFICATION
            </Typography>
            <p className={classes.text}>
                You agree to indemnify, defend and hold harmless Co-Axiom Associates Ltd and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.
            </p>

            <Typography className={classes.subHeadings}>
                SECTION 10 - SEVERABILITY
            </Typography>
            <p className={classes.text}>
                In the event that any provision of these Terms is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms, such determination shall not affect the validity and enforceability of any other remaining provisions.
            </p>

            <Typography className={classes.subHeadings}>
                SECTION 11 - TERMINATION
            </Typography>
            <p className={classes.text}>
                The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.
            </p>
            <p className={classes.text}>
                These Terms are effective unless and until terminated by either you or us. You may terminate these Terms at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.
            </p>
            <p className={classes.text}>
                If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).
            </p>

            <Typography className={classes.subHeadings}>
                SECTION 12 - ENTIRE AGREEMENT
            </Typography>
            <p className={classes.text}>
                The failure of us to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
            </p>
            <p className={classes.text}>
                These Terms and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms).
            </p>
            <p className={classes.text}>
                Any ambiguities in the interpretation of these Terms shall not be construed against the drafting party.
            </p>

            <Typography className={classes.subHeadings}>
                SECTION 13 - GOVERNING LAW
            </Typography>
            <p className={classes.text}>
                The information on this website has been prepared to comply with, and is governed by, New Zealand law. It is only intended for use by persons within New Zealand’s jurisdiction Co-Axiom Associates does not make any representation that the information on this website complies with the law in any other country
            </p>

            <Typography className={classes.subHeadings}>
                SECTION 14 - CHANGES TO TERMS
            </Typography>
            <p className={classes.text}>
                You can review the most current version of the Terms at any time at this page. (Updated April 2021)
            </p>
            <p className={classes.text}>
                We reserve the right, at our sole discretion, to update, change or replace any part of these Terms by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms constitutes acceptance of those changes.
            </p>

            <Typography className={classes.subHeadings}>
                SECTION 15 - CONTACT INFORMATION
            </Typography>
            <p className={classes.text}>
                Questions about the Terms and Conditions should be sent to us at <a href="mailto:info@co-axiom.com">info@co-axiom.com</a>.
            </p>
        </Paper>
    )
}

export default Terms
