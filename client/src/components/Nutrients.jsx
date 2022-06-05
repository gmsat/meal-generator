import React from 'react';
import {Grid, Card, Typography, Divider} from "@mui/material";

const Nutrients = ({nutrientData}) => {

    const NutrientList = () => {
        return (
            Object.entries(nutrientData).map(([key, value], index) =>
                    <Grid container key={index} sx={{backgroundColor: index % 2 === 0 ? "secondary.main" : "secondary.alt", padding: 1, borderRadius: 1}}>
                        <Grid flex={1}>
                            <Typography fontSize={"1.2rem"} variant={"body1"}>{key[0].toUpperCase() + key.slice(1)}</Typography>
                        </Grid>
                        <Grid flex={1}>
                            <Typography fontSize={"1.2rem"} variant={"body1"}>{value} {key === "calories" ? "kcal" : "g"}</Typography>
                        </Grid>
                    </Grid>
                )
        )
    }

    return (
        <Card variant={"outlined"} sx={{width: "100%"}}>
            <Grid container flexDirection={"column"} gap={3} justifyContent={"center"} padding={4}>
                <Typography variant={"h5"} fontWeight={"bold"} color={"primary"}>Nutrient Breakdown</Typography>
                <Divider/>
                <NutrientList/>
            </Grid>
        </Card>

    );
};

export default Nutrients;