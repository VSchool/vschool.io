import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import {
  Header,
  HeroImage,
  PressAndContact
} from "../components/about-us"


export default function AboutUs({data}){
  const {
    about_us_page_title: {text: title},
    about_us_page_header: {text: header},
    about_us_page_sub: {text: sub},
    about_us_hero_image: {url: imgUrl},
    business_name: {text: businessName },
    city_and_state: {text: cityAndState},
    contact_us: {text: contactUsHeader},
    email: {text: email},
    phone: {text: phone},
    press: {text: pressHeader},
    street_address: {text: streetAddress}
  } = data.prismicAbout.data
  return (
    <Layout>
      <SEO title={header}/>
      <Header title={title} header={header} sub={sub}/>
      <HeroImage heroImg={imgUrl}/>
      <PressAndContact 
        pressHeader={pressHeader}
        contactUsHeader={contactUsHeader}
        businessName={businessName}
        streetAddress={streetAddress}
        cityAndState={cityAndState}
        email={email}
        phone={phone}
      />
    </Layout>
  )
}

export const query = graphql`
  {
    prismicAbout {
      data {
        about_us_hero_image {
          url
        }
        about_us_page_sub {
          text
        }
        about_us_page_header {
          text
        }
        about_us_page_title {
          text
        }
        business_name {
          text
        }
        city_and_state {
          text
        }
        contact_us {
          text
        }
        email {
          text
        }
        phone {
          text
        }
        press {
          text
        }
        street_address {
          text
        }
      }
    }
  }
`