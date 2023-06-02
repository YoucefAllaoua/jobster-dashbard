const FormRow = ({ name, type, value, labelText, handleChange }) => {
	return (
		<div className="form-row">
			<label htmlFor={name} className="form-label">
				{labelText ? labelText : name}
			</label>
			<input type={type} name={name} value={value} onChange={handleChange} id={name}  className="form-input" />
		</div>
	);
};
export default FormRow;
