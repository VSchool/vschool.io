import { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

export function useFilteredCompanies(filter) {
    const data = useStaticQuery(graphql`
        {
            prismicAlumniCompanies {
                data {
                    company_logos {
                        digital_family
                        company_logo {
                            url
                            fluid {
                                src
                            }
                        }
                        fsjs_alumn_works_here
                        xd_alumn_works_here
                    }
                    companies_header {
                        text
                    }
                }
            }
        }
    `)
    const allCompanies = data.prismicAlumniCompanies.data.company_logos
    const filteredCompanies = allCompanies.filter(company => {
        switch (filter) {
            case "df":
                return company.digital_family
            case "fsjs":
                return company.fsjs_alumn_works_here
            case "ux":
                return company.xd_alumn_works_here
            default:
                return false
        }
    })
    return filteredCompanies
}
