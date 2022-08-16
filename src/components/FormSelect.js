


const FormSelect = ({name, value, handleChange, list}) => {
  return (
    <div className='form-row'>
    <label htmlFor={name} className='form-label'>
      status
    </label>
    <select name={name}
    id={name} 
    value={value}
    onChange={handleChange} 
    className='form-select'
    >
    {list.map((itemVal , index) => {
      return <option key={index} value={itemVal}>{itemVal}</option>
    })}
    </select>
  </div>  )
}

export default FormSelect