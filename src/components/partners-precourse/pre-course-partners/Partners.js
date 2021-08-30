import React, {useState} from "react"
import styled from "styled-components"
import {
    purple,
    gray,
} from "@vschool/lotus"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.section`
    background-color: ${purple.lightest};
    padding: 0;

    @media (min-width: 1000px) {
        padding: 0px 80px;
        padding-right: 0;
    }
`

const FlexContainer = styled.div`

    @media (min-width: 1000px){
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 1400px;

        & > div {
            width: 50%;
            padding: 40px 40px 40px 0px;
        }
    }
`

const TitleDiv = styled.div`
    padding: 0 30px;
`

const CarouselContainer = styled.div`
    background-color: ${purple.light};
    padding: 0 16px;
    margin-top: 40px;

    overflow: scroll;
    white-space: nowrap;

    @media (min-width: 1000px){
        margin-top: 0px;
        padding: 0 80px;
    }
`

const Carousel = styled.div`
    display: inline-block;
    display: ${props => props.ind === props.page ? 'inline-block' : 'none'};
    /* transform: translateX(-${props => props.page}00%); */
    background-color: ${gray.lighter};
    padding: 40px;
    position: relative;
`

const Title = styled.h1`
    font-size: 32px;
    line-height: 40px;
    font-weight: 900;
    color: ${gray.darkest};
    padding: 48px 0 16px;
    /* text-align: center; */

    @media (min-width: 800px) {
        font-size: 44px;
        line-height: 48px;
        padding: 48px 0 24px;
    }
`

const Paragraph = styled.p`
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    /* text-align: center; */

    @media (min-width: 800px) {
        font-size: 20px;
        line-height: 32px;
    }
`

const Quotes = styled.img`
    position: absolute;
    right: 60px;
`

const PartnerCard = styled.div`
    display: flex;
    padding: 30px 0;
`

const PartnerPic = styled.img`
    margin-right: 20px;
`

const PartnerParagraph = styled.p`
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    padding-bottom: 20px;

    white-space: initial;

    @media (min-width: 800px){
        font-size: 24px;
        line-height: 32px;  
    }
`

const ArrowContainer = styled.div`
    margin: 40px 0 0;
    text-align: right;
`

const Arrow = styled.img`
    transform: rotate(${props => props.degree}deg);
`

const ArrowBtn = styled.button`
    border: none;
    background-color: inherit;
`



const Partners = () => {
  const [page, setPage] = useState(0)

  const data = useStaticQuery(graphql`
    {
      prismicPrecoursePartners {
        data {
          partner_arrow {
            alt
            url
          }
          partner_description {
            text
          }
          partner_info {
            info_partner_description {
              text
            }
            info_partner_image {
              alt
              url
            }
            info_partner_logo {
              alt
              url
            }
            info_partner_name {
              text
            }
            info_partner_title {
              text
            }
          }
          partner_quotes_image {
            alt
            url
          }
          partner_title {
            text
          }
        }
      }
    }
  `)

  const {
    partner_arrow: { alt: arrowAlt, url: arrowUrl },
    partner_description: { text: partnerDesc },
    partner_info,
    partner_quotes_image: { alt: quotesAlt, url: quotesUrl },
    partner_title: { text: partnerTitle },
  } = data.prismicPrecoursePartners.data

  // const infoStation = [
  //     {
  //       infoDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga iste temporibus cumque magnam laboriosam rerum repudiandae. Nobis eaque incidunt placeat nam quidem qui. Dolore quod repellendus minus iusto error. Adipisci Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugiat veritatis at magnam tenetur eum facilis qui omnis, laboriosam fugit suscipit voluptatibus iure aspernatur est ipsam amet exercitationem non? Dicta',
  //       infoAlt: 'infoAlt',
  //       infoUrl: 'https://images.prismic.io/vschool/bb2f4cdf-0c49-4db9-929b-670722d26768_Ellipse+20.png?auto=format%2Ccompress&fit=max&q=50',
  //       logoAlt: 'logoAlt',
  //       logoUrl: 'https://images.prismic.io/vschool/cf6a6346-4436-40ae-9e16-e1c22ba431bb_TECH-MOMS+LOGO+1.png?auto=format%2Ccompress&fit=max&q=50',
  //       infoName: "Joe NONO",
  //       infoTitle: "CEO"
  //     },
  //     {
  //       infoDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga iste temporibus cumque magnam laboriosam rerum repudiandae. Nobis eaque incidunt placeat nam quidem qui. Dolore quod repellendus minus iusto error. Adipisci Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugiat veritatis at magnam tenetur eum facilis qui omnis, laboriosam fugit suscipit voluptatibus iure aspernatur est ipsam amet exercitationem non? Dicta',
  //       infoAlt: 'infoAlt',
  //       infoUrl: 'https://images.prismic.io/vschool/bb2f4cdf-0c49-4db9-929b-670722d26768_Ellipse+20.png?auto=format%2Ccompress&fit=max&q=50',
  //       logoAlt: 'logoAlt',
  //       logoUrl: 'https://images.prismic.io/vschool/cf6a6346-4436-40ae-9e16-e1c22ba431bb_TECH-MOMS+LOGO+1.png?auto=format%2Ccompress&fit=max&q=50',
  //       infoName: "Joe Schmo",
  //       infoTitle: "CEO"
  //     }
  // ]

  // .map(({
  //   info_partner_description: { text: infoDesc },
  //   info_partner_image: { alt: infoAlt, url: infoUrl },
  //   info_partner_logo: { alt: logoAlt, url: logoUrl },
  //   info_partner_name: { text: infoName },
  //   info_partner_title: { text: infoTitle }
  // })

  // const mappedInfo = partner_info.map(({
  //       info_partner_description: { text: infoDesc },
  //       info_partner_image: { alt: infoAlt, url: infoUrl },
  //       info_partner_logo: { alt: logoAlt, url: logoUrl },
  //       info_partner_name: { text: infoName },
  //       info_partner_title: { text: infoTitle }
  //     }

  // console.log(page)
  // const mappedInfo = infoStation.map(({
  //   infoDesc,
  //   infoAlt,
  //   infoUrl,
  //   logoAlt,
  //   logoUrl,
  //   infoName,
  //   infoTitle
  // },
  
  const mappedInfo = partner_info.map(({
    info_partner_description: { text: infoDesc },
    info_partner_image: { alt: infoAlt, url: infoUrl },
    info_partner_logo: { alt: logoAlt, url: logoUrl },
    info_partner_name: { text: infoName },
    info_partner_title: { text: infoTitle }
  },i) => {
        // console.log(i, page)
        return <Carousel ind={i} page={page}>
            <Quotes src={quotesUrl} alt={quotesAlt} />
            <PartnerCard>
                <PartnerPic src={infoUrl} alt={infoAlt} />
                <div>
                    <h4>{infoName}</h4>
                    <p>{infoTitle}</p>
                </div>
            </PartnerCard>
            <PartnerParagraph>{infoDesc}</PartnerParagraph>
            <img src={logoUrl} alt={logoAlt} />
            <ArrowContainer>
                <ArrowBtn>
                    <Arrow src={arrowUrl} alt={arrowAlt} degree={-90} onClick={() => setPage(prev => partner_info[i - 1] ? prev - 1: prev )} />
                </ArrowBtn>
                <ArrowBtn>
                    <Arrow src={arrowUrl} alt={arrowAlt} degree={90} onClick={() => setPage(prev => partner_info[i + 1] ? prev + 1 : prev)} />
                </ArrowBtn>
            </ArrowContainer>
        </Carousel>
  })

  return (
    <Container>
        <FlexContainer>
            <TitleDiv>
                <Title>{partnerTitle}</Title>
                <Paragraph>{partnerDesc}</Paragraph>
            </TitleDiv>
            <CarouselContainer>
                {mappedInfo}
            </CarouselContainer>
        </FlexContainer>
    </Container>
    )
}

export default Partners
