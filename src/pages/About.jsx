import { aboutBanner } from "../assets/images";
import { PanoramicBanner } from "../components";
import { Introduction } from "../sections";

const About = () => {
  return (
    <main>
      <PanoramicBanner bgImg={aboutBanner} title={"About Us"} />
      <Introduction />
    </main>
  );
};

export default About;
