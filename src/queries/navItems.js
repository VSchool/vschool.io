import React from "react"
import { graphql } from "gatsby"

export const primaryNavItemsQuery = graphql`
    fragment NavItems on PrismicNavigationBarData {
        nav {
            slice_label
            primary {
                label {
                    text
                }
                link {
                    url
                }
            }
            items {
                sub_nav_link {
                    url
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
        }
    }
`