import React from 'react';
import {Card, Grid, Typography, Divider} from "@mui/material";

const HeaderSection = ({title, subtitle, variant}) => {
    return (
        <Card variant={"outlined"} sx={{padding: 3, flex: 1, boxShadow: 0}}>
            <Grid>
                <Typography variant={"h4"}>{title}</Typography>
                {subtitle &&
                    <>
                        <Divider/>
                        <Typography color={"primary"} fontSize={"1.3rem"} variant={"subtitle1"}>{subtitle}</Typography>
                    </>
                }
            </Grid>
        </Card>
    );
};

export default HeaderSection;