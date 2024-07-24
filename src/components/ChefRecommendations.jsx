import MenuSection from "./MenuSection";

const recommendedItems = [
  [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/336f847fc8c32843e6df4a48381c440d730554a1e2dc78aab468ee1e9ff3b768?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
      title: "Lunch Complete",
      description: "There is a rich diversity in food.",
      price: 20,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/afbd1470c6c9dbb532f7fce50bef9397b93517972f0cb9085c962a2ebb52d6dc?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
      title: "Crepe Complete",
      description: "There is a rich diversity in food.",
      price: 20,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3acfeaf8ca3371c0d56fe338ff59809540ea251e967bf4fb14c661f674c3baee?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
      title: "Vegetarian Lunch",
      description: "There is a rich diversity in food.",
      price: 20,
    },
  ],
  [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5ee8ae8510f6fb167659fa5040a5b8744347a0409f5314270b58b8edf5d27daa?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
      title: "Eggs Benedict",
      description: "There is a rich diversity in food.",
      price: 20,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/55cbd35322d44d176e802061a66d60225aa124589ca969608ea0c0833208aae7?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
      title: "English Lunch",
      description: "There is a rich diversity in food.",
      price: 20,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/04ae1ab8dc6915149096c5d0b15630618e789031fa459b9402284e0045e7c5d4?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
      title: "Barrel's Lunch",
      description: "There is a rich diversity in food.",
      price: 20,
    },
  ],
];

const ChefRecommendations = () => {
  return (
    <section className="flex flex-col pb-3.5 w-full bg-white max-md:max-w-full">
      <h2 className="px-16 py-16 w-full text-6xl font-bold text-black bg-white max-md:px-5 max-md:max-w-full max-md:text-4xl text-center">
        Chef Recomendations
      </h2>
      <div className="flex-wrap content-center self-center w-full max-w-[1184px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {recommendedItems.map((section, index) => (
            <MenuSection key={index} items={section} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefRecommendations;
