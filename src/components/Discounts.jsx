import DiscountItem from "./DiscountItem";

const discountItems = [
  {
    discount: 50,
    title: "Discount for all* burgers!",
    description: "*Et modi itaque praesentium.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/81939e89274fede61367be05dcb138a9667ecee8ad2deedb10740d5863f75d47?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
  },
  {
    discount: 50,
    title: "Discount for all* burgers!",
    description: "*Et modi itaque praesentium.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/458acca8c9a84534f70c0bd537e3c8fddcfa9ad353d8d924808be9264eadeb31?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
  },
];

const Discounts = () => {
  return (
    <section className="flex flex-col pb-12 w-full bg-white max-md:max-w-full">
      <h2 className="px-16 py-16 w-full text-5xl font-bold text-black whitespace-nowrap bg-white max-md:px-5 max-md:max-w-full max-md:text-4xl text-center title_txt">
        Discounts
      </h2>
      <div className="flex-wrap content-center self-center w-full max-w-[1176px] max-md:max-w-full discount_txt">
        <div className="flex gap-5 max-md:flex-col">
          {discountItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
            >
              <DiscountItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discounts;
