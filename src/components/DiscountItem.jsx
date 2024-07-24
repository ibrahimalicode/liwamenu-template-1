const DiscountItem = ({ discount, title, description, image }) => {
  return (
    <div className="grow justify-between w-full bg-slate-50 max-md:mt-6 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-between items-start pb-10 pl-8 font-semibold">
            <div className="flex flex-col justify-center pl-2.5 pt-4 pb-5 text-black">
              <div className="flex flex-col">
                <div className="flex gap-0.5 whitespace-nowrap">
                  <div className="text-4xl font-extrabold">-{discount}</div>
                  <div className="my-auto text-base">%</div>
                </div>
                <div className="pb-2.5 mt-2.5 text-xl tracking-tight font-bold">
                  {title}
                </div>
                <div className="mt-2.5 text-sm tracking-wide text-gray-500">
                  {description}
                </div>
              </div>
            </div>
            <button className="flex flex-col justify-center text-base bg-white bg-opacity-50 text-slate-800">
              <div className="px-9 py-6 bg-amber-300 max-md:px-5">
                Add to cart
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={image}
            alt={title}
            className="grow w-full aspect-[1.16]"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountItem;
