const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const stripe = require("stripe")(
  "sk_test_51KTUclKM0nmL4AcCCoWtvT0fRs2mfHzErr90n2YgBXqVDCHRQjC0bzKyz5M7IERkGhf1teuDDj4ROTjjeaTFENwA00MaJaShO6"
);

// API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunit of currency
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);
