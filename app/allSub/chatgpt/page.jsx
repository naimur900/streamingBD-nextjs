import Details from "../../components/Details";

const page = () => {
  const img = "../images/chatgpt2.jpg";

  return (
    <>
      <Details
        name={"ChatGPTPlus-1month"}
        img={img}
        price={"499"}
        id={"CG1"}
        secondScreenOption={false}
        details={`  Limit 40 Massage Per 3 hours As per there Plan
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
