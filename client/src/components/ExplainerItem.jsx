import React from 'react';
import {Grid, Paper, Typography} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ExplainerItem = ({title, content}) => {
    return (
        <Paper sx={{boxShadow: 0, padding: 1}}>
            <Grid container gap={3} justifyContent={"start"} alignItems={"center"}>

                <KeyboardArrowRightIcon/>

                <Typography variant={"h6"} sx={{width: 170}}>
                    {title}
                </Typography>

                <Typography variant={"body1"}>
                    {content}
                </Typography>

            </Grid>
        </Paper>
    )
};

export default ExplainerItem;