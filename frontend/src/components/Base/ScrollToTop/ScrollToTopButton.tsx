import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import { Box, Fab, Zoom } from "@mui/material";
import { useScrollToTop } from "../../../util/hooks/useScrollToTop";
import { observer } from "mobx-react-lite";
import { IScrollToTopButtonProps } from "./IScrollToTopButtonProps";

export const ScrollToTopButton: React.FC<IScrollToTopButtonProps> = () => {
    const trigger = useScrollToTop();

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Zoom in={!!trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{
                    position: "fixed",
                    bottom: 16,
                    right: 16,
                }}
            >
                <Fab color="default" size={"large"} onClick={handleClick} aria-label="scroll to top">
                    <KeyboardArrowUp />
                </Fab>
            </Box>
        </Zoom>
    );
}

export default observer(ScrollToTopButton);