import Details from "../../components/Details";

const page = () => {
  const img = "/images/allSVG/primevideo.svg";
  const monthPriceDict = {
    1: ["99"],
    2: ["300"],
    6: ["599"],
    12: ["849"],
  };

  return (
    <>
      <Details
        name={"Prime Video"}
        img={img}
        monthPriceDict={monthPriceDict}
        id={"PV1"}
        isVpn={false}
        details={`1 month: 99tk (1 Screen)
                  3 Months: 300tk (1 Profile)
                  6 Months: 599tk (1 Profile, 2 Devices)
                  12 Months: ₹849tk (1 Profile, 3 Device logins)`}
      />
    </>
  );
};

export default page;
