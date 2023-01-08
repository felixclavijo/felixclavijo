import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { Provider } from "react-redux";
import rootReducer from "./Redux/rootReducer";
import thunk from "redux-thunk";
import { ThemeProvider } from "./context/ThemeContext";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    fab,
    faInstagram,
    faLinkedinIn,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope,
    faLocationDot,
    faMoon,
    faSun,
    faBars,
    faCircleCheck,
    faDownload,
    faAngleRight,
    faAngleLeft,
    faHome,
    faGripVertical,
    faBookOpen,
    faFeatherPointed,
    faPerson,
    faRightFromBracket,
    faMinus,
    faPlus,
    faAngleDown,
    faAngleUp,
    faTrash,
    faClose,
    faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

library.add(
    fab,
    faSun,
    faMoon,
    faLocationDot,
    faEnvelope,
    faInstagram,
    faLinkedinIn,
    faWhatsapp,
    faBars,
    faCircleCheck,
    faDownload,
    faAngleRight,
    faAngleLeft,
    faHome,
    faGripVertical,
    faBookOpen,
    faFeatherPointed,
    faPerson,
    faRightFromBracket,
    faMinus,
    faPlus,
    faAngleDown,
    faAngleUp,
    faTrash,
    faClose,
    faCircleXmark
);

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
