import Details from "../../components/Details";

const page = () => {
  const img = "/images/allSVG/netflix.svg";
  const monthPriceDict = {
    1: ["250"],
    2: ["599"],
    3: ["899"],
    6: ["1799"],
    12: ["3499"],
  };

  return (
    <>
      <Details
        name={"Netflix"}
        img={img}
        monthPriceDict={monthPriceDict}
        id={"NF1"}
        isVpn={false}
        details={`1 Month: 250tk (Shared profile)
        2 Months: 599tk (Personal Profile)
        3 Months: 899tk (Personal Profile)
        6 Months: 1799tk (Personal Profile with Warranty)
        12 Months: 3499tk (Personal Profile with Warranty)
        🔅 Netflix Made By Turkey Gift Card,  Fully Official So You Won't face Any problem Durning subscription period 🔅`}
      />
    </>
  );
};

export default page;
