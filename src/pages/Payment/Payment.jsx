import { loadStripe } from "@stripe/stripe-js";
import Title from "../../components/Shared/Title/Title";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/Form/CheckoutForm";
import { useQuery } from "@tanstack/react-query";
import { getSingleSlot, getSingleTrainer } from "../../api/trainer";
import { useSearchParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
  const [params] = useSearchParams();
  const { user } = useAuth();

  const trainer = params?.get("trainer");
  const slot = params?.get("slot");
  const packageName = params?.get("package");
  const price = params?.get("price");

  //   get single slot
  const { data: slotData = {} } = useQuery({
    queryKey: ["slot", slot],
    queryFn: async () => await getSingleSlot(slot),
  });

  // console.log(slotData);
  // get trainer
  const { data: trainerData = {} } = useQuery({
    queryKey: ["trainer", trainer],
    queryFn: async () => await getSingleTrainer(trainer),
  });
  //   console.log(trainerData);

  return (
    <div>
      <Title heading_first="payment" subHeading="payment to proceed"></Title>
      <div className="bg-action-bg bg-opacity-10 w-2/5 mx-auto p-4 space-y-3 rounded-md">
        <div>
          <h2 className="font-semibold">
            Trainer name: {trainerData?.trainer_name}
          </h2>
          <div>
            <p className="font-semibold">Slot that you selected:</p>
            <div className="flex flex-wrap gap-3 border p-4">
              <h2 className="text-black-text text-lg font-semibold pr-1 border-r-4 border-action-text">
                {slotData.slotName}
              </h2>
              <h2 className="text-black-text text-lg font-semibold pr-1 border-r-4 border-action-text">
                Start: {slotData?.startTime}
              </h2>
              <h2 className="text-black-text text-lg font-semibold">
                End: {slotData?.endTime}
              </h2>
            </div>
          </div>
          <p className="font-semibold">Package name: {packageName}</p>
          <p className="font-semibold">Price: {price}</p>
          <p className="font-semibold">Your name: {user?.displayName}</p>
          <p className="font-semibold">Your email: {user?.email}</p>
        </div>
        <hr/>
        <div>
          <Elements stripe={stripePromise}>
              <CheckoutForm
                price={price} 
                packageName={packageName}
                slotName={slotData?.slotName}
                slotId={slot}
                trainerEmail={trainerData?.trainer_email}
                trainerName={trainerData?.trainer_name}
                trainerId={trainerData?._id}
             />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
