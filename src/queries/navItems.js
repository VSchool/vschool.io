import React from "react"
import { graphql } from "gatsby"

export const primaryNavItemsQuery = graphql`
    fragment NavItems on PrismicNavigationBarDataType {
        nav {
            ... on PrismicNavigationBarNavNavItem {
                id
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
                        id
                        url
                    }
                    sub_nav_link_label {
                        text
                    }
                    start_date {
                        document {
                            ... on PrismicStartDate {
                                id
                                data {
                                    start_date(formatString: "MMM Do, YYYY")
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
