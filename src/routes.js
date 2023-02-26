import { BookScreen } from "./screens/BookScreen";
import { ConspectScreen } from "./screens/ConspectScreen";
import { PrezentationScreen } from "./screens/PrezentationScreen";
import { VideoScreen } from "./screens/VideoScreen";

export const BOOK_ROUTE = "/";
export const VIDEO_ROUTE = "/videos";
export const PREZENTATIONS_ROUTE = "/prezentations";
export const CONSPECTS_ROUTE = "/conspects";

export const routes = [
  {
    path: BOOK_ROUTE,
    Element: <BookScreen />,
  },
  {
    path: VIDEO_ROUTE,
    Element: <VideoScreen />,
  },
  {
    path: PREZENTATIONS_ROUTE,
    Element: <PrezentationScreen />,
  },
  {
    path: CONSPECTS_ROUTE,
    Element: <ConspectScreen />,
  },
];
