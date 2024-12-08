const sideBarMenuItems = [
  {
    label: "Dashboard",
    path: "/profile/dashboard",
    icon: "#dashboard",
  },
  { label: "My Task", path: "/profile/tasks", icon: "#tasks" },
  {
    label: "Inbox",
    path: "/profile/inbox",
    icon: "#inbox",
    inbox: [],
  },
  { label: "Analyse", path: "/profile/analyse", icon: "#analyse" },
  { label: "Members", path: "/profile/members", icon: "#members" },
  { label: "Settings", path: "/profile/settings", icon: "#settings" },
];

const dashboardMenuItems = [
  { label: "Overview", path: "/profile/dashboard/overview" },
];

const myTasksMenuItems = [
  { label: "Project", path: "/profile/tasks/new-project" },
  { label: "Assign Task", path: "/profile/tasks/assign-task" },
  { label: "Track Task", path: "/profile/tasks/track-task" },
  { label: "Monitor Task", path: "/profile/tasks/monitor-task" },
];

const membersMenuItems = [
  { label: "Manage Members", path: "/profile/members/manage" },
  { label: "Invite Members", path: "/profile/members/invite" },
];

export {
  sideBarMenuItems,
  dashboardMenuItems,
  myTasksMenuItems,
  membersMenuItems,
};
