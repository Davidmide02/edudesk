const TakeSection = () => {
  return (
    <div className="mx-auto max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
        <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Take Control Of Your School's Finance Today
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
          Join Hundreds Of Schools Already Benefiting From Our Financial
          Management Platform
        </p>
        <div className="flex flex-col items-center">
          <button className="text-[#0a2b47] hover:bg-[#d1e0ef] mt-4 bg-white font-semibold py-2 px-6 rounded-full transition-colors duration-300">
            Get started for free now →
          </button>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient
              r={1}
              cx={0}
              cy={0}
              id="759c1415-0410-454c-8f7c-9a820de03641"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default TakeSection;
