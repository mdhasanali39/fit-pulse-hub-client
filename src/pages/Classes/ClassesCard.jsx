import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ClassesCard = ({ classItem }) => {
  const navigate = useNavigate()
  const { class_name, image, duration } = classItem || {};

    const handleClass = (id) => {
      navigate(`/class-details/${id}`);
    };

  return (
    <div onClick={()=>handleClass(classItem?._id)}>
      <div className="rounded-md relative">
        <div className="h-[300px]">
          <img
            className="h-full w-full object-cover rounded-md"
            src={image}
            alt={class_name}
          />
        </div>
        <h4 className="flex justify-center items-center absolute top-0 text-xl text-transparent hover:text-white font-bold w-full h-full rounded-md bg-opacity-0 hover:bg-opacity-60 bg-black-text transition ease-linear duration-300">
          {class_name}
        </h4>
      </div>
        <p className="text-action-text text-center bg-black-text mt-1 rounded-md">{duration}</p>
    </div>
  );
};
ClassesCard.propTypes ={
  classItem: PropTypes.object.isRequired,
}
export default ClassesCard;
