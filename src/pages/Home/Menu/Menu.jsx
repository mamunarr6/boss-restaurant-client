import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const Menu = () => {
  const [menus, setMenus] = useState(null);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data?.filter(
          (item) => item.category === "popular"
        );
        setMenus(popularItems);
      });
  }, []);
  return (
    <div className="my-8">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 items-center gap-8">
        {menus?.map((menu) => (
          <MenuItems key={menu._id} menu={menu}></MenuItems>
        ))}
      </div>
    </div>
  );
};

export default Menu;
