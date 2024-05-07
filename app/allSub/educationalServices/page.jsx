import Details from "../../components/Details";

const page = () => {
  const imgGrammarly = "/images/allSVG/grammarly.svg";
  const imgQuillbot = "/images/allSVG/quillbot.svg";
  const imgCanvaPro = "/images/allSVG/canva.svg";

  const monthPriceDictGrammarly = {
    3: ["399"],
    6: ["699"],
    12: ["999"],
  };

  const monthPriceDictQuillbot = {
    6: ["699"],
    12: ["999"],
  };

  const monthPriceDictCanvaPro = {
    6: ["199"],
    12: ["299"],
  };

  return (
    <>
      <Details
        name={"Grammarly Premium"}
        img={imgGrammarly}
        monthPriceDict={monthPriceDictGrammarly}
        id={"GP1"}
        isVpn={false}
        details={`3 Months: 399/-
        6 months profile: 699/-
        1 year Profile: 999/-`}
      />

      <Details
        name={"Quillbot Premium"}
        img={imgQuillbot}
        monthPriceDict={monthPriceDictQuillbot}
        id={"QB1"}
        isVpn={false}
        details={`6 months: 699/-
                  1 Year: 999/-`}
      />

      <Details
        name={"Canva"}
        img={imgCanvaPro}
        monthPriceDict={monthPriceDictQuillbot}
        id={"CP"}
        isVpn={false}
        details={`Personal Mail
                  6 months personal mail - 199/-
                  1 year personal  mail  299/-
                  fully official account so we will provide full warranty`}
      />
    </>
  );
};

export default page;
