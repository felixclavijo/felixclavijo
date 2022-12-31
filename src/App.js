// prettier-ignore
import { Suspense, useContext, useEffect, useRef, useState } from "react";
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
import GoToTop from "./Components/GoToTop/GoToTop";
import HomeAdmin from "./AdminPages/HomeAdmin/HomeAdmin";
import GalleryAdmin from "./AdminPages/GalleryAdmin/GalleryAdmin";
import NewsAdmin from "./AdminPages/NewsAdmin/NewsAdmin";
import DevProAdmin from "./AdminPages/DevProAdmin/DevProAdmin";
import AboutUsAdmin from "./AdminPages/AboutUsAdmin/AboutUsAdmin";
import SidebarAdmin from "./AdminComponents/SidebarAdmin/SidebarAdmin";
import { GetDocuments } from "./AdminFunctions/AdminFunctions";
import { connect } from "react-redux";
// import _ from "lodash";

// prettier-ignore
function App(props) {

    const { onlineAdmin, onlineAdminInsert } = props

    const [height_arr, setHeight_arr] = useState([])
    const [sidebarshow, setSidebarShow] = useState(true)

    const { theme, img_height, app_height } = useContext(ThemeContext)

    const loop = useRef(true)

    useEffect(() => {
        // console.log(img_height, app_height)
        if(loop.current && onlineAdmin === null) {
            GetDocuments().then((data) => {
                onlineAdminInsert(data)
                // if(!_.isEqual(JSON.parse(localStorage.getItem("admin")), data)) {
                //     localStorage.setItem("admin", JSON.stringify(data))
                //     localStorage.setItem("prevAdmin", JSON.stringify(data))
                // }
            })
            loop.current = false
        }
        if(img_height !== 0 || app_height !== 0) {
            var height_design = document.getElementsByClassName('design')[0]?.clientHeight === 0 ? 500 : document.getElementsByClassName('design')[0]?.clientHeight
            var total_circle = Math.round(document.getElementsByClassName('App')[0].clientHeight / height_design)
            var overall = []
            var tot_overall = 0
            for(var i=0; i < total_circle; i++) {
                overall.push(tot_overall)
                tot_overall = tot_overall + 500
            }
            setHeight_arr(overall)
        }
    }, [img_height, app_height, onlineAdminInsert, onlineAdmin])
    // console.log(height_arr)
    
    return (
        <div className={`App ${theme} d-flex flex-column justify-content-between`} >
            {
                window.location.pathname.split('/').includes('felixclavijoadmin')
                ? null
                : <>
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
                </>
            }
            <div className="main-content-theme">
                <GoToTop />
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
                    <Route path="/felixclavijoadmin" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <SidebarAdmin sidebarshow={sidebarshow} setSidebarShow={setSidebarShow} />
                        </Suspense>
                    }>
                        <Route path="/felixclavijoadmin/home" element={<HomeAdmin sidebarshow={sidebarshow} />} />
                        <Route path="/felixclavijoadmin/gallery" element={<GalleryAdmin sidebarshow={sidebarshow} />} />
                        <Route path="/felixclavijoadmin/news" element={<NewsAdmin sidebarshow={sidebarshow} />} />
                        <Route path="/felixclavijoadmin/devpro" element={<DevProAdmin sidebarshow={sidebarshow} />} />
                        <Route path="/felixclavijoadmin/aboutus" element={<AboutUsAdmin sidebarshow={sidebarshow} />} />
                    </Route>
                </Routes>
            </div>
            {
                window.location.pathname.split('/').includes('felixclavijoadmin')
                ? null
                : <Footer />
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        onlineAdmin: state.onlineAdmin,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onlineAdminInsert: (val) => {
            dispatch({
                type: "ONLINEADMIN",
                item: val,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
