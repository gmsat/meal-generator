import React from 'react';
import { Grid } from "@mui/material";
import useMealGenerator from "../../hooks/useMealGenerator";
import LoadingData from "../../components/LoadingData";
import ShowErrorMessage from "../../components/ShowErrorMessage";
import ShowMealData from "../../components/ShowMealData";
import ScrollUpButton from "../../components/ScrollUpButton";
import ExceededQuota from "../../components/ExceededQuota";

const RecipeGeneratorPage = () => {
  const {MealGenerator, loading, error, timeFrame, data, GenerateAgain} = useMealGenerator("scroll")

  return (
    <>
      <Grid
        container
        gap={4}
        padding={5}
        sx={{backgroundColor: "secondary.main"}}
      >
        <Grid flex={4} container item maxWidth={450} margin={"auto"}>
          {MealGenerator}
        </Grid>
      </Grid>
      <Grid flex={10} item container flexDirection={"column"} sx={{padding: 5}}>
        <Grid container margin={"auto"} justifyContent={"center"} marginBottom={5}>
          {GenerateAgain}
        </Grid>
        {loading && <LoadingData/>}
        {error && <ShowErrorMessage error={error}/>}
        {data && data.code === 402 && <ExceededQuota/>}
        {data && !data.code && <ShowMealData data={data} timeFrame={timeFrame}/>}
      </Grid>
      <ScrollUpButton/>
    </>
  );
};

export default RecipeGeneratorPage;