import Details from "../../components/Details";

const page = () => {
  const img = "/images/allSVG/quillbot.svg";
  const monthPriceDict = {
    6: ["699"],
    12: ["999"],
  };

  return (
    <>
      <Details
        name={"Quillbot Premium"}
        img={img}
        monthPriceDict={monthPriceDict}
        id={"QB1"}
        isVpn={false}
        details={`6 months: 699/-
                  1 Year: 999/-`}
      />
    </>
  );
};

export default page;
