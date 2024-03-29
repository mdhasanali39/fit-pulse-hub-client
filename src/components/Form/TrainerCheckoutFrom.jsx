import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axiosSecure from "../../api";
import toast from "react-hot-toast";

const TrainerCheckoutFrom = () => {
    const [params] = useSearchParams()
    const price = params.get("tpa")
    const trainerIds = params.get("tid")
    // console.log([...trainerIds.split(',')]);
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing,setProcessing] = useState(false)
  const navigate = useNavigate();


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
    //   console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm card payment
    setProcessing(true)
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
    //   console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        // now save the payment in database
        const paymentData = {
          trainerIds: [...trainerIds.split(',')],
          pay_by: user?.email,
          total_amount: price,
          transaction_id: paymentIntent.id
        }
        // console.log(paymentData);

        const data = await axiosSecure.patch("/update-trainers",{salary:"paid"})
        console.log(data.data);

        const res = await axiosSecure.post("/save-trainer-payment", paymentData)
        // console.log(res.data);
        if(res.data.insertedId){
          toast.success("Payment successful")
          navigate("/dashboard/all-trainers",{replace:true})
        }
        setProcessing(false)
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
            disabled={!stripe || !clientSecret || processing}
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

export default TrainerCheckoutFrom;
