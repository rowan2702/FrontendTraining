const InputField = ({
    label,
    id,
    placeholder,
    onChange,
    value
}) => {
    
    return (
        <div>
            <label>{label}</label>
            <input id={id} type="text" placeholder={placeholder} onChange={(event) => onChange(event.target.value)} value={value} /> 
        </div>

    )
}

export default InputField;