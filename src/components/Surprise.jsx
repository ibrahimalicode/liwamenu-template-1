const Surprise = () => {
  return (
    <section className="justify-between pl-20 w-full border-t border-b bg-stone-100 border-stone-900 max-md:pl-5 max-md:max-w-full surprise">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full min-w-max">
          <h2 className="flex flex-col grow justify-center self-stretch py-20 text-7xl font-bold text-black max-md:mt-3.5 max-md:text-4xl">
            <span>WE LOVE TO</span>
            <span className="mt-2.5">SURPRISE YOU</span>
          </h2>
        </div>
        <div className="flex flex-col ml-5 w-[52%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center items-start self-stretch px-16 py-16 max-md:px-5 max-md:mt-3.5 max-md:max-w-full">
            <div className="flex justify-center items-center p-4 ml-28 max-w-full rounded-full border-2 border-red-700 border-solid w-[211px] max-md:ml-2.5">
              <div className="flex overflow-hidden relative flex-col justify-center items-center px-9 py-9 w-full aspect-square max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/14a860f892537ec5f29bad4fdd992f0f2326309ae86840b4b43a61f79ac298d7?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9"
                  alt="Surprise background"
                  className="object-cover absolute inset-0 size-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d29285807a583d0ac9bc1627234bf6b60230cd4eb8ff3a57e840cfc2f1ba7757?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9"
                  alt="Surprise icon"
                  className="w-full aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/90ba95c8ecc8b085680f8905a440330a43e7f18aec80b2790908d3465c780866?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9"
            alt="Decorative"
            className="grow shrink-0 self-stretch max-w-full aspect-[0.89] w-[297px] max-md:mt-3.5"
          />
        </div>
      </div>
    </section>
  );
};

export default Surprise;
