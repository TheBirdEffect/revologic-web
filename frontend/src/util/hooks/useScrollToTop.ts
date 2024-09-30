import { useScrollTrigger } from "@mui/material"

export const useScrollToTop = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    })

    return trigger;
}