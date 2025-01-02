import { useLocation } from "react-router-dom";
import { resources } from "../constants";
import { useEffect, useState } from "react";
import { getResourceDetails } from "../utils/helpers";
import { PanoramicBanner } from "../components";

const ResourcePageTemplate = () => {
  const location = useLocation();
  const [currentResource, setCurrentResources] = useState({});

  useEffect(() => {
    const resource = getResourceDetails(resources, location);
    setCurrentResources(resource);
  }, [location]);

  console.log(currentResource);
  return (
    <main>
      <PanoramicBanner
        bgImg={currentResource?.details?.banner}
        title={currentResource?.details?.label}
      />
      <section className="bg-yellow-50 py-12">
        <div className="container">
          <h2 className="text-2xl font-bold text-emerald-600 px-4 mb-4">
            {currentResource?.title}
          </h2>
          <div className="px-4 text-md text-justify font-semibold indent-10 leading-normal text-red-500">
            {currentResource?.details?.paras.map((para, index) => (
              <p key={index} className="mb-5">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResourcePageTemplate;
