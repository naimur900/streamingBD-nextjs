import Details from "../../components/Details";
import TopLinks from "../../components/TopLinks";

const page = () => {
  const imgChatGpt = "/images/allSVG/chatgpt.svg";
  const svgs = {
    CG1: { img: imgChatGpt },
  };

  const monthPriceDict = {
    1: ["499"],
  };

  return (
    <>
      <TopLinks svgs={svgs} page={"aiTools"} />

      <Details
        name={"Chat GPT"}
        img={imgChatGpt}
        monthPriceDict={monthPriceDict}
        id={"CG1"}
        isVpn={false}
        details={`Limit 40 Massage Per 3 hours As per there Plan
        Multi-Device Access: Enjoy login capability on up to 2 devices simultaneously.
        Shared Subscription.
        Instant Setup: You will be given a ready-made email and password.
        Access to Latest Versions: Utilize both ChatGPT 3.5 and ChatGPT 4 for enhanced AI capabilities.
        Enjoy a complete replacement warranty throughout the subscription period.`}
      />
    </>
  );
};

export default page;
