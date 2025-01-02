import { yendhrakovilBanner } from "../assets/images";
import { PanoramicBanner } from "../components";

const YendhraKovil = () => {
  return (
    <main>
      <PanoramicBanner
        bgImg={yendhrakovilBanner}
        title={"Yendhra Thirukkovil"}
      />
    </main>
  );
};

export default YendhraKovil;
