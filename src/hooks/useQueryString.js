import { useLocation } from "@reach/router"

export function useQueryString() {
    const location = useLocation()
    return location.search
}
