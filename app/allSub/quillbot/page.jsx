import Details from "../../components/Details";

const page = () => {
  const img = "../images/quillbotpremium2.jpg";

  return (
    <>
      <Details
        name={"QuillBotPremium-12month"}
        img={img}
        price={"599"}
        id={"QP1"}
        secondScreenOption={false}
        details={`  Quillbot Premium – Paraphrasing Tool
                    QuillBot AI (1 Year Subscription)
                    Instant delivery Minimum -15 minutes Maximum 6 hours`}
      />
    </>
  );
};

export default page;
