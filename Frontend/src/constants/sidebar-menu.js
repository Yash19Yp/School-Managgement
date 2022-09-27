import DashboardIcon from "../assets/icons/dashboard.svg";
import UserIcon from "../assets/icons/user.svg";
import StudentIcon from "../assets/icons/student.png";
import TeacherIcon from "../assets/icons/teacher.png";
const sidebar_menu = [
  {
    id: 1,
    icon: DashboardIcon,
    path: "/",
    title: "Dashboard",
  },
  {
    id: 2,
    icon: StudentIcon,
    path: "/studentDetails",
    title: "Student Details",
  },
  {
    id: 3,
    icon: TeacherIcon,
    path: "/teacherDetails",
    title: "Teacher Details",
  },
  {
    id: 4,
    icon: UserIcon,
    path: "/profile",
    title: "My account",
  },
];

export default sidebar_menu;
