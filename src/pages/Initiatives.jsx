import { useState } from "react";

const Initiatives = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  // Images grouped by tab
  const images = {
    all: [
      "https://sreeagamashram.com/wp-content/uploads/2022/04/IMG_8279photo-full-scaled.jpg",
      "https://sreeagamashram.com/wp-content/uploads/2022/04/2014-02-19-3944-Copy-scaled.jpg",
      "https://sreeagamashram.com/wp-content/uploads/2022/04/DSC02782-scaled.jpg",
      "https://sreeagamashram.com/wp-content/uploads/2022/04/IMG_20200204_083009.jpg",
      "https://sreeagamashram.com/wp-content/uploads/2022/04/IMG_20200912_071741.jpg",
      "https://sreeagamashram.com/wp-content/uploads/2022/04/IMG_20200913_094358.jpg",
      "https://img.freepik.com/free-photo/person-practicing-yoga-meditation-nature-sunset-sunrise_23-2150838387.jpg",
      "https://img.freepik.com/free-photo/wellness-practices-self-care-world-health-day_23-2151256671.jpg",
      "https://img.freepik.com/free-photo/wellness-practices-self-care-world-health-day_23-2151256726.jpg",
    ],
    ashram: [
      "https://sreeagamashram.com/wp-content/uploads/2022/04/IMG_8279photo-full-scaled.jpg",
      "https://sreeagamashram.com/wp-content/uploads/2022/04/2014-02-19-3944-Copy-scaled.jpg",
      "https://sreeagamashram.com/wp-content/uploads/2022/04/DSC02782-scaled.jpg",
    ],
    pooja: [
      "https://sreeagamashram.com/wp-content/uploads/2022/04/IMG_20200204_083009.jpg",
      "https://sreeagamashram.com/wp-content/uploads/2022/04/IMG_20200912_071741.jpg",
      "https://sreeagamashram.com/wp-content/uploads/2022/04/IMG_20200913_094358.jpg",
    ],
    yoga: [
      "https://img.freepik.com/free-photo/person-practicing-yoga-meditation-nature-sunset-sunrise_23-2150838387.jpg",
      "https://img.freepik.com/free-photo/wellness-practices-self-care-world-health-day_23-2151256671.jpg",
      "https://img.freepik.com/free-photo/wellness-practices-self-care-world-health-day_23-2151256726.jpg",
    ],
  };
  return (
    <div className="mt-[6rem] py-8">
      <div className="container">
        {/* Tab Headers */}
        <div className="relative right-0 mb-5 max-w-md mx-auto">
          <ul
            className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100"
            role="list"
          >
            {["all", "ashram", "pooja", "yoga"].map((tab) => (
              <li key={tab} className="z-30 flex-auto text-center">
                <button
                  className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${
                    activeTab === tab
                      ? "text-blue-700 font-bold"
                      : "text-slate-700"
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  <span className="ml-1 capitalize">
                    {tab === "all"
                      ? "All"
                      : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tab Content */}
        <div className="">
          <div id={activeTab} role="tabpanel">
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max">
              {images[activeTab].map((image, index) => (
                <div key={index}>
                  <img
                    className="w-full h-60 max-w-full rounded-lg object-cover"
                    src={image}
                    alt={`image-${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initiatives;
