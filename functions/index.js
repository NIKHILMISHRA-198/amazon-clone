const functions = require("firebase-functions");
const express = require("express");

const cors = require("cors")

const stripe = require("stripe")('sk_test_51Jf2v3SA664eXf3C1hotN6nsfmq87yVYmx561luMoXF6C4C5vHN01NV0VzKWKe8sDvuflpt4RSUJsGJdRVrk9XX100i6u8ViFN')

//API

//  - App config
const app = express();

//  - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received for the amount', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: 'inr'
    })
    // OK -created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

//  - Listen command
exports.api = functions.https.onRequest(app)

//Example endpoint
//http://localhost:5001/challenge-bc1ba/us-central1/api