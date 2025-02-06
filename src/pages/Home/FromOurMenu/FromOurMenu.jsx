import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import fetearud from "../../../assets/home/featured.jpg";
import "./FromOurMenu.css";

const FromOurMenu = () => {
  return (
    <div className="background-img bg-cover my-5 bg-fixed">
      <div className="bg-slate-900 bg-opacity-40 w-full h-full pt-8 pb-12 text-white">
        <SectionTitle
          subHeading={"Check it out"}
          heading={"From Our Menu"}
        ></SectionTitle>
        <div className="md:flex justify-center items-center gap-5 md:gap-10 px-5 md:px-20 md:my-14 text-white">
          <div>
            <img src={fetearud} alt="" />
          </div>
          <div>
            <h5>March 20,2023</h5>
            <h4> WHERE CAN I GET SOME?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromOurMenu;
