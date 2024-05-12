import Form from "../checkout/Form";

const page = ({ searchParams }) => {
  const totalPrice = searchParams.totalPrice;

  return (
    // flex flex-col items-center m-10 text-center gap-10 md:m-20 md:flex-row md:gap-0
    <div className="container mx-auto flex flex-col justify-center items-center px-[12%] h-screen">
      <div className="flex flex-col items-center md:w-1/2 lg:w-1/3">
        <h1 className="text-lg font-bold">CHECKOUT</h1>
        {/* <div
          className="object-cover w-3/4 overflow-hidden rounded-3xl md:p-0"
          // variants={bkashQRVariant}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/images/bkash-min.jpg"
            height={"700"}
            width={"700"}
            alt=""
          />
        </div> */}
      </div>
      <Form totalPrice={totalPrice} />
    </div>
  );
};

export default page;
