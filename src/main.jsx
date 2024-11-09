import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./App";
import Dashboard from "./components/pages/Profile/Dashboard";
import Timelines from "./components/pages/Profile/Timelines/Timelines";
import Tasks from "./components/pages/Profile/Tasks/Tasks";
import Teams from "./components/pages/Profile/Teams/Teams";
import Reports from "./components/pages/Profile/Reports/Reports";
import Overview from "./components/pages/Profile/Dashboard/pages/Overview";
import Board from "./components/pages/Profile/Dashboard/pages/Board";
import List from "./components/pages/Profile/Dashboard/pages/List";
import Timeline from "./components/pages/Profile/Dashboard/pages/Timeline";
import Calender from "./components/pages/Profile/Dashboard/pages/Calender";
import Workflow from "./components/pages/Profile/Dashboard/pages/Workflow";
import Files from "./components/pages/Profile/Dashboard/pages/Files";
import SignUpPage from "./components/pages/SignUpPage";
import LoginPage from "./components/pages/LoginPage";
import Application from "./components/Application";
import OTPPage from "./components/pages/OTPpage";
import Onboarding1 from "./components/pages/Onboarding1";
import Onboarding2 from "./components/pages/Onboarding2";
import Onboarding3 from "./components/pages/Onboarding3";
import QuickVideoPage from "./components/pages/QuickVideoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Application />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,

        children: [
          {
            path: "/dashboard/overview",
            element: <Overview />,
          },
          {
            path: "/dashboard/board",
            element: <Board />,
          },
          {
            path: "/dashboard/list",
            element: <List />,
          },
          {
            path: "/dashboard/timeline",
            element: <Timeline />,
          },
          {
            path: "/dashboard/calender",
            element: <Calender />,
          },
          {
            path: "/dashboard/workflow",
            element: <Workflow />,
          },
          {
            path: "/dashboard/files",
            element: <Files />,
          },
        ],
      },
      {
        path: "/timelines",
        element: <Timelines />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/onboarding-1",
        element: <Onboarding1 />,
      },
      {
        path: "/onboarding-2",
        element: <Onboarding2 />,
      },
      {
        path: "/onboarding-3",
        element: <Onboarding3 />,
      },
      {
        path: "/otp",
        element: <OTPPage />,
      },
      {
        path: "/quick-video",
        element: <QuickVideoPage />,
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
