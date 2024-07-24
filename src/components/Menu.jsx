import MenuSection from "./MenuSection";

const menuItems = [
  [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4e44fea3200b0a4cc2272de88c08a0d6633d1b0cc864aa73ee5589844be9f7c1?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
      title: "Lunch Complete",
      description: "There is a rich diversity in food.",
      price: 20,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8c940dbf2e61d88e8ad8d45333d6aca73d3354dc5368e8fdeb91550e88893e80?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
      title: "Crepe Complete",
      description: "There is a rich diversity in food.",
      price: 20,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7ea3938722578f44d25a3ce57c37e51f09a83c9939108c07b71763c535e57a42?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
      title: "Vegetarian Lunch",
      description: "There is a rich diversity in food.",
      price: 20,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e47864562c733bb28378d7fe8a87f601d4cdf9b8dd9000b530043d777fff9b1b?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
      title: "Crepe Complete",
      description: "There is a rich diversity in food.",
      price: 20,
    },
  ],
  [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1a5a3836fc739a65c71e33ec7bfb5a4d3a92c958b20cb68973d5617bd1444e53?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
      title: "Eggs Benedict",
      description: "There is a rich diversity in food.",
      price: 20,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/528906e2b8a3332ed14d66a6172da077d27cdcb329ab1f89da108effd9ea15ac?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
      title: "English Lunch",
      description: "There is a rich diversity in food.",
      price: 20,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/52d999e01b502f8648bb73b70f93d81c536e3843e0dd14f7b6c8e0d715aaf0f6?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
      title: "Barrel's Lunch",
      description: "There is a rich diversity in food.",
      price: 20,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/00b692e083d880181cec47f560c5140c38bef50d9c558e874e661faed50e1748?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
      title: "Vegetarian Lunch",
      description: "There is a rich diversity in food.",
      price: 20,
    },
  ],
];

const Menu = () => {
  return (
    <section className="flex flex-col pb-16 w-full bg-white max-md:max-w-full">
      <div className="flex-wrap content-center self-center w-full max-w-[1184px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {menuItems.map((section, index) => (
            <MenuSection key={index} items={section} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
