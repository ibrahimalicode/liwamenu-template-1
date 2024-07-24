const Footer = () => {
  return (
    <footer className="flex justify-center items-center px-2.5 w-full text-base bg-neutral-100 text-neutral-400 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center py-8 max-w-full w-[263px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/759a8327e8f0c2b2725a68614f884bf35530ba5fb7c4f4e789c3d2f41b7423be?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9"
          alt="Liwa Cafe logo"
          className="self-center max-w-full aspect-[5] w-[116px]"
        />
        <div className="mt-9">© 2021 Liwasoft All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
