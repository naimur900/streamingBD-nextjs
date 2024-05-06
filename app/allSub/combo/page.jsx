import Details from "../../components/Details";

const page = () => {
  const img = "../images/combo2.jpg";

  return (
    <>
      <Details
        name={"Netflix&PrimeVideo-1month"}
        img={img}
        price={"299"}
        id={"CB1"}
        secondScreenOption={false}
        details={`  30 Days Netflix & 30 Days PrimeVideo
                    Shared Profile
                    4K Ultra HD
                    Multiple Device’s Login [ Tv/Laptop/Mobile ]
                    28 -30 Days Instant Replce Warranty
                    Account Renew Available For Lifetime
                    Shared Netflix Profile এ Profile Name এবং Pin পরিবর্তন করতে পারবেন না। সম্পুর্ন অফিসিয়াল একাউন্ট হওয়ায় কোনো রকমের ঝামেলা ছাড়া পরিবার এর সাথে উপভোগ করুন Netflix & PrimeVideo এর হাজার ও কন্টেন্ট 4K UHD তে।`}
      />
    </>
  );
};

export default page;
