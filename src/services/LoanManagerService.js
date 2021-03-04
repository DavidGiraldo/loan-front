import { parseIntBase10 } from '../utilities/Complements';
import axios from 'axios';

const server = 'http://localhost:8080';
const timeout = 3000;
const LOAN_MANAGER_AUTH = '7wFmJTcSYkEUT8dZUFnWMPfwj1siZVNS';

export async function getLoanEvaluation (loanData) {
  let response = null;
  const options = {
    method: 'POST',
    url: `${server}/api/loan-manager/ops/process-loan-request`,
    data: {
      tax_id: loanData.taxId,
      business_name: loanData.businessName,
      requested_amount: loanData.requestedAmount
    },
    timeout: parseIntBase10(timeout),
    headers: {
      'Content-Type': 'application/json',
      Authorization: LOAN_MANAGER_AUTH
    }
  };

  try {
    response = await axios.request(options);
  } catch (error) {
    console.log(error.stack);
    response = null;
  }

  return response;
}
