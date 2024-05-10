import Details from "../../components/Details";
import TopLinks from "../../components/TopLinks";
import data from "../../utils/data.json";

const page = () => {
  const musicStreamingServices = Object.values(data).filter(
    (entry) => entry.category === "musicStreamingServices"
  );

  return (
    <>
      <TopLinks service={musicStreamingServices} />

      {musicStreamingServices.map((subscription) => (
        <Details
          key={subscription.id} // Ensure each element has a unique key
          name={subscription.name}
          img={subscription.img[0]} // This should be dynamic based on the subscription
          monthPriceDict={subscription.prices}
          id={subscription.id}
          isVpn={subscription.is_vpn} // Ensure this property exists in your data
          details={subscription.details}
        />
      ))}
    </>
  );
};

export default page;
