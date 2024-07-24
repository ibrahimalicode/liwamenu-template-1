const Header = () => {
  return (
    <header className="flex justify-center items-center px-16 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center items-start py-6 max-w-full w-[1222px] max-md:pr-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/24296c96d7dbac38bae1a2166ed4efa624d0c83ba30aea6c007e0d800f31c780?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9"
          alt="Liwa Cafe logo"
          className="max-w-full aspect-[5] w-[126px]"
        />
      </div>
    </header>
  );
};

export default Header;
