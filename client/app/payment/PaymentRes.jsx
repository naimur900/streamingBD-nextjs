import Link from "next/link";

const PaymentRes = ({ response, color }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <h1 className={`${color} text-black p-5 rounded-2xl`}>{response}</h1>
      <Link href="/">
        <h1 className="btn btn-accent">Go Home</h1>
      </Link>
    </div>
  );
};

export default PaymentRes;
