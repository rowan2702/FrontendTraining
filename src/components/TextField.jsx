const TextField = ({
    label,
    value,
    classname
}) => {
    return (
        <>
        <div>
            <label>
                {label}
            </label>
            <label className={classname}>
                {value}
            </label>
        </div>
        </>
    );
};

export default TextField;