import toast from "react-hot-toast";
import { axiosPublic } from "../../../api";

/* eslint-disable react/no-unescaped-entities */
const NewsLetter = () => {
  const handleSubscribe = async(e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subscriberData = {
      subscriber_name: name,
      subscriber_email: email,
    }

    try {
      const {data} = await axiosPublic.post(`/newsletter-subscriber/${email}`, subscriberData)
      console.log(data);
      if(data.user){
        toast.success("You already subscribed our newsletter, Thank you")
      }else if(data.insertedId){
        toast.success("You successfully subscribed to our newsletter")
      }
    } catch (err) {
      console.log(err);
    }

    console.log(subscriberData);
  };

  return (
    <div className="my-20 border lg:w-3/5 mx-auto bg-black bg-opacity-10 rounded-md p-4">
      <div className="w-full">
        <h2 className="text-lg font-semibold">Let's Join First</h2>
        <p className="mb-4">
          Subscribe our new letter to gates latest update of offers, classes and
          blogs.
        </p>
        <form
        onSubmit={handleSubscribe}
         className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 h-12 border border-black-text rounded-md outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 h-12 border border-black-text rounded-md outline-none"
          />
          <button
            type="submit"
            className="flex gap-1 items-center uppercase text-lg text-black font-semibold px-4 py-1 rounded-lg bg-action-bg border hover:bg-white  hover:border-action-text transition ease-linear duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
