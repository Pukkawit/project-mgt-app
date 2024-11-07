import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./App";
import Product from "./components/pages/Product";
import Solution from "./components/pages/Solution";
import Plan from "./components/pages/Plan";
import Resources from "./components/pages/Resources";
import FAQs from "./components/FAQs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Product />,
      },
      {
        path: "/solution",
        element: <Solution />,
      },
      {
        path: "/plan",
        element: <Plan />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/faq",
        element: <FAQs />,
      },
      {
        path: "*",
        element: <h1>Page Not Found</h1>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);
