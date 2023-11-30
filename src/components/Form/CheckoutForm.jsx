import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axiosSecure from "../../api";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = ({price,packageName,trainerName,trainerEmail,slotId,trainerId,slotName}) => {

  const stripe = useStripe();
  const elements = useElements();
  const {user} = useAuth()
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState('')
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate()
 

  useEffect(() => {
    if(price > 0){
      axiosSecure
      .post("/create-payment-intent", { price: price })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price]);
console.log(clientSecret);



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      console.log("[error]", error);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm card payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if(paymentIntent.status === "succeeded"){
        setTransactionId(paymentIntent.id)

        // now save the payment in database 
        const paymentData = {
          trainer_email: trainerEmail,
          trainer_name: trainerName,
          trainer_id: trainerId,
          slot_id: slotId,
          slot_name: slotName,
          member_name: user?.displayName,
          member_email: user?.email,
          member_photo: user?.photoURL,
          package_price: price,
          package_name: packageName,
          transaction_id: paymentIntent.id
        }
        console.log(paymentData);

        const res = await axiosSecure.post(`/memberships`, paymentData)
        console.log(res.data);
        // if(res.data.status){
        //   toast.success(res.data.status)
        //   return
        // }
        if(res.data.insertedId){
          toast.success("Payment successful")
          navigate("/")
        }
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-center mt-4">
        <button
          className="btn btn-sm btn-outline my-2 mx-auto"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Confirm pay
        </button>
        </div>
      </form>
      {/* error message showed here  */}
      <p>{error}</p>
      {/* transaction Id */}
      {transactionId && <p>Your transaction id: {transactionId}</p>}
    </div>
  );
};

export default CheckoutForm;
