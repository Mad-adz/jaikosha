import {
  Events,
  Hero,
  Newsletter,
  QuotesMarque,
  Resources,
  Testimonials,
} from "../sections";

const Home = () => {
  return (
    <div>
      <Hero />
      <QuotesMarque />
      <Resources />
      <Events />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
