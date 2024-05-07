import Details from "../../components/Details";

const page = () => {
  const imgYoutubePremium = "/images/allSVG/youtubepremium.svg";
  const imgYoutubePremiumPlusMusic = "/images/allSVG/youtubemusic.svg";

  const monthPriceDictYoutubePremium = {
    12: ["799"],
    24: ["800"],
  };
  const monthPriceDictYoutubePremiumPlusMusicd = {
    12: ["550"],
    24: ["1299"],
  };

  return (
    <>
      <Details
        name={"Youtube Premium"}
        img={imgYoutubePremium}
        monthPriceDict={monthPriceDictYoutubePremium}
        id={"YP1"}
        isVpn={false}
        details={`1 Month: 130tk
                  2 Months: 260tk
                  6 Months: 1200tk
                  12 Months: 2000tk
                  ( Only gmail id Is needed to activate)
                  ( Old ID renew Possible ) `}
      />

      <Details
        name={"Youtube Premim + Music"}
        img={imgYoutubePremiumPlusMusic}
        monthPriceDict={monthPriceDictYoutubePremiumPlusMusicd}
        id={"YM!"}
        isVpn={false}
        details={`3 Months  420/-
                  6 Months   750/-
                  (New Gmail ID Needed) `}
      />
    </>
  );
};

export default page;
