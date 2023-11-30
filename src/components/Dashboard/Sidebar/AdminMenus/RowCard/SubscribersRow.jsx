import PropTypes from 'prop-types'

const SubscribersRow = ({subscriber,idx}) => {


  return (
      <tr>
        <th>{idx +1}</th>
        <td>{subscriber?.subscriber_name}</td>
        <td>{subscriber?.subscriber_email}</td>
      </tr>

  );
};
SubscribersRow.propTypes = {
    subscriber: PropTypes.object.isRequired,
    idx:PropTypes.number,
}
export default SubscribersRow;
