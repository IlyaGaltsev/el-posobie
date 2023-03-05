import { FaBook, FaPhotoVideo, FaVideo, FaPencilAlt } from "react-icons/fa";
import {
  BOOK_ROUTE,
  CONSPECTS_ROUTE,
  PREZENTATIONS_ROUTE,
  VIDEO_ROUTE,
} from "../routes";

export const headerNav = [
  {
    key: BOOK_ROUTE,
    icon: <FaBook className="icon" />,
    label: "Учебник",
  },
  {
    key: VIDEO_ROUTE,
    icon: <FaVideo className="icon" />,
    label: "Видео",
  },
  {
    key: PREZENTATIONS_ROUTE,
    icon: <FaPhotoVideo className="icon" />,
    label: "Презентации",
  },
  {
    key: CONSPECTS_ROUTE,
    icon: <FaPencilAlt className="icon" />,
    label: "Конспекты",
  },
];
