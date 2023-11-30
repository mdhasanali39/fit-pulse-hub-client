import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PackageCard = ({
  packageName,
  price,
  facility_1,
  facility_2,
  facility_3,
  facility_4,
  facility_5,
  trainer,
  slot
}) => {
  return (
    <div className="border shadow-md p-4 rounded-md">
      <h2 className="text-2xl font-bold text-center text-action-text">{packageName}</h2>
      {/* price  */}
      <p className="font-medium  text-center mt-3"><span className="text-5xl">${price}</span>/per month</p>
      {/* classes and facilities  */}
      <div className="list-none space-y-3 my-4">
        <li className="flex gap-2 items-center">
          <FaCircleCheck />
          <span>{facility_1}</span>
        </li>
        <li className="flex gap-2 items-center">
          <FaCircleCheck />
          <span>{facility_2}</span>
        </li>
        <li className="flex gap-2 items-center">
          <FaCircleCheck />
          <span>{facility_3}</span>
        </li>
        <li className="flex gap-2 items-center">
          <FaCircleCheck />
          <span>{facility_4}</span>
        </li>
        <li className="flex gap-2 items-center">
          <FaCircleCheck />
          <span>Free to drink package</span>
        </li>
        <li className="flex gap-2 items-center">
          <FaCircleCheck />
          <span>{facility_5}</span>
        </li>
      </div>
      {/* join now button */}
      <div className="mb-4 mt-7">
        <Link to={`/payment?slot=${slot}&trainer=${trainer}&package=${packageName}&price=${price}`}>
        <button
          type="submit"
          className="flex gap-1 items-center mx-auto uppercase text-lg text-black font-semibold px-4 py-1 rounded-lg bg-action-bg border hover:bg-white  hover:border-action-text transition ease-linear duration-300"
        >
          Join Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
