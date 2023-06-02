const FormRowSelect = ({ handleInput, list, name, labelText, value }) => {
	return (
		<div className="form-row">
			<label className="form-label" htmlFor={name}>
				{labelText ? labelText : name}
			</label>
			<select value={value} onChange={handleInput} className="form-select " name={name} id="">
				{list.map((item, index) => {
					return (
						<option value={item} key={index}>
							{item}
						</option>
					);
				})}
			</select>
		</div>
	);
};
export default FormRowSelect;
