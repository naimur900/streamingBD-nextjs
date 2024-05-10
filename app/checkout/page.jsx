import Form from "../checkout/Form";

const page = ({ searchParams }) => {
  const totalPrice = searchParams.totalPrice;

  return <Form totalPrice={totalPrice} />;
};

export default page;
