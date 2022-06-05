import React from 'react';
import {LinearProgress, Box} from "@mui/material";

const LoadingData = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    );
};

export default LoadingData;