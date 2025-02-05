const Menu = () => {
  return (
    <div className="my-5">
      <h6 className="text-[#D99904] text-center">---Check it out---</h6>
      <div className="divider px-[28vw]"></div>
      <h3 className="text-2xl text-center">FROM OUR MENU</h3>
      <div className="divider px-[28vw]"></div>
      <div className="grid grid-cols-2 items-center">
        <div className="flex justify-between gap-5">
          <div className="w-16 h-16 bg-gray-400 rounded-tr-full rounded-b-full"></div>
          <div className="flex gap-2 pr-5">
            <div>
              <h4>ROAST DUCK BREAST ------------------</h4>
              <p>
                Roasted duck breast (served pink) with gratin potato and a
                griottine cherry sauce
              </p>
            </div>
            <p className="text-[#BB8506]">$14.5</p>
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="w-16 h-16 bg-gray-400 rounded-bl-full rounded-r-full"></div>
          <div className="flex gap-2 pr-5">
            <div>
              <h4>ROAST DUCK BREAST ------------------</h4>
              <p>
                Roasted duck breast (served pink) with gratin potato and a
                griottine cherry sauce
              </p>
            </div>
            <p className="text-[#BB8506]">$14.5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
