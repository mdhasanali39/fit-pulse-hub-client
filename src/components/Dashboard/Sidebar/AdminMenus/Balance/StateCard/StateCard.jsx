import Card from "./Card";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getTotalPaymentState } from "../../../../../../api/balance";

const StateCard = () => {

    const {data = {}} = useQuery({
        queryKey: ["totalRemaining,totalPayment"],
        queryFn: async()=> await getTotalPaymentState()
    })
    console.log(data);
  return (
    <>
      <h2 className="text-3xl font-bold text-center">
        ----Total Remaining and Total Payment----
      </h2>
      <div className="stats shadow flex justify-center mt-8 w-3/4 mx-auto">
        <Card title="Total Remaining" total={data?.membersPayment?.$numberDecimal - data?.adminPayment?.$numberDecimal} icon={FaDollarSign}></Card>
        <Card
          title="Total Payment"
          total={data?.membersPayment?.$numberDecimal}
          icon={MdOutlineAccountBalanceWallet}
        ></Card>
      </div>
    </>
  );
};

export default StateCard;
