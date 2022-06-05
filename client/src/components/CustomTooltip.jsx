import React from 'react';
import {styled, Tooltip, tooltipClasses} from "@mui/material";

const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }}/>
))({
    [`& .${tooltipClasses.tooltip}`]: {
        width: 500,
        padding: 10
    },
});

function CustomTooltip({title, children}) {
    return (
        <div>
            <CustomWidthTooltip title={title}>
                {children}
            </CustomWidthTooltip>
        </div>
    );
}

export default CustomTooltip;