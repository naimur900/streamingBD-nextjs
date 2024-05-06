import Details from "../../components/Details";

const page = () => {
  const img = "../images/prime-video.jpg";

  return (
    <>
      <Details
        name={"PrimeVideo-1month"}
        img={img}
        price={"99-150"}
        id={"PV1"}
        secondScreenOption={true}
        details={`  Personal Profile
                    4K Ultra HD
                    Multiple Device’s Login [ Tv/Laptop/Mobile ]
                    28 -30 Days Instant Replace Warranty
                    Account Renew Available For Lifetime
                    সম্পুর্ন অফিসিয়াল একাউন্ট হওয়ায় কোনো রকমের ঝামেলা ছাড়া পরিবার এর সাথে উপভোগ করুন PrimeVideo এর হাজার ও কন্টেন্ট 4K UHD তে।`}
      />

      <Details
        name={"PrimeVideo-6month"}
        img={img}
        price={"499"}
        id={"PV2"}
        secondScreenOption={false}
        details={`  Personal Pin Locked Profile
                    4K Ultra HD
                    Multiple Device’s Login [ Tv/Laptop/Mobile ]
                    6 Month’s Instant Replce Warranty
                    উপভোগ করুক Amazon Prime Video [ India ] 6 Months Subscriptions. আমাদের প্রতিটি একাউন্ট সম্পুর্ণ অফিসিয়াল তাই কোনো প্রকার ঝামেলা ছাড়াই 6 মাস ব্যাবহার করতে পারবেন।`}
      />

      <Details
        name={"PrimeVideo-6month"}
        img={img}
        price={"1099"}
        id={"PV3"}
        secondScreenOption={false}
        details={`  We Will Provide Account With E-mail Access
                    You Can Change Account Password
                    Unlimited Device Login
                    3 Device
                    4k Ultra HD Plan
                    Indian Region Account
                    6 Months Account Replace Warranty`}
      />
      <Details
        name={"PrimeVideo-12month"}
        img={img}
        price={"799"}
        id={"PV4"}
        secondScreenOption={false}
        details={`  Personal Pin Locked Profile
                    4K Ultra HD
                    Multiple Device’s Login [ Tv/Laptop/Mobile ]
                    12 Month’s Instant Replce Warranty
                    উপভোগ করুক Amazon Prime Video [ India ] 12 Months Subscriptions. আমাদের প্রতিটি একাউন্ট সম্পুর্ণ অফিসিয়াল তাই কোনো প্রকার ঝামেলা ছাড়াই ১২ মাস ব্যাবহার করতে পারবেন।`}
      />
    </>
  );
};

export default page;
