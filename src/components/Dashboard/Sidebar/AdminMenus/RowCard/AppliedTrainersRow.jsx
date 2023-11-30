import { FaEye } from "react-icons/fa";
import PropTypes from "prop-types";

const AppliedTrainersRow = ({ trainer, idx,handleShowModal }) => {
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{trainer?.trainer_name}</td>
      <td>{trainer?.trainer_name}</td>
      <td onClick={() => handleShowModal(trainer?._id)}>
        <FaEye size={24} />
      </td>
    </tr>
  );
};

AppliedTrainersRow.propTypes = {
  trainer: PropTypes.object.isRequired,
};

export default AppliedTrainersRow;
