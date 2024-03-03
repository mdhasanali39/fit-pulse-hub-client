const AllTrainersRow = ({ trainer, idx }) => {
  const {
    _id,
    trainer_name,
    trainer_email,
    trainer_age,
    image_url,
    skills,
    available_time_in_week,
    available_time_in_day,
    status,
    salary,
    experience,
  } = trainer || {};

  return (
    <tr>
      <th>{idx + 1}</th>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-8 h-8">
            <img
                className="object-top"
              src={image_url}
              alt={trainer_name}
            />
          </div>
        </div>
      </td>
      <td>{trainer_name}</td>
      <td>{trainer_email}</td>
      <td>{salary === "unpaid"? "unpaid": "paid"}</td>
    </tr>
  );
};

export default AllTrainersRow;
