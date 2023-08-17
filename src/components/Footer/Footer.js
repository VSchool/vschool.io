import React from "react"
import styled from "styled-components"
import { black, gray, orange } from "@vschool/lotus"
import { graphql, useStaticQuery } from "gatsby"
import Link from "../shared/QueryLink"
import SubscribeForm from "./SubscribeForm.js"
import FooterSubInformation from "./FooterSubInformation.js"
import { Helmet } from "react-helmet"


const Container = styled.footer`
    background-color: ${black};
    padding: 0 24px;
`

const FooterContainer = styled.div`
    background-color: ${black};
    color: ${gray.base};
    border-bottom: 2px solid ${gray.darker};
    padding-bottom: 110px;
    position: relative;

    @media (min-width: 600px) {
        padding: 32px 0 110px 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 620px;
        margin: 0 auto;
    }

    @media (min-width: 840px) {
        padding: 40px 0 110px 0;
    }

    @media (min-width: 1200px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 1114px;
        margin: 0 auto;
        padding-bottom: 110px;
    }
`

const FooterSection = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
        justify-self: center;
    }
`

const FormContainer = styled.div`
    @media (min-width: 600px) {
        grid-column: 1 / -1;
    }
`

const Header = styled.h3`
    color: ${gray.dark};
    font-family: "aktiv-grotesk-extended";
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.29px;
    line-height: 18px;
    margin-top: 40px;
    margin-bottom: 8px;
`

const CourseContainer = styled.div`
    margin: 8px 0;
`

const CourseTitle = styled.h3`
    height: 18px;
    width: 156px;
    color: ${gray.base};
    font-family: "aktiv-grotesk";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
`

const StartDate = styled.p`
    margin-top: 4px;
    height: 18px;
    width: 144px;
    color: ${orange.base};
    font-family: "aktiv-grotesk";
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
`

const Anchor = styled.a`
    padding-top: 8px;
    width: 156px;
    color: ${gray.base};
    font-family: "aktiv-grotesk";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-decoration: none;

    :active {
        text-decoration: none;
        color: ${gray.base};
    }
    :visited {
        text-decoration: none;
        color: ${gray.base};
    }
`

const SLink = styled(Link)`
    padding-top: 8px;
    width: 156px;
    color: ${gray.base};
    font-family: "aktiv-grotesk";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-decoration: none;

    :active {
        text-decoration: none;
        color: ${gray.base};
    }
    :visited {
        text-decoration: none;
        color: ${gray.base};
    }
`

const CourseLink = styled(Link)`
    text-decoration: none;
`

const GiBill = styled.p`
    padding-top: 8px;
    max-width: 456px;
    color: ${gray.dark};
    font-family: "aktiv-grotesk";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-decoration: none;
    position: absolute;
    bottom: 15px;
    left: 0px;

    @media (min-width: 600px) {
        left: 80px;
    }

    @media (min-width: 1200px) {
        left: 0px;
    }
`

const GiLink = styled(Link)`
    padding-top: 8px;
    width: 156px;
    font-family: "aktiv-grotesk";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-decoration: none;

    :active {
        text-decoration: none;
        color: ${gray.base};
    }
    :visited {
        text-decoration: none;
    }
`

const Footer = () => {
    const {
        prismicFooter: {
            data: {
                footer_form_header: { text: formHeader },
                footer_input_placeholder: { text: placeholder },
                footer_programs_header: { text: programsHeader },
                footer_gi_bill: { text: giBill },
                footer_gi_link: { text: giLink },
                body: footerSections,
            },
        },
        allPrismicStartDate: { edges: startDates },
    } = useStaticQuery(graphql`
        {
            allPrismicStartDate {
                edges {
                    node {
                        data {
                            start_date(formatString: "MMM Do, YYYY")
                        }
                    }
                }
            }
            prismicFooter {
                data {
                    footer_form_header {
                        text
                    }
                    footer_input_placeholder {
                        text
                    }
                    footer_programs_header {
                        text
                    }
                    footer_gi_bill {
                        text
                    }
                    footer_gi_link {
                        text
                    }
                    body {
                        ... on PrismicFooterDataBodyFooterSection {
                            id
                            primary {
                                footer_header {
                                    text
                                }
                            }
                            items {
                                footer_link {
                                    url
                                }
                                footer_link_text {
                                    text
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    const startDate = startDates[0].node.data.start_date
    return (
        <Container>
            <FooterContainer>
                <FormContainer>
                    <SubscribeForm
                        formHeader={formHeader}
                        placeholder={placeholder}
                    />
                </FormContainer>
                <FooterSection>
                    <Header>{programsHeader}</Header>
                    <CourseLink
                        to={"/courses/design"}
                        key={"/experience-design"}
                    >
                        <CourseContainer>
                            <CourseTitle>UX / UI Design</CourseTitle>
                            <StartDate>Starts {startDate}</StartDate>
                        </CourseContainer>
                    </CourseLink>
                    <CourseLink
                        to={"/courses/development"}
                        key={"/development"}
                    >
                        <CourseContainer>
                            <CourseTitle>Web Development</CourseTitle>
                            <StartDate>Starts {startDate}</StartDate>
                        </CourseContainer>
                    </CourseLink>
                </FooterSection>
                {footerSections.map(({ id, primary, items }, i) => (
                    <FooterSection key={id}>
                        <Header>{primary.footer_header.text}</Header>
                        {items.map(item =>
                            item.footer_link.url[0] === "h" ? (
                                <Anchor
                                    key={item.footer_link_text.text}
                                    href={item.footer_link.url}
                                >
                                    {item.footer_link_text.text}
                                </Anchor>
                            ) : (
                                <SLink
                                    to={item.footer_link.url}
                                    key={item.footer_link_text.text}
                                >
                                    {item.footer_link_text.text}
                                </SLink>
                            )
                        )}
                    </FooterSection>
                ))}
            <GiBill>{giBill}<GiLink to={giLink}> {giLink}</GiLink></GiBill>
            </FooterContainer>
            <FooterSubInformation /> 
            <Helmet>
                <script type="text/javascript">
                    {`!function (w, d, t) {
                    w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++
            )ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=i+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
                    ttq.load('CJ3GJO3C77U2K51E8KE0');
                    ttq.page();
                    }(window, document, 'ttq');`}
                </script>
                <script type="text/javascript">
                    {`(function(){let x=null,p,q,m,
                    o="35282",
                    l="ORDER ID",
                    i="TOTAL ORDER AMOUNT",
                    c="",
                    k="",
                    g="",
                    j="",
                    u="",
                    shadditional="";
                    try{p=top.document.referer!==""?encodeURIComponent(top.document.referrer.substring(0,512)):""}catch(n){p=document.referrer!==null?document.referrer.toString().substring(0,512):""}try{q=window&&window.top&&document.location&&window.top.location===document.location?document.location:window&&window.top&&window.top.location&&""!==window.top.location?window.top.location:document.location}catch(b){q=document.location}try{m=parent.location.href!==""?encodeURIComponent(parent.location.href.toString().substring(0,512)):""}catch(z){try{m=q!==null?encodeURIComponent(q.toString().substring(0,512)):""}catch(h){m=""}}var A,y=document.createElement("script"),w=null,v=document.getElementsByTagName("script"),t=Number(v.length)-1,r=document.getElementsByTagName("script")[t];if(typeof A==="undefined"){A=Math.floor(Math.random()*100000000000000000)}w="dx.mountain.com/spx?conv=1&shaid="+o+"&tdr="+p+"&plh="+m+"&cb="+A+"&shoid="+l+"&shoamt="+i+"&shocur="+c+"&shopid="+k+"&shoq="+g+"&shoup="+j+"&shpil="+u+shadditional;y.type="text/javascript";y.src=("https:"===document.location.protocol?"https://":"http://")+w;r.parentNode.insertBefore(y,r)}());`}
                </script>
                <script type="text/javascript">
                    {`(function(){"use strict";var e=null,b="4.0.0",
                    n="35282",
                    additional="term=value",
                    t,r,i;try{t=top.document.referer!==""?encodeURIComponent(top.document.referrer.substring(0,2048)):""}catch(o){t=document.referrer!==null?document.referrer.toString().substring(0,2048):""}try{r=window&&window.top&&document.location&&window.top.location===document.location?document.location:window&&window.top&&window.top.location&&""!==window.top.location?window.top.location:document.location}catch(u){r=document.location}try{i=parent.location.href!==""?encodeURIComponent(parent.location.href.toString().substring(0,2048)):""}catch(a){try{i=r!==null?encodeURIComponent(r.toString().substring(0,2048)):""}catch(f){i=""}}var l,c=document.createElement("script"),h=null,p=document.getElementsByTagName("script"),d=Number(p.length)-1,v=document.getElementsByTagName("script")[d];if(typeof l==="undefined"){l=Math.floor(Math.random()*1e17)}h="dx.mountain.com/spx?"+"dxver="+b+"&shaid="+n+"&tdr="+t+"&plh="+i+"&cb="+l+additional;c.type="text/javascript";c.src=("https:"===document.location.protocol?"https://":"http://")+h;v.parentNode.insertBefore(c,v)})()`}
                </script>
            </Helmet>
        </Container>
    )
}

export default Footer
