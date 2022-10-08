import React from 'react';
import { Grid } from "@mui/material";
import HeaderSection from "./HeaderSection";
import Meals from "./Meals";
import Nutrients from "./Nutrients";

const ShowMealData = ({data}) => {
  const DailyMealPlan = () => {
    return (
      <>
        <Grid item container gap={3} flex={8}>
          <HeaderSection title={"One Day Meal Plan"}/>
          <Grid container gap={3}>
            <Grid container item flex={8}>
              <Meals mealData={data.meals}/>
            </Grid>
            <Grid container item flex={4}>
              <Nutrients nutrientData={data.nutrients}/>
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  }

  const WeeklyMealPlan = () => {
    const MealsForDay = () => {
      return (
        Object.entries(data.week).map(([day, value], index) =>
          <Grid key={index} container gap={3}>
            <Grid item container gap={3} flex={8}>
              <HeaderSection title={`${day[0].toUpperCase()}${day.slice(1)} meal plan`}/>
              <Grid container gap={3}>
                <Grid container item flex={8}>
                  <Meals mealData={value.meals}/>
                </Grid>
                <Grid container item flex={4}>
                  <Nutrients nutrientData={value.nutrients}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )
      )
    }

    return (
      <Grid item container gap={3} flex={8}>
        <MealsForDay/>
      </Grid>
    )
  }

  return (
    <>
      <Grid container maxWidth={1200} margin={"auto"}>
        {!data["week"] ? <DailyMealPlan/> : <WeeklyMealPlan/>}
      </Grid>
    </>
  )
};

export default ShowMealData;