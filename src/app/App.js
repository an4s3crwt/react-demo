
import HeaderMain from '../header';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { useEffect } from 'react';


function _ScrollToTop(props){
  const { pathname } =  useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);
export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
       <HeaderMain />
        <AppRoutes />
      </ScrollToTop>
      

    </Router>
   
  );
}

