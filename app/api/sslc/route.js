// import { v4 as uuidv4 } from 'uuid';
//  // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
// //  import { SSLCommerzPayment } from 'sslcommerz-lts';


// export async function POST(req){
//   const body  = await req.json()
//   console.log(body);

//   const tran_id = uuidv4();
//   // const store_id = 'strea663c84fe82ea9'
//   // const store_passwd = 'strea663c84fe82ea9@ssl'
//   // const is_live = false 

//   const data = {
//     store_id:"strea663c84fe82ea9",
//     store_passwd:"strea663c84fe82ea9@ssl",
//     total_amount: parseFloat(body.price),
//     currency: 'BDT',
//     tran_id: tran_id, // use unique tran_id for each api call
//     success_url: 'http://localhost:3000/',
//     fail_url: 'http://localhost:3000/',
//     cancel_url: 'http://localhost:3000/',
//     ipn_url: 'http://localhost:3000/',
//     shipping_method: 'Courier',
//     weight_of_items:0,
//     emi_option:0,
//     logistic_pickup_id:"0011",
//     logistic_delivery_type:"sds",
//     num_of_item:1,
//     product_name: 'Computer.',
//     product_category: 'Electronic',
//     product_profile: 'general',
//     cus_name: body.senderName,
//     cus_email: body.email,
//     cus_add1: 'Dhaka',
//     cus_add2: 'Chattogram',
//     cus_city: 'Dhaka',
//     cus_state: 'Dhaka',
//     cus_postcode: '4216',
//     cus_country: 'Bangladesh',
//     cart: [{"sku":"REF00001","product":"DHK TO BRS AC A1","quantity":"1","amount":"200.00","unit_price":"200.00"},{"sku":"REF00002","product":"DHK TO BRS AC A2","quantity":"1","amount":"200.00","unit_price":"200.00"},{"sku":"REF00003","product":"DHK TO BRS AC A3","quantity":"1","amount":"200.00","unit_price":"200.00"},{"sku":"REF00004","product":"DHK TO BRS AC A4","quantity":"2","amount":"200.00","unit_price":"100.00"}],
//     cus_phone: body.phoneNumber,
//     ship_name: 'Customer Name',
//     ship_add1: 'Dhaka',
//     ship_add2: 'Dhaka',
//     ship_area:"sdsds",
//     ship_city: 'Dhaka',
//     ship_state: 'Dhaka',
//     ship_postcode: "4216",
//     ship_country: 'Bangladesh',
//     ship_sub_city: 'Chattogram',
//     value_a:"ref001_A",
//     value_b:"ref002_B",
//     value_c:"ref003_C",
//     value_d:"ref004_D",
// };

 
// // console.log(data);

// const sslRes = await fetch("https://sandbox.sslcommerz.com/gwprocess/v3/api.php", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// });

// const sslData = await sslRes.json();
// console.log(sslData);



//   return new Response('OK')
// }