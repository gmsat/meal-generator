import {CssBaseline, Grid, ThemeProvider} from "@mui/material";
import MainContext from "./context/MainContext";
import {theme} from "./themes/theme";
import PageRoutes from "./components/PageRoutes";
import MainToolbar from "./components/MainToolbar";
import Footer from "./components/Footer";

import './App.css';

function App() {

    return (
        <MainContext.Provider value={null}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>

                <Grid container flexDirection={"column"}>
                    <MainToolbar/>
                    <PageRoutes/>
                    <Footer/>
                </Grid>

            </ThemeProvider>
        </MainContext.Provider>
    );
}

export default App;
