// Import Parse minified version
import Parse from 'parse/dist/parse.min.js';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'P2VRnfwO1b2SFafTK59uCNUcHfOasUct2n7ZuOOb';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'k2AiqdIte6DA8d5NnxQsQkyyi8NX9XA0sGEybI9o';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CONVITELOC from "./pages/CONVITELOC";
import CONVITEINFO from "./pages/CONVITEINFO";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/convite-info":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<CONVITELOC />} />
      <Route path="/convite-info" element={<CONVITEINFO />} />
    </Routes>
  );
}
export default App;
