import dropIcon from "../../../assets/dropArrow.svg";

export const SidebarData = [
  {
    title: "Courses",
    path: "selectL",
    icon: dropIcon,

    subNav: [
      {
        title: "online",
        path: "/online",
      },
      {
        title: "groupe",
        path: "/groupe",
      },
      {
        title: "private",
        path: "/private",
      },
      {
        title: "school",
        path: "/school",
      },
      {
        title: "schedule",
        path: "/schedule",
      },
    ],
  },
  {
    title: "Pricing",
    path: "enroll",
  },
  {
    title: "Missions",
    path: "/missions",
  },
  {
    title: "About us",
    path: "teachers",
    icon: dropIcon,

    subNav: [
      {
        title: "certifications",
        path: "/certifications",
      },
      {
        title: "contact us",
        path: "/contact",
      },
      {
        title: "FAQ",
        path: "/faq",
      },
    ],
  },
];
