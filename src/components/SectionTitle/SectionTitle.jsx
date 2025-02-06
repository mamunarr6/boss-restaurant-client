import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className=" md:w-3/12 mx-auto my-5">
      <h5 className="text-center text-[#D99904] mb-2">---{subHeading}---</h5>
      <h2 className="text-center text-4xl font-semibold border-y-4 py-4">
        {heading}
      </h2>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default SectionTitle;
