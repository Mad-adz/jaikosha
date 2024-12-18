import { eventBanner2 } from "../assets/images";

const Events = () => {
  return (
    <main>
      <section
        className="grid h-screen w-full bg-cover bg-center bg-no-repeat]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${eventBanner2})`,
        }}
      >
        <div className="container mx-auto flex flex-col justify-center h-full px-8 text-center">
          <div className="my-auto text-center">
            <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white lg:!text-4xl !text-3xl">
              Get Ready for a Divine Experience!
            </h2>
            <p className="block antialiased font-sans text-lg leading-relaxed text-inherit mb-5 mt-4 mx-auto text-white w-full lg:max-w-3xl">
              We are thrilled to announce an upcoming spiritual event that
              promises to uplift, heal, and inspire your soul. Prepare to embark
              on a sacred journey filled with divine wisdom and spiritual
              awakening.
            </p>
            <p className="block antialiased font-sans text-lg leading-relaxed text-inherit mb-5 mt-4 mx-auto text-white w-full lg:max-w-3xl">
              Stay connected as we finalize the details of this life-changing
              experience.
            </p>
            <p className="block antialiased font-sans text-lg leading-relaxed text-inherit font-medium text-white mb-10">
              Sign up now to be the first to receive updates
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center max-w-md mx-auto">
              <div className="relative w-full min-w-[200px] h-10">
                <input
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-white focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !text-white border-white focus:border-white"
                  placeholder=" "
                />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:!text-white !text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">
                  Your Email
                </label>
              </div>
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-emerald-500 w-full md:max-w-fit"
                type="button"
                data-ripple-light="true"
              >
                notify me
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;
