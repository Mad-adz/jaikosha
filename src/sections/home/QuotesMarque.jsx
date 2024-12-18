const QuotesMarquee = () => {
  const quotes = [
    "Peace comes from within. Do not seek it without. - Buddha",
    "The quieter you become, the more you can hear. - Rumi",
    "This too shall pass. - Persian Proverb",
    "Act with purpose, not to impress. - Marcus Aurelius",
    "Happiness is a journey, not a destination. - Buddha",
    "The mind is everything. What you think, you become. - Buddha",
    "Life is not measured by the breaths we take, but by the moments that take our breath away.",
    "Let go of what you can’t control. - Anonymous",
    "Do not dwell in the past. - Buddha",
    "Peace begins with a smile. - Mother Teresa",
  ];

  return (
    <section className="py-8 bg-yellow-50">
      <div className="container">
        <h3 className="text-3xl font-bold mb-2">Daily Dose of Inspiration</h3>
      </div>
      <div className="relative flex overflow-x-hidden">
        {/* First Marquee */}
        <div className="py-8 animate-marquee whitespace-nowrap flex items-center">
          {quotes.slice(0, quotes.length / 2).map((quote, index) => (
            <span
              key={index}
              className="w-80 text-wrap inline-flex text-xl mx-4 px-4 py-8 border-2 border-orange-200 rounded-md h-auto min-h-[200px] text-center bg-orange-100"
            >
              {quote}
            </span>
          ))}
        </div>

        {/* Second Marquee */}
        <div className="absolute top-0 py-8 animate-marquee2 whitespace-nowrap flex items-center">
          {quotes.slice(quotes.length / 2).map((quote, index) => (
            <span
              key={index}
              className="w-80 text-wrap inline-flex text-xl mx-4 px-4 py-8 border-2 border-orange-200 rounded-md h-auto min-h-[200px] text-center bg-orange-100"
            >
              {quote}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesMarquee;

// const QuotesMarque = () => {
//   return (
//     <section className="py-8 bg-yellow-50">
//       <div className="container">
//         <h3 className="text-3xl font-bold mb-2">Daily Dose of Inspiration</h3>
//       </div>
//       <div className="relative flex overflow-x-hidden">
//         <div className="py-8 animate-marquee whitespace-nowrap flex items-center">
//           <span className="w-80 text-wrap inline-flex text-xl mx-4 px-4 py-8 border-2 border-orange-200 rounded-md h-auto min-h-[200px] text-center bg-orange-100">
//             Peace comes from within. Do not seek it without. - Buddha
//           </span>
//           <span className="w-80 text-wrap inline-flex text-xl mx-4 px-4 py-8 border-2 border-orange-200 rounded-md h-auto min-h-[200px] text-center bg-orange-100">
//             The quieter you become, the more you can hear. - Rumi
//           </span>
//           <span className="w-80 text-wrap inline-flex text-xl mx-4 px-4 py-8 border-2 border-orange-200 rounded-md h-auto min-h-[200px] text-center bg-orange-100">
//             This too shall pass. - Persian Proverb
//           </span>
//           <span className="w-80 text-wrap inline-flex text-xl mx-4 px-4 py-8 border-2 border-orange-200 rounded-md h-auto min-h-[200px] text-center bg-orange-100">
//             Act with purpose, not to impress. - Marcus Aurelius
//           </span>
//           <span className="w-80 text-wrap inline-flex text-xl mx-4 px-4 py-8 border-2 border-orange-200 rounded-md h-auto min-h-[200px] text-center bg-orange-100">
//             Happiness is a journey, not a destination. - Buddha
//           </span>
//         </div>

//         <div className="absolute top-0 py-8 animate-marquee2 whitespace-nowrap flex items-center">
//           <span className="w-80 text-wrap inline-flex text-xl mx-4 px-4 py-8 border-2 border-orange-200 rounded-md h-auto min-h-[200px] text-center bg-orange-100">
//             The mind is everything. What you think, you become. - Buddha
//           </span>
//           <span className="w-80 text-wrap inline-flex text-xl mx-4 px-4 py-8 border-2 border-orange-200 rounded-md h-auto min-h-[200px] text-center bg-orange-100">
//             Life is not measured by the breaths we take, but by the moments that take our breath away.
//           </span>
//           <span className="w-80 text-wrap inline-flex text-xl mx-4 px-4 py-8 border-2 border-orange-200 rounded-md h-auto min-h-[200px] text-center bg-orange-100">
//             Let go of what you can&apos;t control. - Anonymous
//           </span>
//           <span className="w-80 text-wrap inline-flex text-xl mx-4 px-4 py-8 border-2 border-orange-200 rounded-md h-auto min-h-[200px] text-center bg-orange-100">
//             Do not dwell in the past. - Buddha
//           </span>
//           <span className="w-80 text-wrap inline-flex text-xl mx-4 px-4 py-8 border-2 border-orange-200 rounded-md h-auto min-h-[200px] text-center bg-orange-100">
//             Peace begins with a smile. - Mother Teresa
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default QuotesMarque;
