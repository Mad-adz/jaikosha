import { workshopBanner } from "../assets/images";
import { PanoramicBanner } from "../components";

const Workshops = () => {
  return (
    <main>
      <PanoramicBanner bgImg={workshopBanner} title={"Workshops"} />
    </main>
  );
};

export default Workshops;
