const MenuItem = ({ image, title, description, price }) => {
  return (
    <div className="bg-white shadow max-md:max-w-full menu_item">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={image}
            alt={title}
            className="grow shrink-0 max-w-full aspect-[1.39] w-[187px] max-md:mt-10"
          />
        </div>
        <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-2.5 items-start pt-6 max-md:mt-10">
            <div className="flex flex-col flex-1 px-5 text-black">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm">{description}</p>
              <div className="mt-3 text-xl font-semibold text-[#997241]">
                ${price}
              </div>
            </div>
            <div className="flex flex-col justify-end pt-16 pr-2.5 pb-2.5 text-xs font-bold text-slate-800">
              <button className="px-3 py-3 bg-amber-300">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
