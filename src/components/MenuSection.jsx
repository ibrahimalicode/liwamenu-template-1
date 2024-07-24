import MenuItem from "./MenuItem";

const MenuSection = ({ items }) => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
        {items.map((item, index) => (
          <div key={index} className={index > 0 ? "mt-6" : ""}>
            <MenuItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
