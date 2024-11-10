/* import DashboardIcon from "../assets/icons/dashboard/DashboardIcon"; */

export const dashboardSideMenuitems = [
  {
    title: "Dashboard",
    to: "/profile/dashboard",
    /*  icon: () => <DashboardIcon className="text-darkColors-lightGrey" />, */
    // other items
    icon: "#dashboard",
  },
  { title: "My Task", to: "/profile/tasks", icon: "#tasks" },
  {
    title: "Inbox",
    to: "/profile/inbox",
    icon: "#inbox",
    inbox: [
      "message1",
      "message2",
      "message3",
      "message4",
      "message1",
      "message2",
      "message3",
      "message4",
      "message1",
      "message2",
      "message3",
      "message4",
      "message1",
      "message2",
      "message3",
      "message4",
      "message1",
      "message2",
      "message3",
      "message4",
    ],
  },
  { title: "Analyse", to: "/profile/analyse", icon: "#analyse" },
  { title: "Members", to: "/profile/members", icon: "#members" },
  { title: "Settings", to: "/profile/settings", icon: "#settings" },
  // Add more menu items here
];
