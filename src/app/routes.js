import { CSSTransition, TransitionGroup} from "react-transition-group";
import React from "react";
import { Routes, Route } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import  Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Portfolio from "../pages/portfolio";
import  Socialicons  from "../components/socialicons";

const AnimatedRoutes = withRouter(({ location }) => (

    <TransitionGroup>
        <CSSTransition
            key={location.key}
            timeout={{
                enter: 400,
                exit: 400,
            }}
            classNames="page"
             unmountOnExit
            >
            <Routes location={location}>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />}/>
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </CSSTransition>
    </TransitionGroup>
));

function AppRoutes() {
    return(
        <div className="s_c">
            <AnimatedRoutes />
            <Socialicons />

        </div>
    );
}

export default AppRoutes;