import PropTypes from 'prop-types';

const SixPaymentsRow = ({payment,idx}) => {
    return (
        <tr>
            <td>{idx + 1}</td>
            <td>{payment?.member_name}</td>
            <td>{payment?.member_email}</td>
            <td>{payment?.transaction_id}</td>
        </tr>
    );
};
SixPaymentsRow.propTypes = {
    payment: PropTypes.object.isRequired,
    idx: PropTypes.number,
}
export default SixPaymentsRow;