import { lazy } from "react";

export const About = lazy(() => import("./About"));
export const Contact = lazy(() => import("./Contact"));
export const Donate = lazy(() => import("./Donate"));
export const Events = lazy(() => import("./Events"));
export const Home = lazy(() => import("./Home"));
export const Initiatives = lazy(() => import("./Initiatives"));
export const Workshops = lazy(() => import("./Workshops"));
export const OnlineWS = lazy(() => import("./Workshops"));
export const OfflineWS = lazy(() => import("./Workshops"));
export const YendhraKovil = lazy(() => import("./YendhraKovil"));

export const MeditationPractices = lazy(() =>
  import("./resources/MeditationPractices")
);
export const SuperiorYoga = lazy(() => import("./resources/SuperiorYoga"));
export const AudioVideoSermons = lazy(() =>
  import("./resources/AudioVideoSermons")
);
export const SpritualDevices = lazy(() =>
  import("./resources/SpritualDevices")
);
export const ResourcePageTemplate = lazy(() =>
  import("./ResourcePageTemplate")
);

export const NotFound = lazy(() => import("./NotFound"));
