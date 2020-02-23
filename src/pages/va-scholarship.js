import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"
import {
    Header,
    Companies,
    Ratings,
    Testimonial,
    ScholarshipDetails,
    Details
} from "../components/va-scholarship"

export default function VaScholarship({ data }) {
    const {
        testimonial_img: { url: testimonialImg },
        testimonial: { text: testimonial },
        page_title: { text: title },
        page_sub: { text: subHeader },
        page_info: { text: pageInfo },
        page_header: { text: header },
        invite_btn_link: { url: headerBtnLink },
        invite_btn: { text: headerBtnText },
        details_info: { text: detailsInfo },
        details_header: { text: detailsHeader },
        deadlines_background_img: { url: detailsBgImg },
        hero_img: { url: heroImg },
        details,
        deadlines,
        cite: { text: cite },
    } = data.prismicVaScholarship.data
    const {
        where_we_work_header: { text: whereWeWorkHeader },
        ratings_header: { text: ratingsHeader },
        ratings,
        company_logos,
    } = data.prismicHomePage.data
    return (
        <Layout>
            <SEO title={header} />
            <Header
                title={title}
                header={header}
                sub={subHeader}
                info={pageInfo}
                heroImg={heroImg}
                link={headerBtnLink}
                btnText={headerBtnText}
            />
            <ScholarshipDetails 
              header={detailsHeader}
              deadlines={deadlines}
              detailsInfo={detailsInfo}
              detailsBgImg={detailsBgImg}
            />
            <Details details={details}/>
            <Companies header={whereWeWorkHeader} logos={company_logos} />
            <Ratings header={ratingsHeader} ratings={ratings} />
            <Testimonial
                testimonial={testimonial}
                cite={cite}
                testimonialImg={testimonialImg}
            />
        </Layout>
    )
}

export const query = graphql`
    {
        prismicVaScholarship {
            data {
                testimonial_img {
                    url
                }
                deadlines_background_img {
                    url
                }
                hero_img {
                    url
                }
                testimonial {
                    text
                }
                page_title {
                    text
                }
                page_sub {
                    text
                }
                page_info {
                    text
                }
                page_header {
                    text
                }
                invite_btn_link {
                    url
                }
                invite_btn {
                    text
                }
                details_info {
                    text
                }
                details_header {
                    text
                }
                details {
                    info {
                        text
                    }
                    header {
                        text
                    }
                }
                deadlines {
                    title {
                        text
                    }
                    date {
                        text
                    }
                }
                cite {
                    text
                }
            }
        }
        prismicHomePage {
            data {
                where_we_work_header {
                    text
                }
                ratings_header {
                    text
                }
                ratings {
                    rating_img {
                        url
                    }
                }
                company_logos {
                    logo {
                        url
                    }
                }
            }
        }
    }
`
