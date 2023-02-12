import { getUID } from "../utilities";

const data = [
  { id: getUID(), label: "Dashboard", icon: "gauge" },
  { id: getUID(), label: "Workflow", icon: "chart-column" },
  { id: getUID(), label: "Calender", icon: "calendar" },
  { id: getUID(), label: "SocialRM", icon: "gauge" },
  { id: getUID(), label: "Metrics", icon: "chart-line" },
  { id: getUID(), label: "Leads", icon: "search" },
  { id: getUID(), label: "Users", icon: "user" },
  { id: getUID(), label: "Notifications", icon: "bell" },
  { id: getUID(), label: "Documents", icon: "note-sticky" },
  { id: getUID(), label: "Segments", icon: "circle" },
];

export const company = [
  { id: getUID(), label: "Company", icon: "circle-check" },
];

export const getSideMenuList = () => data;
