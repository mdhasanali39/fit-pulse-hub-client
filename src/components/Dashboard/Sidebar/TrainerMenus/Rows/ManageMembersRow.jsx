import PropTypes from 'prop-types'

const ManageMembersRow = ({member,idx}) => {
    return (
        <tr>
      <th>{idx + 1}</th>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-8 h-8">
            <img
                className="object-top"
              src={member?.member_photo}
              alt={member?.member_name}
            />
          </div>
        </div>
      </td>
      <td>{member?.member_name}</td>
      <td>
        <p>
            <a href={`mailto:${member?.member_email}`}>{member?.member_email}</a>
        </p>
      </td>
      <td className="font-semibold">{member?.slot_name}</td>
    </tr>
    );
};
ManageMembersRow.propTypes = {
    member: PropTypes.object.isRequired,
    idx: PropTypes.number,
}
export default ManageMembersRow;