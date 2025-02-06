import bgChef from "../../../assets/home/chef-service.jpg";

const Boss = () => {
  return (
    <div
      className="bg-cover bg-center bg-fixed h-[70vh] flex justify-center items-center my-5"
      style={{ backgroundImage: `url(${bgChef})` }}
    >
      <div className="w-3/4 bg-slate-100 p-20 rounded">
        <h3 className="uppercase text-2xl font-bold text-center">Boss</h3>
        <p className="text-center text-gray-600 mt-2">
          Monotonectally aggregate worldwide vortals rather than pandemic
          information. Dynamically predominate multidisciplinary core
          competencies whereas goal-oriented synergy. Globally mesh wireless
          action items after bleeding-edge e-tailers. Progressively disseminate
          mission-critical networks through one-to-one partnerships. Seamlessly
          leverage other&apos;s diverse functionalities and intermandated
          e-commerce.Seamlessly parallel task backend experiences before
          intermandated e-markets. Phosfluorescently utilize cost.
        </p>
      </div>
    </div>
  );
};

export default Boss;
