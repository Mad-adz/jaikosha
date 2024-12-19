import { contactBanner } from "../assets/images";
import { PanoramicBanner } from "../components";
import { ContactForm } from "../sections";

const Contact = () => {
  return (
    <main>
      <PanoramicBanner bgImg={contactBanner} title={"Contact Us"} />
      <ContactForm />
    </main>
  );
};

export default Contact;
