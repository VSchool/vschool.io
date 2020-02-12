import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { gray, black } from "@vschool/lotus"

const FooterSubLinks = styled.div`
    display: flex;
    align-items: center;
    border-top: 2px solid ${gray.darker};
    padding: 24px 0;
    margin: 0 24px;
    background-color: ${black};
    margin-top: 40px;

    @media (min-width: 600px){
      margin: 0 32px;
    }

    @media (min-width: 840px){
      margin: 0 40px;
    }

    @media(min-width: 1200px){
      
        width: 1114px;
        margin: 0 auto;
    }
`

const SubContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

const FooterSubLink = styled.a`
    display: inline-block;
    color: ${gray.dark};
    font-family: "aktiv-grotesk";
    font-size: 12px;
    font-weight: 400;
    margin: 0 4px;
    text-decoration: none;
    
    
    :active {
        text-decoration: none;
        color: ${gray.dark};
    }

    :visited {
        text-decoration: none;
        color: ${gray.dark};
    }
`

const FooterSubInfo = styled.p`
    display: inline-block;
    color: ${gray.dark};
    font-family: "aktiv-grotesk";
    font-size: 12px;
    font-weight: 400;
    margin: 0 4px;
    
`

const Logo = styled.img`
    width: 32px;
    display: inline-block;
    margin-right: 8px;
`

export default function FooterSubInformation(props) {
    const { logo, footerSubLinks } = props
    return (
        <FooterSubLinks>
            <Link to="/">
                <Logo src={logo} />
            </Link>
            <div>
              <SubContainer>
                  <FooterSubInfo>
                      {footerSubLinks[0].footer_sub_link_text.text}
                  </FooterSubInfo>
                  <FooterSubInfo>
                      {footerSubLinks[1].footer_sub_link_text.text}
                  </FooterSubInfo>
              
                  <FooterSubLink href={footerSubLinks[2].footer_sub_link.url}>
                      {footerSubLinks[2].footer_sub_link_text.text}
                  </FooterSubLink>
                  <FooterSubLink href={footerSubLinks[3].footer_sub_link.url}>
                      {footerSubLinks[3].footer_sub_link_text.text}
                  </FooterSubLink>
                  <FooterSubLink href={footerSubLinks[4].footer_sub_link.url}>
                      {footerSubLinks[4].footer_sub_link_text.text}
                  </FooterSubLink>
              </SubContainer>
            </div>
        </FooterSubLinks>
    )
}
