// const stripe = require('../config/stripe');

// exports.createPaymentIntent = async (req, res) => {
//   try {
//     const { amount, currency } = req.body;

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency,
//     });

//     res.status(200).json({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
