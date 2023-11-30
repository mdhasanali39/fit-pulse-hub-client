import axiosSecure from "."

export const getCountSubscriberPaidMember = async()=>{
    const {data} = await axiosSecure.get("/count-subscribers-memberships")
    return data;
}
export const getTotalPaymentState = async()=>{
    const {data} = await axiosSecure.get("/total-payment-stat")
    return data;
}
export const getLastSixPayTransaction = async() =>{
    const {data} = await axiosSecure.get("/payments/last-six")
    return data;
}