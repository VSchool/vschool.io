import { useSpring } from "react-spring"

export function useMenuAnimation(open) {
    const menuAnimation = useSpring({
        transform: open ? "translateX(0%)" : "translateX(100%)",
    })
    return menuAnimation
}
