// prettier-ignore
import { Suspense, useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeContext } from "./context/ThemeContext";
import Home from "./Pages/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Gallery from "./Pages/Gallery/Gallery";
import DevPro from "./Pages/DevPro/DevPro";
import AboutUs from "./Pages/AboutUs/AboutUs";
import News from "./Pages/News/News";

import "./styles/_main.scss";
import Footer from "./Components/Footer/Footer";

// prettier-ignore
function App() {

    const [height_arr, setHeight_arr] = useState([])

    const { theme, img_height, app_height } = useContext(ThemeContext)

    useEffect(() => {
        // console.log(img_height, app_height)
        if(img_height !== 0 || app_height !== 0) {
            var height_design = document.getElementsByClassName('design')[0].clientHeight === 0 ? 500 : document.getElementsByClassName('design')[0].clientHeight
            var total_circle = Math.round(document.getElementsByClassName('App')[0].clientHeight / height_design)
            var overall = []
            var tot_overall = 0
            for(var i=0; i < total_circle; i++) {
                overall.push(tot_overall)
                tot_overall = tot_overall + 500
            }
            setHeight_arr(overall)
        }
    }, [img_height, app_height])
    // console.log(height_arr)
    
    return (
        <div className={`App ${theme} d-flex flex-column justify-content-between`} >
            <div className="design">
                {
                    height_arr?.map((he,i) => 
                        i%2 === 0
                        ? <div className="liquid_shape" style={{ top: he, right: 0 }} key={i}></div>
                        : <div className="liquid_shape" style={{ top: he, left: 0 }} key={i}></div>
                    )
                }
            </div>
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
                    <Route path="/devpro" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <DevPro />
                        </Suspense>
                    } />
                    <Route path="/aboutus" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <AboutUs />
                        </Suspense>
                    } />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
