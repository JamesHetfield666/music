import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoRadio } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

const sideBar = [
  {
    id: 1,
    label: "HOME",
    path: "/",
    icon: AiFillHome,
  },
  {
    id: 2,
    label: "BROWSE",
    path: "/page1",
    icon: FiSearch,
  },
  {
    id: 3,
    label: "RADIO",
    path: "/page2",
    icon: IoRadio,
  },
  {
    id: 4,
    groupName: "library",
    heading: "YOUR LIBRARY",
    children: [
      {
        id: 5,
        label: "RECENTLY PLAYED",
        path: "/",
        icon: FiClock,
      },
      {
        id: 6,
        label: "FAVORITE SONGS",
        path: "/",
        icon: MdOutlineFavoriteBorder,
      },
      {
        id: 7,
        label: "ARTISTS",
        path: "/",
        icon: BiUser,
      },
    ],
  },
  {
    id: 8,
    groupName: "playlist",
    heading: "PLAYLIST",
    icon: AiOutlinePlus,
    children: [
      {
        id: 9,
        label: "RECENTLY PLAYED",
        path: "/",
      },
      {
        id: 10,
        label: "FAVORITE SONGS",
        path: "/",
      },
      {
        id: 11,
        label: "ARTISTS",
        path: "/",
      },
    ],
  },
];

export default sideBar;
