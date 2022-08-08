const InputSelect = ({
    label,
    id,
    options,
    onChange
}) => {
    return(
        <div>
            <label>{label}</label>
            <select id={id} onChange={(event) => onChange(event.target.value)}>
                {options.map((item) => (
                    <option key={item.key}>{item.label}</option>
                ))}
            </select>
        </div>
    );
};

export default InputSelect;