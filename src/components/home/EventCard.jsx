import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const EventCard = ({ title, datetime, location, url }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative bg-white backdrop-blur-xl rounded-2xl p-8 border">
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-pink-500 rounded-tl-2xl"></div>
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-yellow-500 rounded-tr-2xl"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-yellow-500 rounded-bl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-pink-500 rounded-br-2xl"></div>

        <div className="relative">
          <div className="absolute -top-12 left-0 px-6 py-2 bg-gradient-to-b from-teal-600 via-emerald-500 to-green-400 rounded-full text-sm text-white">
            {datetime}
          </div>

          <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>

          <h3 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500">
            {location}
          </h3>

          <p className="text-lg text-zinc-700 mb-8">
            Your card description goes here. Add any content you want to
            display.
          </p>

          {/* <div className="flex flex-wrap gap-3 mb-8 text-gray-300">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-yellow-500/10 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-yellow-500/40 border border-gray-700 hover:border-yellow-500 hover:scale-110 transition-transform cursor-pointer">
              Tag 1
            </span>
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-yellow-500/10 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-yellow-500/40 border border-gray-700 hover:border-yellow-500 hover:scale-110 transition-transform cursor-pointer">
              Tag 2
            </span>
          </div> */}

          <Link
            to={url}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 hover:opacity-90 transition-opacity text-white"
          >
            Register Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;