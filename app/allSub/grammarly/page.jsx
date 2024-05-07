import Details from "../../components/Details";

const page = () => {
  const img = "/images/allSVG/grammarly.svg";
  const monthPriceDict = {
    3: ["399"],
    6: ["699"],
    12: ["999"],
  };

  return (
    <>
      <Details
        name={"Grammarly Premium"}
        img={img}
        monthPriceDict={monthPriceDict}
        id={"GP1"}
        isVpn={false}
        details={`3 Months: 399/-
        6 months profile: 699/-
        1 year Profile: 999/-`}
      />
    </>
  );
};

export default page;
