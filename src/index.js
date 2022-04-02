import { Suspense, lazy } from "react";
import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/reset.css";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import InitialLoader from "./components/InitialLoader";
const App = lazy(() => import("./App"));

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<InitialLoader />}>
      <App />
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);
