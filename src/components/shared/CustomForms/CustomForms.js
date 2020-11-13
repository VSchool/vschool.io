import React from "react"
import { createClient } from "@formium/client"
import { FormiumForm } from "@formium/react"

const formium = createClient(process.env.GATSBY_FORMIUM_PROJECTID)

export default function MyPage({ form }) {
    return (
        <FormiumForm
            data={form}
            onSubmit={async values => {
                // Send form values to Formium
                await formium.submitForm("scholarship-background-info", values)
                alert("Success")
            }}
        />
    )
}

// Note: `form` must be loaded from the @formium/client.
export async function getStaticProps(context) {
    const form = await formium.getFormBySlug("scholarship-background-info")
    return { props: { form } }
}
