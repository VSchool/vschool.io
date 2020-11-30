import { createClient } from "@formium/client"

const formium = createClient(process.env.GATSBY_FORMIUM_PROJECTID)
export { formium }
