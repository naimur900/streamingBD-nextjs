import Details from "../../components/Details";

const page = () => {
  const img = "../images/hbomax2.jpg";

  return (
    <>
      <Details
        name={"HBOMax-1month"}
        img={img}
        price={"199"}
        id={"HM1"}
        secondScreenOption={false}
        details={`  Your Profile Will be private
                    you can login-to more than 2 device
                    Must Need USA server to stream`}
      />
      <Details
        name={"HBOMax-3month"}
        img={img}
        price={"499"}
        id={"HM2"}
        secondScreenOption={false}
        details={`  Your Profile Will be private
                    you can login-to more than 2 device
                    Must Need USA server to stream
                    এই Site গুলোর একসেস BD তে ব্যান থাকায় আপনি Mobile-Data/Wifi  দিয়ে BD থেকে Streaming করতে পারবেন না।
                    সমাধান হিসেবে আপনাকে যেকোনো VPN ইউজ করতে হবে,  VPN এ ‘USA- Server’ Select করে খুব সহজেই আপনি stream কর‍তে পারবেন।`}
      />
      <Details
        name={"HBOMax-6month"}
        img={img}
        price={"899"}
        id={"HM3"}
        secondScreenOption={false}
        details={`  Your Profile Will be private
        you can login-to more than 2 device
        Must Need USA server to stream
        এই Site গুলোর একসেস BD তে ব্যান থাকায় আপনি Mobile-Data/Wifi  দিয়ে BD থেকে Streaming করতে পারবেন না।
        সমাধান হিসেবে আপনাকে যেকোনো VPN ইউজ করতে হবে,  VPN এ ‘USA- Server’ Select করে খুব সহজেই আপনি stream কর‍তে পারবেন।`}
      />

      <Details
        name={"HBOMax-12month"}
        img={img}
        price={"1299"}
        id={"HM4"}
        secondScreenOption={false}
        details={`  Your Profile Will be private
        you can login-to more than 2 device
        Must Need USA server to stream
        এই Site গুলোর একসেস BD তে ব্যান থাকায় আপনি Mobile-Data/Wifi  দিয়ে BD থেকে Streaming করতে পারবেন না।
        সমাধান হিসেবে আপনাকে যেকোনো VPN ইউজ করতে হবে,  VPN এ ‘USA- Server’ Select করে খুব সহজেই আপনি stream কর‍তে পারবেন।`}
      />
    </>
  );
};

export default page;
