import PropTypes from 'prop-types';
import SixPaymentsRow from "./SixPaymentsRow";

const SixPayments = ({payments}) => {
    return (
       <div className="overflow-x-auto">
         <table className="table w-full">
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Email</th>
            <th>transactionId</th>
          </tr>
        </thead>
        <tbody>
          {
            payments.map((payment,idx) => <SixPaymentsRow key={payment._id} payment={payment} idx={idx}></SixPaymentsRow>)
          }
        </tbody>
      </table>
       </div>
    );
};

SixPayments.propTypes ={
    payments: PropTypes.array.isRequired,
}
export default SixPayments;