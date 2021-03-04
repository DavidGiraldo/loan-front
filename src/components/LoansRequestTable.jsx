import React, {Fragment} from 'react';

const LoansRequestTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          props.loans.length 
          ?  props.loans.map(loan => (
            <Fragment>
              <tr key={ loan.taxId }>
                <td>{ loan.taxId.split('-').pop() }</td>
                <td>{ loan.businessName }</td>
                <td>{ loan.requestedAmount }</td>
                <td>{ loan.status }</td>
                <td rowSpan="2">
                  <button
                    className="button muted-button"
                    onClick={() => {props.removeLoanRequest(loan.taxId)}}>
                      Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan={4}><b>Info:</b> { loan.message }</td>
              </tr>
            </Fragment>
            ))
          : (
              <tr>
                <td colSpan={5}>No loans to display</td>
              </tr>
            )
        }
      </tbody>
    </table>
  );
}
 
export default LoansRequestTable;
