import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./App";
import Dashboard from "./components/pages/Profile/Dashboard";
import Inbox from "./components/pages/Profile/Inbox/Inbox";
import Tasks from "./components/pages/Profile/Tasks/Tasks";
import Analyse from "./components/pages/Profile/Analyse/Analyse";
import Settings from "./components/pages/Profile/Settings/Settings";
import Members from "./components/pages/Profile/Members/Members";
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
import Profile from "./components/pages/Profile/Profile";

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
        path: "/profile",
        element: <Profile />,

        children: [
          // Redirect from /profile to /profile/dashboard
          {
            index: true,
            element: <Navigate to="/profile/dashboard" replace />,
          },
          {
            path: "/profile/dashboard",
            element: <Dashboard />,

            children: [
              {
                index: true,
                element: <Navigate to="/profile/dashboard/overview" replace />,
              },
              {
                path: "/profile/dashboard/overview",
                element: <Overview />,
              },
              {
                path: "/profile/dashboard/board",
                element: <Board />,
              },
              {
                path: "/profile/dashboard/list",
                element: <List />,
              },
              {
                path: "/profile/dashboard/timeline",
                element: <Timeline />,
              },
              {
                path: "/profile/dashboard/calender",
                element: <Calender />,
              },
              {
                path: "/profile/dashboard/workflow",
                element: <Workflow />,
              },
              {
                path: "/profile/dashboard/files",
                element: <Files />,
              },
            ],
          },
          {
            path: "/profile/tasks",
            element: <Tasks />,
          },
          {
            path: "/profile/inbox",
            element: <Inbox />,
          },
          {
            path: "/profile/analyse",
            element: <Analyse />,
          },
          {
            path: "/profile/members",
            element: <Members />,
          },
          {
            path: "/profile/settings",
            element: <Settings />,
          },
        ],
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
