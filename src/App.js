import React, { useState } from 'react';
import LoansRequestTable from './components/LoansRequestTable';
import { uuid } from 'uuidv4';
import AddLoanRequestForm from './components/AddLoanRequestForm';
import { evaluateLoanRequest } from './utilities/Complements';

function App() {
  const loansData = [];

  const [loans, setLoans] = useState(loansData);

  const addNewLoan = (newLoan) => {
    newLoan.taxId = uuid();
    newLoan.status = 'Pending';
    newLoan.message = 'Pending review';

    setLoans([
      ...loans,
      newLoan
    ])
    updateLoansRequests(newLoan);
  }

  const updateLoansRequests = async (loanToEval) => {
    const loanRequestEval = await evaluateLoanRequest(loanToEval);
    setLoans([
      ...loans,
      loanRequestEval
    ])
  }

  const removeLoanRequest = (taxId) => {
    setLoans(loans.filter(loan => (loan.taxId !== taxId)))
  }

  return (
    <div className="container">
      <img src="images/color_logo.svg" alt="logo"/>
      <hr class="rounded"></hr>
      <h1>Loan Application Form</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Create new loan request</h2>
          <AddLoanRequestForm addNewLoan={ addNewLoan }/>
        </div>
        <div className="flex-large">
          <h2>Created loans data and status</h2>
          <LoansRequestTable loans={ loans } removeLoanRequest={ removeLoanRequest }/>
        </div>
      </div>
    </div>
  );
}

export default App;
