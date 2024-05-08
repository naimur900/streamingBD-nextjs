import Details from "../../components/Details";
import TopLinks from "../../components/TopLinks";

const page = () => {
  const imgNord = "/images/allSVG/nordvpn.svg";
  const imgSurfshark = "/images/allSVG/surfsharkvpn.svg";
  const imgWindscribe = "/images/allSVG/windscribevpn.svg";

  const svgs = {
    NV1: { img: imgNord },
    SS1: { img: imgSurfshark },
    WV1: { img: imgWindscribe },
  };

  const monthPriceDictSurfshark = {
    12: ["799"],
    24: ["800"],
  };
  const monthPriceDictNord = {
    12: ["550"],
    24: ["1299"],
  };
  const monthPriceDictWindscribe = {
    12: ["800"],
    36: ["1299"],
  };

  return (
    <>
      <TopLinks svgs={svgs} page={"vpnServices"} />

      <Details
        name={"Nord VPN"}
        img={imgNord}
        monthPriceDict={monthPriceDictNord}
        id={"NV1"}
        isVpn={false}
        details={`12 months: 550 Taka (2 Device)
                  24 months All access unlocked: 800/- (2 device)`}
      />

      <Details
        name={"Surfshark VPN"}
        img={imgSurfshark}
        monthPriceDict={monthPriceDictSurfshark}
        id={"SS1"}
        isVpn={false}
        details={`12 months: 800/- (2 device)
                  36 months: 1500/- (3 device)
                  (Vpn Created With Gift Card 100% official account)`}
      />
      <Details
        name={"Windscribe VPN"}
        img={imgWindscribe}
        monthPriceDict={monthPriceDictWindscribe}
        id={"WV1"}
        isVpn={false}
        details={`12 Months Package: 799/-
        24 Months Package: 1299/-`}
      />
    </>
  );
};

export default page;
