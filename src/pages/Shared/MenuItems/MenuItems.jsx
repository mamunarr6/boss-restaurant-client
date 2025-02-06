import PropTypes from "prop-types";

const MenuItems = ({ menu }) => {
  const { name, image, recipe, price } = menu;
  console.log(menu);
  return (
    <div className="flex justify-between gap-4">
      <img
        className="w-28 h-24 bg-gray-400 rounded-tr-full rounded-b-full"
        src={image}
        alt=""
      />
      <div className="flex gap-2 pr-5">
        <div>
          <h4 className="text-xl">{name}------------------</h4>
          <p className="text-base">{recipe}</p>
        </div>
        <p className="text-[#BB8506]">${price}</p>
      </div>
    </div>
  );
};

MenuItems.propTypes = {
  menu: PropTypes.any,
};

export default MenuItems;
