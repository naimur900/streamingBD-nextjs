// import { Resend } from "resend";
// import Welcome from "../../emails/Welcome";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request) {
//   const { senderName, email, trxID, reference } = await request.json();
//   await resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: "naimur.rahman900@gmail.com",
//     subject: "New Subscription Bought!!!",
//     react: <Welcome />,
//   });
// }
