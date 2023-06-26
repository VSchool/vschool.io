import React from "react"
import styled from "styled-components"
import { gray, blue } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lightest};
    padding-top: 54px;
    padding-bottom: 54px;
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column-reverse;
    
    @media (min-width: 840px) {
        flex-direction: row;
    }
`

const H1 = styled.h1`
    font-weight: 900;
    font-size: 56px;
    line-height: 56px;
    text-align: center;
    color: ${gray.darkest};

    @media (min-width: 600px) {
        font-size: 40px;
    }

    @media (min-width: 840px) {
        font-size: 48px;
        line-height: 48px;
    }

    @media (min-width: 1200px) {
        font-size: 56px;
        padding-left: 160px;
        padding-right: 160px;
        line-height: 56px;
    }
`

const Paragraph = styled.p`
    margin: 20px 0;
    font-size: 15px;
`

const Paragraph2 = styled.p`
    font-size: 15px;
`

const ListItem = styled.li`
    margin: 20px 0;
    font-size: 15px;
`

const Title = styled.p`
    margin: 20px 0;
    font-size: 20px;
    font-style: bold;
    text-decoration: underline;
`

const Table = styled.div`
    background: ${gray.lighter};
    padding: 40px 52px;
    border: 1px solid ${blue.light};
    width: 100%;

    @media (min-width: 840px) {
        font-size: 48px;
        line-height: 48px;
        width: 35%;
    }
`
const Privacy1 = styled.div`
    padding: 0 10px 0;
    width: 100%;
    
    @media (min-width: 840px) {
        font-size: 48px;
        line-height: 48px;
        width: 55%;
    }
`

const Privacy2 = styled.div`
    padding: 0 10px 0;
`

const P1 = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
`

const P2 = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin: 35px 0;
    color: ${blue.base};
`

export default function Policy() {

    return (
        <Container>
            <FlexContainer>
                <Privacy1 id='#intro'>
                    <Title>Effective January 1, 2020</Title>
                    <Paragraph>V School ( ) values its users' privacy. This Privacy Policy ("Policy") will help you understand how we collect and use personal information from those who visit our website or make use of our online facilities and services, and what we will and will not do with the information we collect. Our Policy has been designed and created to assure those affiliated with V School of our commitment and realization of our obligation not only to meet, but to exceed, most existing privacy standards.</Paragraph>
                    <Paragraph>We reserve the right to make changes to this Policy at any given time. If you have not registered with us and want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page. If you are a registered user, we will notify you via email of any changes or updates made to this Policy. If at any point in time V School decides to make use of any personally identifiable information on file, in a manner vastly different from that which was stated when this information was initially collected, the user or users shall be promptly notified by email. Users at that time shall have the option as to whether to permit the use of their information in this separate manner.</Paragraph>
                    <Paragraph>This Policy applies to V School, and it governs any and all data collection and usage by us. Through the use of Vschol.io, you are therefore consenting to the data collection procedures expressed in this Policy.</Paragraph>
                    <Paragraph>Please note that this Policy does not govern the collection and use of information by companies that V School does not control, nor by individuals not employed or managed by us. If you visit a website that we mention or link to, be sure to review its privacy policy before providing the site with information. It is highly recommended and suggested that you review the privacy policies and conditions of any website you choose to use or frequent to better understand the way in which websites garner, make use of and share the information collected.</Paragraph>
                    <Paragraph>Specifically, this Policy will inform you of the following:</Paragraph>
                    <Paragraph>1. What personally identifiable information is collected from you through our website;<br/>2. Why we collect personally identifiable information and the legal basis for such collection; <br/>3. How we use the collected information and with whom it may be shared; <br/>4. What choices are available to you regarding the use of your data; and <br/>5. The security procedures in place to protect the misuse of your information.</Paragraph>
                </Privacy1>
                <Table>
                    <P1>Table of Contents</P1>
                    <P2><a href="#intro">Introduction</a></P2>
                    <P2><a href="#info">Information We Collect</a></P2>
                    <P2><a href="#why">Why We Collect Information and for How Long</a></P2>
                    <P2><a href="#use">Use of Information Collected</a></P2>
                    <P2><a href="#disclose">Disclosure of Information</a></P2>
                    <P2><a href="#nonmarketing">Non-Marketing Purposes</a></P2>
                    <P2><a href="#children">Children under the age of 13</a></P2>
                    <P2><a href="#unsubscribe">Unsubscribe or Opt-Out</a></P2>
                    <P2><a href="#links">Links to Other Websites</a></P2>
                    <P2><a href="#notice">Notice to European Union Users</a></P2>
                    <P2><a href="#rights">Your Rights as a Data Subject</a></P2>
                    <P2><a href="#security">Security</a></P2>
                    <P2><a href="#terms">Acceptance of Terms</a></P2>
                    <P2><a href="#contact">How to Contact Us</a></P2>
                </Table>
            </FlexContainer>
            <FlexContainer>
                <Privacy2 id='info'>
                    <Title>Information We Collect</Title>
                    <Paragraph>It is always up to you whether to disclose personally identifiable information to us, although if you elect not to do so, we reserve the right not to register you as a user or provide you with any products or services.</Paragraph>
                    <Paragraph>In addition, V School may have the occasion to collect non-personal anonymous demographic information, such as age, gender, household income, political affiliation, race and religion, as well as the type of browser you are using, IP address, or type of operating system, which will assist us in providing and maintaining superior quality service.</Paragraph>
                </Privacy2>
            </FlexContainer>
            <FlexContainer>
                <Privacy2 id="why">
                    <Title>Why We Collect Information and For How Long</Title>
                    <Paragraph>We are collecting your data for several reasons:</Paragraph>
                    <Paragraph>1. To better understand your needs and provide you with the services you have requested;<br/>
                    2. To fulfill our legitimate interest in improving our services and products;<br/>
                    3. To send you promotional emails containing information we think you may like when we have your consent to do so;<br/>
                    4. To contact you to fill out surveys or participate in other types of market research, when we have your consent to do so;<br/>
                    5. To customize our website according to your online behavior and personal preferences.</Paragraph>
                    <Paragraph>The data we collect from you will be stored for no longer than necessary. The length of time we retain said information will be determined based upon the following criteria: the length of time your personal information remains relevant; the length of time it is reasonable to keep records to demonstrate that we have fulfilled our duties and obligations; any limitation periods within which claims might be made; any retention periods prescribed by law or recommended by regulators, professional bodies or associations; the type of contract we have with you, the existence of your consent, and our legitimate interest in keeping such information as stated in this Policy.</Paragraph>
                </Privacy2>
            </FlexContainer>
            <FlexContainer>
                <Privacy2 id="use">
                    <Title>Use of Information Collected</Title>
                    <Paragraph>V School does not now, nor will it in the future, sell, rent or lease any of its customer lists and/or names to any third parties.</Paragraph>
                    <Paragraph>V School may collect and may make use of personal information to assist in the operation of our website and to ensure delivery of the services you need and request. At times, we may find it necessary to use personally identifiable information as a means to keep you informed of other possible products and/or services that may be available to you from Vschool.io</Paragraph>
                    <Paragraph>V School may also be in contact with you with regards to completing surveys and/or research questionnaires related to your opinion of current, potential, or future services that may be offered.</Paragraph>
                    <Paragraph>V School uses various third-party social media features including but not limited to https://www.facebook.com/VSCHOOLHQ/, https://www.instagram.com/vschool_, https://www.linkedin.com/school/v-school/, https://twitter.com/vschool_, https://www.linkedin.com/school/10490797/admin/, https://www.youtube.com/channel/UCSD751HQwIFQOyOd7ZjBogA and other interactive programs. These may collect your IP address and require cookies to work properly. These services are governed by the privacy policies of the providers and are not within V School's control.</Paragraph>
                </Privacy2>
            </FlexContainer>
            <FlexContainer>
                <Privacy2 id="disclose">
                    <Title>Disclosure of Information</Title>
                    <Paragraph>V School may not use or disclose the information provided by you except under the following circumstances:</Paragraph>
                    <ListItem>as necessary to provide services or products you have ordered;</ListItem>
                    <ListItem>in other ways described in this Policy or to which you have otherwise consented;</ListItem>
                    <ListItem>in the aggregate with other information in such a way so that your identity cannot reasonably be determined;</ListItem>
                    <ListItem>as required by law, or in response to a subpoena or search warrant;</ListItem>
                    <ListItem>to outside auditors who have agreed to keep the information confidential;</ListItem>
                    <ListItem>as necessary to enforce the Terms of Service on our website;</ListItem>
                    <ListItem>as necessary to maintain, safeguard and preserve all the rights and property of V School.</ListItem>
                </Privacy2>
            </FlexContainer>
            <FlexContainer>
                <Privacy2 id="nonmarketing">
                    <Title>Non-Marketing Purposes</Title>
                    <Paragraph>V School greatly respects your privacy. We do maintain and reserve the right to contact you if needed for non-marketing purposes (such as bug alerts, security breaches, account issues, and/or changes in V School products and services, or changes to this Policy). In certain circumstances, we may use our website, newspapers, or other public means to post a notice.</Paragraph>
                </Privacy2>
            </FlexContainer>
            <FlexContainer>
                <Privacy2 id="children">
                    <Title>Children under the age of 13</Title>
                    <Paragraph>V School's website is not directed to, and does not knowingly collect personal identifiable information from, children under the age of thirteen (13). If it is determined that such information has been inadvertently collected on anyone under the age of thirteen (13), we shall immediately take the necessary steps to ensure that such information is deleted from our system's database, or in the alternative, that verifiable parental consent is obtained for the use and storage of such information. Anyone under the age of thirteen (13) must seek and obtain parent or guardian permission to use this website.</Paragraph>
                </Privacy2>
            </FlexContainer>
            <FlexContainer>
                <Privacy2 id="unsubscribe">
                    <Title>Unsubscribe or Opt-Out</Title>
                    <Paragraph>All users and visitors to our website have the option to discontinue receiving communications from us by way of email or newsletters. To discontinue or unsubscribe from our website please send an email that you wish to unsubscribe to Team@vschool.io. If you wish to unsubscribe or opt-out from any third-party websites, you must go to that specific website to unsubscribe or opt-out. V School will continue to adhere to this Policy with respect to any personal information previously collected.</Paragraph>
                </Privacy2>
            </FlexContainer>
            <FlexContainer>
                <Privacy2 id="links">
                    <Title>Links to Other Websites</Title>
                    <Paragraph>Our website does contain links to affiliate and other websites. V School does not claim nor accept responsibility for any privacy policies, practices and/or procedures of other websites. Therefore, we encourage all users and visitors to be aware when they leave our website and to read the privacy statements of every website that collects personally identifiable information. This Policy applies only and solely to the information collected by our website.</Paragraph>
                </Privacy2>
            </FlexContainer>
            <FlexContainer>
                <Privacy2 id="notice">
                    <Title>Notice to European Union Users</Title>
                    <Paragraph>V School's operations are located primarily in the United States. If you provide information to us, the information will be transferred out of the European Union (EU) and sent to the United States. (The adequacy decision on the EU-US Privacy became operational on August 1, 2016. This framework protects the fundamental rights of anyone in the EU whose personal data is transferred to the United States for commercial purposes. It allows the free transfer of data to companies that are certified in the US under the Privacy Shield.) By providing personal information to us, you are consenting to its storage and use as described in this Policy.</Paragraph>
                </Privacy2>
            </FlexContainer>
            <FlexContainer>
                <Privacy2 id="rights">
                    <Title>Your Rights as a Data Subject</Title>
                    <Paragraph>Under the regulations of the General Data Protection Regulation ("GDPR") of the EU you have certain rights as a Data Subject. These rights are as follows:</Paragraph>
                    <ListItem><b>The right to be informed:</b> this means we must inform you of how we intend to use your personal data and we do this through the terms of this Policy.</ListItem>
                    <ListItem><b>The right of access:</b> this means you have the right to request access to the data we hold about you and we must respond to those requests within one month. You can do this by sending an email to team@vschool.io.</ListItem>
                    <ListItem><b>The right to rectification:</b> this means that if you believe some of the data we hold is incorrect, you have the right to have it corrected. You can do this by logging into your account with us, or by sending us an email with your request. You can do this by sending an email to team@vschool.io.</ListItem>
                    <ListItem><b>The right to erasure:</b> this means you can request that the information we hold about you be deleted, and we will comply unless we have a compelling reason not to, in which case you will be informed of the reason. You can do this by sending an email to team@vschool.io.</ListItem>
                    <ListItem><b>The right to restrict processing:</b> this means you can change your communication preferences or opt-out of certain communications. You can do this by sending an email to Team@vschool.io.</ListItem>
                    <ListItem><b>The right of data portability:</b> this means you can obtain and use the data we hold for your own purposes without explanation. If you wish to request a copy of your information, contact us at team@vschool.io.</ListItem>
                    <ListItem><b>The right to object:</b> this means you can file a formal objection with us regarding our use of your information with regard to third parties, or its processing where our legal basis is our legitimate interest in it. To do this, please send an email to team@vschool.io.</ListItem>
                    <Paragraph>In addition to the rights above, please rest assured that we will always aim to encrypt and anonymize your personal information whenever possible. We also have protocols in place in the unlikely event that we suffer a data breach and we will contact you if your personal information is ever at risk. For more details regarding our security protections see the section below or visit our website at Vschool.io.</Paragraph>
                </Privacy2>
            </FlexContainer>
            <FlexContainer>
                <Privacy2 id="security">
                    <Title>Security</Title>
                    <Paragraph>V School takes precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline. Wherever we collect sensitive information (e.g. credit card information), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the webpage.</Paragraph>
                    <Paragraph>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers and servers in which we store personally identifiable information are kept in a secure environment. This is all done to prevent any loss, misuse, unauthorized access, disclosure or modification of the user's personal information under our control.</Paragraph>
                    <Paragraph>The Company also uses Secure Socket Layer (SSL) for authentication and private communications to build users' trust and confidence in the internet and website use by providing simple and secure access and communication of credit card and personal information.</Paragraph>
                </Privacy2>
            </FlexContainer>
            <FlexContainer>
                <Privacy2 id="terms">
                    <Title>Acceptance of Terms</Title>
                    <Paragraph>By using this website, you are hereby accepting the terms and conditions stipulated within this Privacy Policy Agreement. If you are not in agreement with our terms and conditions, then you should refrain from further use of our sites. In addition, your continued use of our website following proper notification or the posting of any updates or changes to our terms and conditions, shall mean that you agree and accept such changes.</Paragraph>
                </Privacy2>
            </FlexContainer>
            <FlexContainer>
                <Privacy2 id="contact">
                    <Title>How to Contact Us</Title>
                    <Paragraph2>If you have any questions or concerns regarding this Privacy Policy as it relates to our website, please feel free to contact us at the following email, telephone number or mailing address:</Paragraph2>
                    <Paragraph2><b>Email:</b> team@vschool.io </Paragraph2>
                    <Paragraph2><b>Telephone Number:</b> (385) 355-1370 </Paragraph2>
                    <Paragraph2><b>Mailing Address:</b> </Paragraph2>
                    <Paragraph2>V School </Paragraph2>
                    <Paragraph2>350 E 400 S # 308 </Paragraph2>
                    <Paragraph2>Salt Lake City, Utah 84111</Paragraph2>
                </Privacy2>
            </FlexContainer>
        </Container>
    )
}
