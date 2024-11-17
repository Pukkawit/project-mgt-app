export const sideBarMenuitems = [
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
    ],
  },
  { label: "Analyse", path: "/profile/analyse", icon: "#analyse" },
  { label: "Members", path: "/profile/members", icon: "#members" },
  { label: "Settings", path: "/profile/settings", icon: "#settings" },
];

export const dashboardMenuItems = [
  { label: "Overview", path: "/profile/dashboard/overview" },
  { label: "Board", path: "/profile/dashboard/board" },
  { label: "List", path: "/profile/dashboard/list" },
  { label: "Timeline", path: "/profile/dashboard/timeline" },
  { label: "Calender", path: "/profile/dashboard/calender" },
  { label: "Workflow", path: "/profile/dashboard/workflow" },
  { label: "Files", path: "/profile/dashboard/files" },
];
export const myTasksMenuItems = [
  { label: "Overview", path: "/profile/tasks/task-progress" },
  { label: "My Tasks", path: "/profile/tasks/my-tasks" },
  { label: "Create New", path: "/profile/tasks/create-task" },
  { label: "Assign Task", path: "/profile/tasks/assign-task" },
];
