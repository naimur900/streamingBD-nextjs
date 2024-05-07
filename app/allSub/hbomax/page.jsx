import Details from "../../components/Details";

const page = () => {
  const img = "/images/allSVG/hbomax.svg";
  const monthPriceDict = {
    1: ["199"],
    3: ["499"],
    6: ["899"],
    12: ["1299"],
  };

  return (
    <>
      <Details
        name={"HBO Max"}
        img={img}
        monthPriceDict={monthPriceDict}
        id={"HM1"}
        isVpn={true}
        details={`Your Profile Will be private
        you can login-to more than 2 device
        Must Need USA server to stream
        এই Site গুলোর একসেস BD তে ব্যান থাকায় আপনি Mobile-Data/Wifi  দিয়ে BD থেকে Streaming করতে পারবেন না।
        সমাধান হিসেবে আপনাকে যেকোনো VPN ইউজ করতে হবে,  VPN এ ‘USA- Server’ Select করে খুব সহজেই আপনি stream কর‍তে পারবেন।`}
      />
    </>
  );
};

export default page;
