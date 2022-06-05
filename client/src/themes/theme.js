import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#8458B3',
            alt: '#494D5F'
        },
        secondary: {
            main: '#d0bdf4',
            alt: '#e0d4f6'
        },
        background: {
            default: '#e5eaf5',
        },
    },
    shape: {
        borderRadius: 8,
    },
    typography: {
        "fontFamily": `"PT Sans", "Helvetica", "Arial", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }
})