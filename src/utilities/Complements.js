import { getLoanEvaluation } from '../services/LoanManagerService';
import _ from 'lodash';

const DEFAULT_STATUS = 'undecided';
const DEFAULT_MESSAGE = 'The request must be analyzed by an agent.'

export async function evaluateLoanRequest (loanData) {
  const { data } = await getLoanEvaluation(loanData);

  return {
    taxId: _.get(data, 'tax_id', loanData.taxId),
    businessName: _.get(data, 'business_name', loanData.businessName),
    requestedAmount: _.get(data, 'requested_amount', loanData.requestedAmount),
    status: _.get(data, 'managed_loan_result.status', DEFAULT_STATUS),
    message: _.get(data, 'managed_loan_result.message', DEFAULT_MESSAGE)
  }
}

export function parseIntBase10 (valueToParse) {
  return parseInt(valueToParse, 10);
}
