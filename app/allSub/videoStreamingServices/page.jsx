import Details from "../../components/Details";

const page = () => {
  const imgNetflix = "/images/allSVG/netflix.svg";
  const imgPrimeVideo = "/images/allSVG/primevideo.svg";
  const imgHboMax = "/images/allSVG/hbomax.svg";
  const imgDisneyPlus = "/images/allSVG/disneyplus.svg";
  const imgCrunchyRoll = "/images/allSVG/crunchyroll.svg";

  const monthPriceDictNetflix = {
    1: ["250"],
    2: ["599"],
    3: ["899"],
    6: ["1799"],
    12: ["3499"],
  };

  const monthPriceDictPrimeVideo = {
    1: ["99"],
    2: ["300"],
    6: ["599"],
    12: ["849"],
  };

  const monthPriceDictHboMax = {
    1: ["199"],
    3: ["499"],
    6: ["899"],
    12: ["1299"],
  };

  const monthPriceDictDisneyPlus = {
    1: ["199"],
    3: ["499"],
    6: ["899"],
    12: ["1299"],
  };

  const monthPriceDictCrunchyRoll = {
    1: ["129"],
    3: ["299"],
    6: ["599"],
    12: ["999"],
  };

  return (
    <>
      <Details
        name={"Netflix"}
        img={imgNetflix}
        monthPriceDict={monthPriceDictNetflix}
        id={"NF1"}
        isVpn={false}
        details={`1 Month: 250tk (Shared profile)
        2 Months: 599tk (Personal Profile)
        3 Months: 899tk (Personal Profile)
        6 Months: 1799tk (Personal Profile with Warranty)
        12 Months: 3499tk (Personal Profile with Warranty)
        🔅 Netflix Made By Turkey Gift Card,  Fully Official So You Won't face Any problem Durning subscription period 🔅`}
      />

      <Details
        name={"Prime Video"}
        img={imgPrimeVideo}
        monthPriceDict={monthPriceDictPrimeVideo}
        id={"PV1"}
        isVpn={true}
        details={`1 month: 99tk (1 Screen)
                  3 Months: 300tk (1 Profile)
                  6 Months: 599tk (1 Profile, 2 Devices)
                  12 Months: ₹849tk (1 Profile, 3 Device logins)`}
      />

      <Details
        name={"HBO Max"}
        img={imgHboMax}
        monthPriceDict={monthPriceDictHboMax}
        id={"HM1"}
        isVpn={true}
        details={`Your Profile Will be private
        you can login-to more than 2 device
        Must Need USA server to stream
        এই Site গুলোর একসেস BD তে ব্যান থাকায় আপনি Mobile-Data/Wifi  দিয়ে BD থেকে Streaming করতে পারবেন না।
        সমাধান হিসেবে আপনাকে যেকোনো VPN ইউজ করতে হবে,  VPN এ ‘USA- Server’ Select করে খুব সহজেই আপনি stream কর‍তে পারবেন।`}
      />

      <Details
        name={"Disney Plus"}
        img={imgDisneyPlus}
        monthPriceDict={monthPriceDictDisneyPlus}
        id={"DP1"}
        isVpn={true}
        details={`Your Profile Will be private
        you can login-to more than 2 device
        Must Need USA server to stream
        এই Site গুলোর একসেস BD তে ব্যান থাকায় আপনি Mobile-Data/Wifi  দিয়ে BD থেকে Streaming করতে পারবেন না।
        সমাধান হিসেবে আপনাকে যেকোনো VPN ইউজ করতে হবে,  VPN এ ‘USA- Server’ Select করে খুব সহজেই আপনি stream কর‍তে পারবেন।`}
      />

      <Details
        name={"Crunchyroll"}
        img={imgCrunchyRoll}
        monthPriceDict={monthPriceDictCrunchyRoll}
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
