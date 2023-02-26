import { FaBook, FaPhotoVideo, FaVideo, FaPencilAlt } from "react-icons/fa";
import {
  BOOK_ROUTE,
  CONSPECTS_ROUTE,
  PREZENTATIONS_ROUTE,
  VIDEO_ROUTE,
} from "../routes";

export const headerNav = [
  {
    path: BOOK_ROUTE,
    icon: <FaBook className="icon" />,
    title: "Учебник",
  },
  {
    path: VIDEO_ROUTE,
    icon: <FaVideo className="icon" />,
    title: "Видео",
  },
  {
    path: PREZENTATIONS_ROUTE,
    icon: <FaPhotoVideo className="icon" />,
    title: "Презентации",
  },
  {
    path: CONSPECTS_ROUTE,
    icon: <FaPencilAlt className="icon" />,
    title: "Конспекты",
  },
];
