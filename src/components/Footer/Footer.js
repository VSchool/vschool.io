import React from "react"
import styled from "styled-components"
import { black, gray } from "@vschool/lotus"
import { graphql, useStaticQuery, Link } from "gatsby"
import SubscribeForm from './SubscribeForm.js'
import moment from "moment"

const FooterContainer = styled.footer`
    background-color: ${black};
    border-left: 1px solid #979797;
    border-right: 1px solid #979797;
    border-bottom: 1px solid #979797;
    color: ${gray.base};
    height: 1085px;
    padding: 0 24px 24px 24px;
`

const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -8px;
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Header = styled.h3`
    height: 16px;	
    width: 232px;	
    color: #A09C96;	
    font-family: "aktiv-grotesk-extended";	
    font-size: 14px;	
    font-weight: bold;	
    letter-spacing: 0.29px;	
    line-height: 18px;
    margin-top: 40px;
    margin-bottom: 16px;
`

const CourseContainer = styled.div`


`

const CourseTitle = styled.h3`
    height: 18px;	
    width: 144px;	
    color: #D8D4CF;	
    font-family: "aktiv-grotesk";	
    font-size: 14px;	
    font-weight: 400;	
    line-height: 18px;
`

const StartDate = styled.p`
    margin-bottom: 16px;
    margin-top: 4px;
    height: 18px;	
    width: 144px;	
    color: #FF8F26;	
    font-family: "aktiv-grotesk";	
    font-size: 12px;	
    font-weight: 500;	
    line-height: 16px;
`

const Anchor = styled.a`
    padding-bottom: 8px;	
    width: 144px;	
    color: #D8D4CF;	
    font-family: "aktiv-grotesk";	
    font-size: 14px;	
    font-weight: 400;	
    line-height: 18px;
    text-decoration: none;

    :active {
        text-decoration: none;
        color: #D8D4CF;
    }
    :visited {
        text-decoration: none;
        color: #D8D4CF;
    }
`

const SLink = styled(Link)`
    padding-bottom: 8px;	
    width: 144px;	
    color: #D8D4CF;	
    font-family: "aktiv-grotesk";	
    font-size: 14px;	
    font-weight: 400;	
    line-height: 18px;
    text-decoration: none;

    :active {
        text-decoration: none;
        color: #D8D4CF;
    }
    :visited {
        text-decoration: none;
        color: #D8D4CF;
    }
`

const FooterSubLinks = styled.div`
    display: flex;
    align-items: center;
    border-top: 2px solid #514F4B;
    padding-top: 16px;
    margin-top: 8px;
`

const FooterSubLink = styled.a`
    height: 32px;	
    width: 260px;	
    color: #A09C96;	
    font-family: "aktiv-grotesk";	
    font-size: 12px;	
    font-weight: 500;	
    line-height: 16px;
    margin: 0 8px;
    text-decoration: none;

    :active {
        text-decoration: none;
        color: #A09C96;	
    }

    :visited {
        text-decoration: none;
        color: #A09C96;	
    }
`

const FooterSubInfo = styled.span`
    height: 32px;	
    width: 260px;	
    color: #A09C96;	
    font-family: "aktiv-grotesk";	
    font-size: 12px;	
    font-weight: 500;	
    line-height: 16px;
    margin: 0 8px;
`

const Logo = styled.img`
    width: 32px;
    justify-self: flex-start;
`


const Footer = () => {
    const {
        prismicFooter: {
            data: {
                footer_form_header: { text: formHeader },
                footer_input_placeholder: { text: placeholder },
                footer_button_text: { text: btnText },
                footer_programs_header: { text: programsHeader },
                body: footerSections,
                footer_sub_links: footerSubLinks,
                vs_logo: { url: logo }
            }
        },  
        allPrismicStartDate: {
            edges: startDates
        }
    } = useStaticQuery(graphql`
    {
      allPrismicStartDate {
        edges {
          node {
            data {
              course_name {
                text
              }
              start_date
            }
          }
        }
      }
      prismicFooter {
        data {
          footer_button_text {
            text
          }
          footer_form_header {
            text
          }
          footer_input_placeholder {
            text
          }
          footer_programs_header {
            text
          }
          footer_sub_links {
            footer_sub_link {
              url
            }
            footer_sub_link_text {
              text
            }
          }
          vs_logo {
            url
          }
          body {
            items {
              footer_link {
                url
              }
              footer_link_text {
                text
              }
            }
            primary {
              footer_header {
                text
              }
            }
          }
        }
      }
    }
  `)
    console.log(footerSubLinks)
    console.log(logo)
    return (
        <FooterContainer>
            <FooterSection>
                <FormContainer>
                    <SubscribeForm 
                        formHeader={ formHeader }
                        placeholder={ placeholder }
                        btnText={ btnText }
                    />
                </FormContainer>
            </FooterSection>
            <FooterSection>
                <Header>{ programsHeader }</Header>
                {
                    startDates.map(({node: {data}}) => (
                        <CourseContainer>
                            <CourseTitle>{ data.course_name.text }</CourseTitle>
                            <StartDate>Starts { moment(data.start_date).format("MMM Do, YYYY") }</StartDate>
                        </CourseContainer>
                    ))
                }
            </FooterSection>
            { footerSections.map(({primary, items}) => (
                    <FooterSection>
                        <Header>{ primary.footer_header.text }</Header>
                        { items.map(item => item.footer_link.url[0] === "h" ?
                                <Anchor 
                                    href={ item.footer_link.url }>
                                    { item.footer_link_text.text }
                                </Anchor>
                            :
                                <SLink to={ item.footer_link.url }>
                                    { item.footer_link_text.text }
                                </SLink>
                            )
                        }
                    </FooterSection>
                ))
            }
            <FooterSubLinks>
                <Logo src={ logo }/>
                { footerSubLinks.map(sub => sub.footer_sub_link 
                    ? <FooterSubLink href={ sub.footer_sub_link.url }>
                        { sub.footer_sub_link_text.text }
                      </FooterSubLink> 
                    : <FooterSubInfo>
                        { sub.footer_sub_link_text.text }
                      </FooterSubInfo>) 
                }
            </FooterSubLinks>
        </FooterContainer>
    )
}

export default Footer
