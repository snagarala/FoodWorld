import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Redux/store";
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import HomePage from "./components/Restaurant/HomePage";
import AboutPage from "./components/Restaurant/AboutPage";
import Catering from "./components/Restaurant/Catering";
import OrderOnlinePage from "./components/Restaurant/OrderOnlinePage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/catering",
        element: <Catering />,
      },
    ],
  },
  {
    path: "/orderOnline",
    element: <OrderOnlinePage/>
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <ParentComponent/> */}
      <RouterProvider router={router} />
      {/* <FirstPage/> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
