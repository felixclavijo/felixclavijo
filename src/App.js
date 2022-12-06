import { Suspense, useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeContext } from "./context/ThemeContext";
import Home from "./Pages/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Gallery from "./Pages/Gallery/Gallery";
import News from "./Pages/News/News";
import AboutUs from "./Pages/AboutUs/AboutUs";

import "./styles/_main.scss";

// prettier-ignore
function App() {

    const { theme } = useContext(ThemeContext)
    
    return (
        <div className={theme}>
            <Navigation />
            <div className="main-content-theme">
                <Routes>
                    <Route exact path="/" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Home />
                        </Suspense>
                    } />
                    <Route path="/gallery" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Gallery />
                        </Suspense>
                    } />
                    <Route path="/news" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <News />
                        </Suspense>
                    } />
                    <Route path="/aboutus" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <AboutUs />
                        </Suspense>
                    } />
                </Routes>
            </div>
        </div>
    );
}

export default App;
