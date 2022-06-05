import React from 'react';
import {AppBar} from "@mui/material";
import {GitHub} from "@mui/icons-material";
import {Grid} from "@mui/material";
import {IconButton} from "@mui/material";

const MainToolbar = () => {
    return (
        <AppBar position={"static"} sx={{ padding: 3}}>
            <Grid>
                <IconButton target={"_blank"} href={"https://github.com/gmsat/tietoevry-assignment.git"}>
                    <GitHub sx={{color: "#fff", fontSize: "2rem"}}/>
                </IconButton>
            </Grid>
        </AppBar>
    );
};

export default MainToolbar;