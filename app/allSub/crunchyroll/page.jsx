import Details from "../../components/Details";

const page = () => {
  const img = "/images/allSVG/crunchyroll.svg";
  const monthPriceDict = {
    1: ["129"],
    3: ["299"],
    6: ["599"],
    12: ["999"],
  };

  return (
    <>
      <Details
        name={"Crunchyroll"}
        img={img}
        monthPriceDict={monthPriceDict}
        id={"CR1"}
        isVpn={false}
        details={`1 Month: ₹129
        3 Months: ₹299
        6 Months: ₹599
        12 Months: ₹999
        [Best OTT Platform For Anime Lover]`}
      />
    </>
  );
};

export default page;
