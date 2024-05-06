import Details from "../../components/Details";

const page = () => {
  const img = "../images/netflix-price.jpg";

  return (
    <>
      <Details
        name={"Netflix-1month"}
        img={img}
        price={"249-480"}
        id={"NF1"}
        secondScreenOption={true}
        details={`Shared Profile
                  4K Ultra HD
                  Multiple Device’s Login [ Tv/Laptop/Mobile ]
                  28 -30 Days Instant Replace Warranty
                  Account Renew Available For Lifetime
                  Shared Profile এ Profile Name এবং Pin পরিবর্তন করতে পারবেন না। 
                  সম্পুর্ন অফিসিয়াল একাউন্ট হওয়ায় কোনো রকমের ঝামেলা ছাড়া পরিবার এর সাথে উপভোগ করুন Netflix এর হাজার ও কন্টেন্ট 4K UHD তে।`}
      />
      <Details
        name={"Netflix-2month"}
        img={img}
        price={"599"}
        id={"NF2"}
        secondScreenOption={false}
        details={`Personal Profile [ Protected With Pin ]
                  Customizable Profile & Pin
                  4K Ultra HD
                  Multiple Device’s Login [ Tv/Laptop/Mobile ]
                  60 Days Instant Replce Warranty
                  সম্পুর্ন অফিসিয়াল একাউন্ট হওয়ায় কোনো রকমের ঝামেলা ছাড়া পরিবার এর সাথে উপভোগ করুন Netflix এর হাজার ও কন্টেন্ট 4K UHD তে। আপনি চাইলে একাউন্ট দুই মাস পর পর রিনিউ করে Lifetime Same একাউন্ট Continue করতে পারবেন।`}
      />
      <Details
        name={"Netflix-12month"}
        img={img}
        price={"1799"}
        id={"NF3"}
        secondScreenOption={false}
        details={`Personal Profile [ Protected With Pin ]
                  Customizable Profile & Pin
                  4K Ultra HD
                  Multiple Device’s Login [ Tv/Laptop/Mobile ]
                  6 Month’s Instant Replce Warranty
                  VIP Customer Support ✔️
                  সম্পুর্ন অফিসিয়াল একাউন্ট হওয়ায় কোনো রকমের ঝামেলা ছাড়া পরিবার এর সাথে উপভোগ করুন Netflix এর হাজার ও কন্টেন্ট 4K UHD তে। আপনি চাইলে একাউন্ট ছয় মাস পর পর রিনিউ করে Lifetime Same একাউন্ট Continue করতে পারবেন।`}
      />
    </>
  );
};

export default page;
