const Hero = () => {
  return (
    <section
      className="flex overflow-hidden relative flex-col px-16 pt-28 pb-24 w-full text-7xl text-white min-h-[313px] max-md:px-5 max-md:max-w-full max-md:text-4xl mb-2"
      style={{
        backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets/TEMP/604963f51823f386afdc9a23b0a540ced0227c058ca654ec368b1e77933c7cca?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9")`,
      }}
    >
      <h1 className="text-white text-center title_txt">Liwa Cafe</h1>
    </section>
  );
};

export default Hero;
