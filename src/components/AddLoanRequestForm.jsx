import React from 'react'
import { useForm } from 'react-hook-form'

const AddLoanRequestForm = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, evt) => {
    props.addNewLoan(data)
    evt.target.reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Business name *</label>
      <input type="text" name="businessName" ref={
        register({
          required: { value: true, message: 'Campo requerido *' }
        })
      } />
      <div>
        { errors?.businessName?.message }
      </div>
      <label>Requested amount *</label>
      <input type="number" name="requestedAmount" ref={
        register({
          required: { value: true, valueAsNumber: true, message: 'Campo requerido *' }
        })
      } />
      <div>
        { errors?.requestedAmount?.message }
      </div>
      <button>Send new loan request</button>
    </form>
  );
}
 
export default AddLoanRequestForm;
