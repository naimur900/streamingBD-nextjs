import Details from "../../components/Details";

const page = () => {
  const img = "/images/vpn2.jpg";

  return (
    <>
      <Details
        name={"NordVPN-6month"}
        img={img}
        price={"499"}
        id={"VP1"}
        secondScreenOption={true}
        details={`  Device Limitation [ Max 2 Device ]
                    Login With E-mail And Password
                    Multiple Device’s Login [ Tv/Laptop/Mobile ]
                    Full Duration Instant Replce Warranty
                    প্রতিটি একাউন্ট সম্পুর্ণ অফিসিয়াল তাই কোনো প্রকার ঝামেলা ছাড়াই  ব্যাবহার করতে পারবেন`}
      />
      <Details
        name={"NordVPN-12month"}
        img={img}
        price={"799"}
        id={"VP2"}
        secondScreenOption={false}
        details={`  Device Limitation [ Max 2 Device ]
                    Login With E-mail And Password
                    Multiple Device’s Login [ Tv/Laptop/Mobile ]
                    Full Duration Instant Replce Warranty
                    প্রতিটি একাউন্ট সম্পুর্ণ অফিসিয়াল তাই কোনো প্রকার ঝামেলা ছাড়াই  ব্যাবহার করতে পারবেন`}
      />
      <Details
        name={"NordVPN-24month"}
        img={img}
        price={"1399"}
        id={"VP3"}
        secondScreenOption={false}
        details={`  Device Limitation [ Max 2 Device ]
                    Login With E-mail And Password
                    Multiple Device’s Login [ Tv/Laptop/Mobile ]
                    Full Duration Instant Replce Warranty
                    প্রতিটি একাউন্ট সম্পুর্ণ অফিসিয়াল তাই কোনো প্রকার ঝামেলা ছাড়াই  ব্যাবহার করতে পারবেন`}
      />
    </>
  );
};

export default page;
