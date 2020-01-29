import React from "react"
import styled from "styled-components"
import { black, gray, orange } from "@vschool/lotus"
import { graphql, useStaticQuery, Link } from "gatsby"
import SubscribeForm from './SubscribeForm.js'
import FooterSubInformation from './FooterSubInformation.js'

const Container = styled.div`
    background-color: ${black};
`

const FooterContainer = styled.footer`
    background-color: ${black};
    color: ${gray.base};
    padding: 0 24px;

    @media (min-width: 600px){
      padding: 32px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 620px;
      margin: 0 auto;
    }

    @media (min-width: 840px){
      padding: 40px;
    }

    @media(min-width: 1200px){
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 1114px;
      margin: 0 auto;
    }
`

const FooterSection = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: 600px){
      justify-self: center;
    }
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 600px){
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
    width: 144px;	
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
    width: 144px;	
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
    width: 144px;	
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
              start_date(formatString: "MMM Do, YYYY")
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
    return (
      <Container>
        <FooterContainer>
            <FormContainer>
                <SubscribeForm 
                    formHeader={ formHeader }
                    placeholder={ placeholder }
                    btnText={ btnText }
                />
            </FormContainer>
            <FooterSection>
                <Header>{ programsHeader }</Header>
                {
                    startDates.map(({node: {data}}) => (
                        <CourseContainer>
                            <CourseTitle>{ data.course_name.text }</CourseTitle>
                            <StartDate>Starts { data.start_date }</StartDate>
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
            
        </FooterContainer>
        <FooterSubInformation
              logo={ logo }
              footerSubLinks={ footerSubLinks }
            />
        </Container>
    )
}

export default Footer