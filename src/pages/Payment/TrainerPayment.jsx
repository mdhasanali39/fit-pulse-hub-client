import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import TrainerCheckoutFrom from "../../components/Form/TrainerCheckoutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);


const TrainerPayment = () => {
    return (
        <div>
          <Elements stripe={stripePromise}>
              <TrainerCheckoutFrom/>
          </Elements>
        </div>
    );
};

export default TrainerPayment;