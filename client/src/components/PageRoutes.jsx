import React from 'react';
import {Routes, Route} from "react-router-dom";
import {RecipeGeneratorPage} from "../pages";

const PageRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<RecipeGeneratorPage/>}/>
        </Routes>
    );
};

export default PageRoutes;