const FormRow = ({ name, type, value, labelText, handleChange }) => {
	return (
		<div className="form-row">
			<label htmlFor={name} className="form-label">
				{labelText}
			</label>
			<input type={type} name={name} value={value} onChange={handleChange} className="form-input" />
		</div>
	);
};
export default FormRow;
