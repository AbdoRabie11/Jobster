
const FormRow = ({type, name, value , handleChange, labelText}) => {
  return (
   
    <div className="form-row">
      <label htmlFor={name} className='form-label'>
    { name}
      </label>
      <input 
      type={type}
      value={value}
      className='form-input' 
      onChange={handleChange}
      name={name}
      />
    </div>
    
  )
}

export default FormRow