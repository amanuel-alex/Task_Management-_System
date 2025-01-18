import {
  MdDashboard,
  MdOutlineAddTask,
  MdOutlinePendingActions,
  MdTaskAlt,
} from "react-icons/md";

import { FaTasks, FaTrashAlt, FaUsers } from "react-icons/fa";

interface LinkItem {
  label: string;
  link: string;
  icon: JSX.Element; // JSX element type for the icon
}

const linkData: LinkItem[] = [
  {
    label: "Dashboard",
    link: "dashboard",
    icon: <MdDashboard />,
  },
  {
    label: "Tasks",
    link: "tasks",
    icon: <FaTasks />,
  },
  {
    label: "Completed",
    link: "completed/completed",
    icon: <MdTaskAlt />,
  },
  {
    label: "In Progress",
    link: "in-progress/in-progress",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "To Do",
    link: "todo/todo",
    icon: <MdOutlineAddTask />,
  },
  {
    label: "Team",
    link: "team",
    icon: <FaUsers />,
  },
  {
    label: "Trash",
    link: "trashed",
    icon: <FaTrashAlt />,
  },
];

export { linkData };
