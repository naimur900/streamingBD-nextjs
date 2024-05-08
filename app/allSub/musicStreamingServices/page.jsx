import Details from "../../components/Details";
import TopLinks from "../../components/TopLinks";

const page = () => {
  const imgYoutubePremium = "/images/allSVG/youtubepremium.svg";
  const imgYoutubePremiumPlusMusic = "/images/allSVG/youtubemusic.svg";
  const imgSpotify = "/images/allSVG/spotify.svg";
  const imgAppleMusic = "/images/allSVG/applemusic.svg";
  const imgAppleMusic2 = "/images/allSVG/applemusic2.svg";

  const svgs = {
    SP1: { img: imgSpotify },
    YP1: { img: imgYoutubePremium },
    YM1: { img: imgYoutubePremiumPlusMusic },
    AM1: { img: imgAppleMusic2 },
  };

  const monthPriceDictSpotify = {
    1: ["150"],
    2: ["499"],
    6: ["799"],
    12: ["1399"],
  };

  const monthPriceDictYoutubePremium = {
    12: ["799"],
    24: ["800"],
  };

  const monthPriceDictYoutubePremiumPlusMusicd = {
    12: ["550"],
    24: ["1299"],
  };

  const monthPriceDictAppleMusic = {
    2: ["449"],
    6: ["1349"],
  };

  return (
    <>
      <TopLinks svgs={svgs} page={"musicStreamingServices"} />

      <Details
        name={"Spotify"}
        img={imgSpotify}
        monthPriceDict={monthPriceDictSpotify}
        id={"SP1"}
        isVpn={false}
        details={`1 Month: 150tk (Personal Mail)
                  3 Months: 499tk (Personal Mail)
                  6 Months: 799tk (Personal Mail)
                  12 Months: 1399tk (Personal Mail)`}
      />

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
        id={"YM1"}
        isVpn={false}
        details={`3 Months  420/-
                  6 Months   750/-
                  (New Gmail ID Needed) `}
      />

      <Details
        name={"Apple Music"}
        img={imgAppleMusic}
        monthPriceDict={monthPriceDictAppleMusic}
        id={"AM1"}
        isVpn={false}
        details={`2 Months  449/-
                  6 Months  1349/-
                { Redeem Code }`}
      />
    </>
  );
};

export default page;
