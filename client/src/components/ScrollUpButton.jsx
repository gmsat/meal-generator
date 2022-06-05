import React from 'react';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {Fab} from "@mui/material";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";
import {Grow} from "@mui/material";

const ScrollUpButton = () => {
    const [showOnScroll, setShowOnScroll] = React.useState(false);
    const showAtPosition = -500;

    useScrollPosition(({ prevPos, currPos }) => {
        if (currPos.y <= showAtPosition) setShowOnScroll(true)
        if (currPos.y > showAtPosition) setShowOnScroll(false)
    })

    const fabStyle = {
        position: 'fixed',
        bottom: 35,
        right: 35,
        visibility: showOnScroll ? "flex" : "hidden"
    };

    return (
        <Grow in={showOnScroll} onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
            <Fab sx={fabStyle} color={"primary"}>
                <ArrowUpwardIcon />
            </Fab>
        </Grow>
    );

};

export default ScrollUpButton;