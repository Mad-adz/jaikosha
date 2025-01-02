import { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { RootLayout } from "./layouts";
import {
  About,
  AudioVideoSermons,
  Contact,
  Donate,
  Events,
  Home,
  Initiatives,
  MeditationPractices,
  NotFound,
  SpritualDevices,
  SuperiorYoga,
  Workshops,
  YendhraKovil,
} from "./pages";
import Loader from "./pages/Loader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="initiatives" element={<Initiatives />} />
        <Route path="events" element={<Events />} />
        <Route path="online" element={<Workshops />} />
        <Route path="offline" element={<Workshops />} />
        <Route path="yendhrakovil" element={<YendhraKovil />} />
        <Route path="contact" element={<Contact />} />
        <Route path="donate" element={<Donate />} />
        <Route path="meditation-practices" element={<MeditationPractices />} />
        <Route path="superior-yoga" element={<SuperiorYoga />} />
        <Route path="audio-video-sermons" element={<AudioVideoSermons />} />
        <Route path="spiritual-devices" element={<SpritualDevices />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </>
  )
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
