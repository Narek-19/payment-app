import { NextRequest,NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request){
    try{
        const {amount} = await request.json();
        
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            payment_method_types: ['card'],
            payment_method_options: {
                card: {
                    request_three_d_secure: 'challenge',
                },
            },
          });
      
          return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    }catch(error){
        console.error("Internal error:",error);
        return NextResponse.json(
            {error:`Internal Server Error: ${error}`},
            {status:500}
        )
    }
}