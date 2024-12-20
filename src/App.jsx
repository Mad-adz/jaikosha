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
  Contact,
  Donate,
  Events,
  Home,
  Initiatives,
  NotFound,
  Workshops,
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
        <Route path="workshops" element={<Workshops />} />
        <Route path="contact" element={<Contact />} />
        <Route path="donate" element={<Donate />} />
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
