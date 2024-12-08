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
import Analyse from "./components/pages/Profile/Analyse/Analyse";
import Settings from "./components/pages/Profile/Settings/Settings";
import Members from "./components/pages/Profile/Members/Members";
import Overview from "./components/pages/Profile/Dashboard/pages/Overview";
import SignUpPage from "./components/pages/SignUpPage";
import LoginPage from "./components/pages/LoginPage";
import Application from "./components/Application";
import Onboarding1 from "./components/pages/Onboarding1";
import Onboarding2 from "./components/pages/Onboarding2";

import Onboarding3 from "./components/pages/Onboarding3";
import QuickVideoPage from "./components/pages/QuickVideoPage";
import Profile from "./components/pages/Profile/Profile";
import NewProject from "./components/pages/Profile/Tasks/NewProject";
import Tasks from "./components/pages/Profile/Tasks/Tasks";
import AssignTask from "./components/pages/Profile/Tasks/AssignTask";
import TrackTask from "./components/pages/Profile/Tasks/TrackTask";
import TaskMonitor from "./components/pages/Profile/Tasks/TaskMonitor";
import OtpPage from "./components/pages/OTPpage";

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
          {
            index: true,
            element: <Navigate to="dashboard" replace />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,

            children: [
              {
                index: true,
                element: <Navigate to="overview" replace />,
              },
              {
                path: "overview",
                element: <Overview />,
              },
            ],
          },
          {
            path: "tasks",
            element: <Tasks />,
            children: [
              {
                index: true,
                element: <Navigate to="new-project" replace />,
              },
              {
                path: "new-project",
                element: <NewProject />,
              },
              {
                path: "assign-task",
                element: <AssignTask />,
              },
              {
                path: "track-task",
                element: <TrackTask />,
              },
              {
                path: "monitor-task",
                element: <TaskMonitor />,
              },
            ],
          },
          {
            path: "inbox",
            element: <Inbox />,
          },
          {
            path: "analyse",
            element: <Analyse />,
          },
          {
            path: "members",
            element: <Members />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "onboarding-1",
        element: <Onboarding1 />,
      },
      {
        path: "onboarding-2",
        element: <Onboarding2 />,
      },
      {
        path: "onboarding-3",
        element: <Onboarding3 />,
      },
      {
        path: "otp",
        element: <OtpPage />,
      },
      {
        path: "quick-video",
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
