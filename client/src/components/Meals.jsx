import React from 'react';
import {Card, Divider, Grid} from "@mui/material";
import {Typography} from "@mui/material";
import Link from '@mui/material/Link';
import InfoIcon from '@mui/icons-material/Info';
import CustomTooltip from "./CustomTooltip";
import useFetch from "../hooks/useFetch";

const recipesStyle = {
    gap: 3,
    justifyContent: "space-between"
}

const recipeImageStyle = {
    height: 80,
    width: "auto"
}

const OneMealData = ({data}) => {
    const mealNutritionData = data.nutrition.nutrients;

    return (
        <>
            {Object.entries(mealNutritionData).map(([object, value], index) =>
                <Grid key={index} flexDirection={"row"} container>
                    <Grid item container flex={1}>{value.name}</Grid>
                    <Grid item flex={1} container>
                        <Grid item flex={1}>{value.amount}</Grid>
                        <Grid item flex={1}>{value.unit}</Grid>
                    </Grid>
                </Grid>
            )}
        </>
    )
}

const OneMeal = ({mealData, mealId, mealIndex}) => {
    const {data, loading, error} = useFetch(`http://localhost:4000/api/getRecipeInfo/${mealId}`, true)
    const isBreakfast = mealIndex === 0 && "Breakfast";
    const isLunch = mealIndex === 1 && "Lunch";
    const isDinner = mealIndex === 2 && "Dinner";

    return (
        <Card sx={{padding: 2, width: "100%", border: "none", position: "relative", ":hover": {boxShadow: 2}}} variant={"outlined"}>
            <Grid container>
                <Grid container alignItems={"center"} marginBottom={2}>
                    <Typography variant={"h6"} fontWeight={"bold"}>{isBreakfast || isLunch || isDinner}</Typography>
                </Grid>
                <Grid container gap={2}>
                    {data &&
                        <Card sx={{borderRadius: 0}}>
                            <img style={recipeImageStyle} src={data.image} alt={"recipe"}/>
                        </Card>
                    }
                    <Grid>
                        <Typography fontWeight={"bold"}>{mealData.title}</Typography>
                        <Typography>Servings: {mealData.servings}</Typography>
                        <Link href={mealData.sourceUrl} target={"_blank"}>Go to recipe</Link>
                    </Grid>
                </Grid>
                {data &&
                    <CustomTooltip title={<OneMealData data={data}/>}>
                        <InfoIcon sx={{position: "absolute", right: 15, top: 15}}/>
                    </CustomTooltip>
                }
            </Grid>
        </Card>
    )
}

const Meals = ({mealData}) => {
    return (
        <>
            <Card variant={"outlined"} sx={{padding: 2}}>
                <Grid container sx={recipesStyle}>
                    {mealData.map((meal, index) => (
                        <React.Fragment key={index}>
                            <OneMeal mealIndex={index} mealData={meal} mealId={meal.id}/>
                            {index !== mealData.length - 1 && <Divider variant={"fullWidth"} sx={{width: "100%"}}/>}
                        </React.Fragment>
                    ))}
                </Grid>
            </Card>
        </>
    );
};

export default Meals;