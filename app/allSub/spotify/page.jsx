import Details from "../../components/Details";

const page = () => {
  const img = "/images/allSVG/spotify.svg";
  const monthPriceDict = {
    1: ["150"],
    2: ["499"],
    6: ["799"],
    12: ["1399"],
  };

  return (
    <>
      <Details
        name={"Spotify"}
        img={img}
        monthPriceDict={monthPriceDict}
        id={"SP1"}
        isVpn={false}
        details={`1 Month: 150tk (Personal Mail)
                  3 Months: 499tk (Personal Mail)
                  6 Months: 799tk (Personal Mail)
                  12 Months: 1399tk (Personal Mail)`}
      />
    </>
  );
};

export default page;
