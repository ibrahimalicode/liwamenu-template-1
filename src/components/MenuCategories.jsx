const categories = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a019811743b63c731e7f47f2f934e1942e72270d60da857d39ce9b1084cee9e1?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
    name: "LUNCH",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/896f22f6caa54279bd726b328f00067f04c5318e1066101fa06db6ff1fe89847?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
    name: "DINNER",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1c3d8a3f2ca0a48ee4d3fcd1104d8a9806598e9b401a8337bcc7b3f666797ad?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
    name: "BREAKFAST",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d52b188d22dbd8b14ddc1f6b296bc0c94345d59e8ef266ab1e3a26f02e59fad7?apiKey=1f4fb250339844f88428d2cbf4e019e9&&apiKey=1f4fb250339844f88428d2cbf4e019e9",
    name: "DESSERT",
  },
];

const MenuCategories = () => {
  return (
    <nav className="flex justify-center items-center p-2.5 py-5 w-full text-base font-semibold whitespace-nowrap bg-white text-stone-500 max-md:px-5 max-md:max-w-full category_btns">
      <div className="flex gap-5 justify-between max-w-full w-[453px] max-md:flex-wrap">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col text-stone-500">
            <img
              loading="lazy"
              src={category.icon}
              alt={`${category.name} icon`}
              className="self-center aspect-square w-[26px]"
            />
            <div className="mt-3.5">{category.name}</div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default MenuCategories;
