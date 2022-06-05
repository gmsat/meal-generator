import React, {useEffect, useState} from "react";
import useFetch from "./useFetch";
import {Button, Card, Divider, Grid, TextField, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import {Tooltip} from "@mui/material";
import {Grow} from "@mui/material";

const inputStyle = {
    padding: 5
}

const customToggleStyle = {
    height: 30,
    fontSize: "0.6rem"
}

const CaloriesInput = ({value, setValue}) => {
    const handleChange = (e) => setValue(e.target.value)

    return (
        <TextField
            size={"small"}
            fullWidth
            type={"number"}
            onChange={handleChange}
            variant={"outlined"}
            value={value}
            placeholder={"Enter calories"}
        />
    )
}

const MealParamsToggle = ({value, setValue, children, size, orientation, sx}) => {
    const handleChange = (e) => setValue(e.target.value);

    return (
        <ToggleButtonGroup
            fullWidth
            orientation={orientation}
            size={size}
            value={value}
            onChange={handleChange}
            exclusive
            sx={sx}
        >
            {children}
        </ToggleButtonGroup>
    )
}

const TooltipToggleButton = ({ children, title, ...props }) => (
    <Tooltip title={title}>
        <ToggleButton {...props}>{children}</ToggleButton>
    </Tooltip>
)

const useMealGenerator = (scroll) => {
    const [calories, setCalories] = useState("");
    const [timeFrame, setTimeFrame] = useState("day");
    const [diet, setDiet] = useState("vegetarian")
    const [hiddenGenerator, setHiddenGenerator] = useState(false);

    const url = `http://localhost:4000/api/getMeals?diet=${diet}&calories=${calories}&timeFrame=${timeFrame}`;
    const {error, loading, data, reFetch, clearData} = useFetch(url, false);

    function handleClick() {
        reFetch();
        setHiddenGenerator(true)
    }

    useEffect(() => {
        if (scroll === "scroll") {
            setTimeout(() => {
                window.scrollTo({top: 300, behavior: "smooth"})
            }, 100)
        }
    }, [data])

    const GenerateAgainButton = () => {
        function handleClick() {
            clearData();
            setHiddenGenerator(false)
        }

        return (
            <Grow in={hiddenGenerator}>
                <Button sx={{display: !hiddenGenerator && "none"}} color={"primary"} variant={"contained"} onClick={handleClick}>Generate new recipes</Button>
            </Grow>
        )
    }

    return {
        error, loading, data, timeFrame,
        MealGenerator:(
            <Grow in={!hiddenGenerator}>
                <Card variant={"outlined"} sx={{display: hiddenGenerator && "none", width: "100%", ":hover": {boxShadow: 3}}}>
                    <Grid container flexDirection={"column"} sx={inputStyle} gap={2}>
                        <Typography variant={"h5"}>
                            Vegetarian Meal Generator
                        </Typography>
                        <Divider/>
                        <MealParamsToggle value={diet} setValue={setDiet} size={"small"} orientation={"horizontal"}>
                            <TooltipToggleButton title={"No meat, poultry, fish, dairy and eggs"} disableRipple sx={customToggleStyle} value={"vegetarian"}>Vegetarian</TooltipToggleButton>
                            <TooltipToggleButton title={"Includes dairy products"} disableRipple sx={customToggleStyle} value={"lacto-vegetarian"}>Lacto-vegetarian</TooltipToggleButton>
                            <TooltipToggleButton title={"Includes eggs, but not dairy products"} disableRipple sx={customToggleStyle} value={"ovo-vegetarian"}>Ovo-vegetarian</TooltipToggleButton>
                        </MealParamsToggle>
                        <MealParamsToggle value={timeFrame} setValue={setTimeFrame} size={"small"} >
                            <ToggleButton disableTouchRipple value={"day"}>Day</ToggleButton>
                            <ToggleButton disableTouchRipple value={"week"}>Week</ToggleButton>
                        </MealParamsToggle>
                        <CaloriesInput value={calories} setValue={setCalories}/>
                        <Button
                            size={"large"}
                            endIcon={<ArrowCircleDownOutlinedIcon/>}
                            onClick={handleClick}
                            variant={"contained"}>Generate meals</Button>
                    </Grid>
                </Card>
            </Grow>),
        GenerateAgain: (<GenerateAgainButton/>)
    }
};

export default useMealGenerator;