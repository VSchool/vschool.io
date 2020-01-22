import React from "react"
import { graphql } from "gatsby"

export const navItemsQuery = graphql`
    fragment NavItems on PrismicNavigationBarData {
        nav {
            items {
                sub_nav_link {
                    url
                    uid
                    id
                }
                sub_nav_link_label {
                    text
                }
                start_date {
                    document {
                        data {
                            start_date(formatString: "MMM Do, YYYY")
                        }
                    }
                }
            }
            primary {
                label {
                    text
                }
                link {
                    url
                    uid
                }
            }
        }
    }
`
