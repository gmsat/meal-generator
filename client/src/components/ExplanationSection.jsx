import React from 'react';
import {Card, Divider, Stack} from "@mui/material";

const ExplanationSection = ({children}) => {
    return (
        <Card variant={"outlined"} sx={{width: "100%", padding: 3}}>
            <Stack divider={<Divider variant={"middle"}/>} gap={4}>
                {children}
            </Stack>
        </Card>
    )
};

export default ExplanationSection;